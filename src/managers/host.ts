import { createContext } from "preact";
import {
    computed,
    signal,
    type Signal,
    type ReadonlySignal
} from "@preact/signals";
import { AppLocalStorage, type Host, type HostCredentials } from "@classes";
import type { ApiTypes } from "@api-types";

export type ServerData = ApiTypes["/server-info"]["Reply"] & {
    isSecure: boolean;
    timestamp: number;
};

export const HostManager = {
    selected: signal("") as Signal<Host["selected"]>,
    fixedSelected: computed(() => "") as ReadonlySignal<Host["selected"]>,
    credentials: signal({}) as Signal<HostCredentials>,
    list: signal({}) as Signal<Record<string, ServerData>>,
    load() {
        const data = AppLocalStorage.get("host");
        const base = { selected: "", list: {} };

        HostManager.selected.value = data?.selected ?? base.selected;
        HostManager.list.value =
            data?.list.reduce(
                (acc, k) => {
                    acc[k] = {};
                    return acc;
                },
                {} as Record<string, {}>
            ) ?? base.list;

        if (HostManager.selected.value !== "")
            HostManager.credentials.value =
                AppLocalStorage.get(`host_${HostManager.selected.value}`) ?? {};

        if (!data) HostManager.save();
    },
    save() {
        const data = {
            selected: HostManager.selected.value,
            list: Object.keys(HostManager.list.value)
        };

        AppLocalStorage.set("host", data);
        if (HostManager.selected.value !== "")
            AppLocalStorage.set(
                `host_${HostManager.selected.value}`,
                HostManager.credentials.value
            );
    }
};

HostManager.fixedSelected = computed(() =>
    HostManager.selected.value !== ""
        ? HostManager.selected.value
        : "Не выбрано"
);

export const HostContext = createContext({} as typeof HostManager);
