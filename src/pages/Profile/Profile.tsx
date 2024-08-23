import { Component } from "preact";
import { ProfileLeft, ProfileRight } from "@components";
import styles from "./Profile.module.styl";

export class Profile extends Component {
    render() {
        return (
            <div className={styles.profile}>
                <ProfileLeft />
                <ProfileRight />
            </div>
        );
    }
}
