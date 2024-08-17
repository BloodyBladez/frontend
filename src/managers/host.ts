import {createContext} from "preact";
import {signal, type Signal} from "@preact/signals";
import LocalStorage, {type Host} from "../classes/LocalStorage";

export const HostManager = {
    selected: signal('') as Signal<Host['selected']>,
    list: signal([]) as Signal<Host['list']>,
    load() {
        const data = LocalStorage.get('host');
        const base = { selected: '', list: [] };

        HostManager.selected.value = data?.selected ?? base.selected;
        HostManager.list.value = data?.list ?? base.list;

        if(!data) HostManager.save();
    },
    save() {
        const data = {
            selected: HostManager.selected.value,
            list: HostManager.list.value
        }

        LocalStorage.set('host', data);
    }
}

export const HostContext = createContext({} as typeof HostManager);