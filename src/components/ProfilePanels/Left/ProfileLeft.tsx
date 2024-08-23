import { Component } from "preact";
import { AvatarChangeable, NicknameChangeable } from "@components";
import styles from "./ProfileLeft.module.styl";

export class ProfileLeft extends Component {
    render() {
        return (
            <div className={styles.left_panel}>
                <AvatarChangeable />
                <NicknameChangeable />
            </div>
        );
    }
}
