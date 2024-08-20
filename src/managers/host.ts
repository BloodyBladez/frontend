import { createContext } from "preact";
import { signal, type Signal } from "@preact/signals";
import LocalStorage, { type Host } from "../classes/LocalStorage";
import type { ApiTypes } from "bloodybladez-api-types";

export const HostManager = {
    selected: signal("") as Signal<Host["selected"]>,
    list: signal({}) as Signal<
        Record<string, ApiTypes["/server-info"]["Reply"] | null>
    >,
    timestamp: signal({}) as Signal<Record<string, number>>,
    load() {
        const data = LocalStorage.get("host");
        const base = { selected: "", list: {} };

        HostManager.selected.value = data?.selected ?? base.selected;
        HostManager.list.value =
            data?.list ??
            data?.list.reduce(
                (acc, k) => {
                    acc[k] = null;
                    return acc;
                },
                {} as Record<string, null>
            ) ??
            base.list;
        if (!data) HostManager.save();
    },
    save() {
        const data = {
            selected: HostManager.selected.value,
            list: Object.keys(HostManager.list.value)
        };

        LocalStorage.set("host", data);
    }
};

export const HostContext = createContext({} as typeof HostManager);
