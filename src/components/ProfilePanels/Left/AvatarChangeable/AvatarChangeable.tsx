import { Component, createRef, type JSX } from "preact";
import { ProfileContext, type ProfileManager } from "@managers";
import { Image } from "@classes";
import styles from "./AvatarChangeable.module.styl";

export class AvatarChangeable extends Component {
    static contextType = ProfileContext;
    declare context: typeof ProfileManager;
    inputRef = createRef<HTMLInputElement>();

    avatarClick = () => {
        if (this.inputRef.current) {
            this.inputRef.current.click();
        }
    };

    avatarChange = async ({
        currentTarget
    }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        if (currentTarget.files && currentTarget.files[0]) {
            const file = currentTarget.files[0];
            if (file.size > 1048576) return alert("Файл слишком большой");
            const url = await new Image(
                file.type,
                await file.arrayBuffer()
            ).process(200, 200);

            this.context.setAvatar(url);
        }
    };

    render() {
        return (
            <div className={styles.avatar_box}>
                <img
                    width={200}
                    height={200}
                    alt={"Ваша аватарка"}
                    src={this.context.fixedAvatar}
                    onClick={this.avatarClick}
                />
                <input
                    type={"file"}
                    accept={"image/*"}
                    ref={this.inputRef}
                    onChange={this.avatarChange}
                />
            </div>
        );
    }
}
