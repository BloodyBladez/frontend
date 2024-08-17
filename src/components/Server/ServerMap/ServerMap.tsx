import {useContext} from "preact/hooks";
import {HostContext} from "../../../managers/host";
import styles from "./ServerMap.module.styl";

export const ServerMap = () => {
    const host = useContext(HostContext);

    return (
        <div className={styles.server_list}>
            {host.list.value.map((hostname) =>
                <div
                    className={
                        host.selected.value === hostname
                            ? styles.selected
                            : undefined
                    }
                    onClick={() => host.selected.value = hostname}
                >
                    {hostname}
                </div>
            )}
        </div>
    );
}