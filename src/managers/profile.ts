import {createContext} from "preact";
import {signal, type Signal} from "@preact/signals";
import LocalStorage, {type Profile} from "../classes/LocalStorage";

export const ProfileManager = {
    data: signal({}) as Signal<Profile>,
    setNickname(nickname: string) {
        ProfileManager.data.value.nickname = nickname;
        ProfileManager.save();
    },
    setAvatar(avatar: string) {
        ProfileManager.data.value.avatar = avatar;
        ProfileManager.save();
    },
    load() {
        const data = LocalStorage.get('profile');

        ProfileManager.data.value = data ?? {
            avatar: "",
            nickname: ""
        }

        if(!data) ProfileManager.save();
    },
    save() {
        if(!ProfileManager.data.value) throw new Error('Saving profile not found in localStorage');
        LocalStorage.set('profile', ProfileManager.data.value);
    }
}

export const ProfileContext = createContext({} as typeof ProfileManager);