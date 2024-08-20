import { useContext, useEffect, useState } from "preact/hooks";
import type { ApiTypes } from "bloodybladez-api-types";
import { HostContext } from "../../../../managers/host";
import styles from "./ServerRecord.module.styl";

type ServerRecord = {
    children: string;
};

export const ServerRecord = ({ children: hostname }: ServerRecord) => {
    const host = useContext(HostContext);
    const [data, setData] = useState<ApiTypes["/server-info"]["Reply"]>();

    function pingServer(secure?: boolean) {
        return fetch(`http${secure ? "s" : ""}://${hostname}/server-info`)
            .then((res) => res.json())
            .then((res) => {
                host.list.value[hostname] = res ?? null;
                host.timestamp.value[hostname] = Date.now();
                setData(res);
            })
            .catch(() => {
                host.timestamp.value[hostname] = Date.now();
            });
    }

    useEffect(() => {
        if (host.timestamp.value[hostname] + 30000 > Date.now())
            return setData(
                host.list.value[hostname] as ApiTypes["/server-info"]["Reply"]
            );

        pingServer();

        const id = setTimeout(() => pingServer());
        return () => clearTimeout(id);
    });

    return (
        <div
            className={
                host.selected.value === hostname
                    ? `${styles.record} ${styles.selected}`
                    : styles.record
            }
            onClick={() => {
                host.selected.value = hostname;
                host.save();
            }}
        >
            <div className={styles.main_inf}>
                <div className={styles.server_name}>
                    {data?.serverName ?? "Сервер недоступен"}
                </div>
                <div className={styles.server_desc}>
                    {data?.serverDescription ?? ""}
                </div>
            </div>

            <div className={styles.counters}>
                {/*<button className={styles.remove_please}>x</button>*/}
                <div>Лобби: {data?.currentLobbiesCount ?? 0}</div>
                <div>Игроков: {data?.totalPlayersCount ?? 0}</div>
            </div>
        </div>
    );
};
