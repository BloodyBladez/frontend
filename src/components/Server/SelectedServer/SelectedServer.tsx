import {useContext} from "preact/hooks";
import {HostContext} from "../../../managers/host";
import styles from "./SelectedServer.module.styl";

export type SelectedServerProps = {
    size: number | string;
}

export const SelectedServer = ({ size }: SelectedServerProps) => {
    const host = useContext(HostContext);

    return (
        <h1
            style={{ fontSize: size }}
            className={styles.selected_server}
        >
            {host.selected.value
                ? host.selected
                : 'Игровой сервер не выбран'
            }
        </h1>
    );
}