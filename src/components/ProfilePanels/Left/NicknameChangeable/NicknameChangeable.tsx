import { Component, createRef, RefObject } from "preact";
import { ProfileContext, type ProfileManager } from "@managers";
import { TextField } from "@components";
import styles from "./NicknameChangeable.module.styl";

export type NicknameChangeableState = {
    isEditing: boolean;
};

export class NicknameChangeable extends Component<{}, NicknameChangeableState> {
    static contextType = ProfileContext;
    declare context: typeof ProfileManager;
    inputRef = createRef<HTMLInputElement | HTMLDivElement>();
    state = { isEditing: false };

    startChangeNickname = () => {
        this.setState({ isEditing: true }, () => {
            if (this.inputRef.current) {
                this.inputRef.current.focus();
            }
        });
    };

    render() {
        return (
            <div className={styles.nickname_box}>
                {this.state.isEditing ? (
                    <TextField
                        min={2}
                        max={20}
                        type={"text"}
                        value={this.context.nickname.peek()}
                        inputRef={this.inputRef as RefObject<HTMLInputElement>}
                        onInput={(str) => this.context.setNickname(str)}
                        onUnFocus={() => this.setState({ isEditing: false })}
                    />
                ) : (
                    <>
                        <div ref={this.inputRef as RefObject<HTMLDivElement>}>
                            {this.context.fixedNickname}
                        </div>

                        <img
                            src={"/extra/pencil.svg"}
                            alt={"Редактирвоать никнейм"}
                            width={32}
                            height={32}
                            onClick={this.startChangeNickname}
                        />
                    </>
                )}
            </div>
        );
    }
}
