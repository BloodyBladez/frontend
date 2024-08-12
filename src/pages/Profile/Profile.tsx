import {Component, createRef, type RefObject} from "preact";
import {ProfileContext, type ProfileManager} from "../../managers/profile";
import styles from "./Profile.module.styl";
import {Image} from "../../classes/Image";

class Profile extends Component {
    declare context: typeof ProfileManager;
    static contextType = ProfileContext;

    inputRef = createRef<HTMLInputElement | HTMLDivElement>();
    fileInputRef = createRef<HTMLInputElement>();
    state = {
        isEditing: false,
        nickname: '',
        avatarPreview: ''
    }

    handleEdit = () => {
        this.setState({ isEditing: true }, () => {
            if(this.inputRef.current) {
                this.inputRef.current.focus();
            }
        });
    }

    handleNicknameChange = (event: InputEvent) => {
        const target = event.target as HTMLInputElement;
        this.setState({ nickname: target.value });
    }

    handleNicknameSave = () => {
        this.setState({ isEditing: false });
        this.context.setNickname(this.state.nickname);
    }

    handleAvatarClick = () => {
        if(this.fileInputRef.current) {
            this.fileInputRef.current.click();
        }
    }

    handleFileChange = async(event: Event) => {
        const target = event.target as HTMLInputElement;
        if(target.files && target.files[0]) {
            const file = target.files[0];
            console.log(file.type);
            if(file.size > 4194304) return alert('Файл слишком большой');
            const data = await new Image(await file.arrayBuffer())
                .process(file.type, 200, 200);
            this.setState({ avatarPreview: data });
            this.context.setAvatar(data);
        }
    }

    componentDidMount() {
        this.setState({ nickname: this.context.data.value.nickname || 'Нет никнейма' });
    }

    render() {
        return (
            <div className={styles.profile}>
                <div className={styles.left_panel}>
                    <img
                        src={this.state.avatarPreview || this.context.data.value.avatar}
                        title="Аватарка игрока"
                        alt="Аватарка игрока"
                        width={200}
                        height={200}
                        onClick={this.handleAvatarClick}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={this.fileInputRef}
                        onChange={this.handleFileChange}
                    />
                    <div className={styles.nickname}>
                        {this.state.isEditing ? (
                            <input
                                type="text"
                                ref={this.inputRef as RefObject<HTMLInputElement>}
                                value={this.state.nickname}
                                onInput={this.handleNicknameChange}
                                onBlur={this.handleNicknameSave}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        this.handleNicknameSave();
                                    }
                                }}
                                minLength={2}
                                maxLength={20}
                            />
                        ) : (
                            <>
                                <div ref={this.inputRef as RefObject<HTMLDivElement>}>{this.state.nickname}</div>
                                <img
                                    src="/extra/pencil.svg"
                                    alt="Кнопка редактирвоания"
                                    width={32}
                                    height={32}
                                    onClick={this.handleEdit}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.stats}>
                    Здесь могла быть ваша реклама
                </div>
            </div>
        );
    }
}

export default Profile;