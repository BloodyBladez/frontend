import { useContext } from "preact/hooks";
import { HostContext } from "../../../managers/host";
import { ServerRecord } from "@";
import styles from "./ServerMap.module.styl";

export const ServerMap = () => {
    const host = useContext(HostContext);

    return (
        <div className={styles.server_list}>
            {Object.keys(host.list.value).map((hostname) => (
                <ServerRecord>{hostname}</ServerRecord>
            ))}
        </div>
    );
};
