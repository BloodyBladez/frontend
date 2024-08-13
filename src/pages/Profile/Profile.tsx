import {useContext} from "preact/hooks";
import {ProfileContext} from "../../managers/profile";
import AvatarChangeable from "../../components/Avatar/AvatarChangeable";
import NicknameChangeable from "../../components/Nickname/NicknameChangeable";
import styles from "./Profile.module.styl";

const Profile = () => {
    const profile = useContext(ProfileContext);

    return (
        <div className={styles.profile}>
            <div className={styles.left_panel}>
                <AvatarChangeable
                    src={profile.avatar}
                    onSave={profile.setAvatar}
                />

                <NicknameChangeable
                    value={profile.nickname}
                    onSave={profile.setNickname}
                    className={styles.nickname}
                />
            </div>

            <div className={styles.stats}>
                Здесь могла быть ваша реклама
            </div>
        </div>
    );
}

export default Profile;