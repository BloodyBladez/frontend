import { createContext } from "preact";
import {
    computed,
    type ReadonlySignal,
    signal,
    type Signal
} from "@preact/signals";
import { AppLocalStorage, type Profile } from "@classes";
import config from "@config";

export const ProfileManager = {
    nickname: signal("") as Signal<Profile["nickname"]>,
    avatar: signal("") as Signal<Profile["avatar"]>,
    fixedNickname: computed(() => "") as ReadonlySignal<Profile["nickname"]>,
    fixedAvatar: computed(() => "") as ReadonlySignal<Profile["avatar"]>,
    setNickname(nickname: string) {
        ProfileManager.nickname.value = nickname;
        ProfileManager.save();
    },
    setAvatar(avatar: string) {
        ProfileManager.avatar.value = avatar;
        ProfileManager.save();
    },
    load() {
        const data = AppLocalStorage.get("profile");
        const base = { nickname: "", avatar: "" };

        ProfileManager.nickname.value = data?.nickname ?? base.nickname;
        ProfileManager.avatar.value = data?.avatar ?? base.avatar;

        if (!data) ProfileManager.save();
    },
    save() {
        const data = {
            nickname: ProfileManager.nickname.value,
            avatar: ProfileManager.avatar.value
        };

        AppLocalStorage.set("profile", data);
    }
};

ProfileManager.fixedNickname = computed(() =>
    ProfileManager.nickname.value !== ""
        ? ProfileManager.nickname.value
        : config.default.nickname
);
ProfileManager.fixedAvatar = computed(() =>
    ProfileManager.avatar.value !== ""
        ? ProfileManager.avatar.value
        : config.default.avatar
);

export const ProfileContext = createContext({} as typeof ProfileManager);
