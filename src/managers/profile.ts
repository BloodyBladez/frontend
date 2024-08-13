import {createContext} from "preact";
import {signal, type Signal} from "@preact/signals";
import LocalStorage, {type Profile} from "../classes/LocalStorage";

export const ProfileManager = {
    nickname: signal('') as Signal<Profile['nickname']>,
    avatar: signal('') as Signal<Profile['avatar']>,
    setNickname(nickname: string) {
        ProfileManager.nickname.value = nickname;
        ProfileManager.save();
    },
    setAvatar(avatar: string) {
        ProfileManager.avatar.value = avatar;
        ProfileManager.save();
    },
    load() {
        const data = LocalStorage.get('profile');
        const base = { nickname: '', avatar: '' };

        ProfileManager.nickname.value = data?.nickname ?? base.nickname;
        ProfileManager.avatar.value = data?.avatar ?? base.avatar;

        if(!data) ProfileManager.save();
    },
    save() {
        const data = {
            nickname: ProfileManager.nickname.value,
            avatar: ProfileManager.avatar.value
        }

        LocalStorage.set('profile', data);
    }
}

export const ProfileContext = createContext({} as typeof ProfileManager);