import { Component } from "preact";
import { HostContext, type HostManager, ServerData } from "@managers";
import type { ApiTypes } from "@api-types";
import styles from "./ServerRecord.module.styl";

export type ServerRecordProps = {
    children: string;
};

export type SererRecordState = {
    data: ApiTypes["/server-info"]["Reply"];
};

export class ServerRecord extends Component<
    ServerRecordProps,
    SererRecordState
> {
    static contextType = HostContext;
    declare context: typeof HostManager;
    state = {
        data: {} as ApiTypes["/server-info"]["Reply"]
    };

    pingServer = async () => {
        const hostname = this.props.children;
        try {
            const response = await fetch(
                `http${this.context.list.value[this.props.children]!.isSecure ? "s" : ""}://${hostname}/server-info`
            );
            const result = await response.json();

            this.setState({ data: result });
            this.context.list.value[hostname] = {
                ...result,
                timestamp: Date.now()
            };
        } catch (error) {
            this.context.list.value[hostname]!.timestamp = Date.now();
            throw error;
        }
    };

    pleaseDelete = () => {
        const keys = Object.keys(this.context.list.value).filter(
            (hostname) => hostname !== this.props.children
        );

        this.context.list.value = keys.reduce(
            (acc, k) => {
                acc[k] = this.context.list.value[k];
                return acc;
            },
            {} as Record<string, ServerData>
        );
    };

    componentDidMount() {
        this.context.list.value[this.props.children]!.isSecure = true;
        this.pingServer().catch(() => {
            this.context.list.value[this.props.children]!.isSecure = false;
            this.pingServer();
        });
    }

    render({ children: hostname }: ServerRecordProps) {
        return (
            <div
                className={
                    this.context.selected.value === hostname
                        ? `${styles.record} ${styles.selected}`
                        : styles.record
                }
                onClick={() => {
                    this.context.selected.value = hostname;
                    this.context.save();
                }}
            >
                <div className={styles.main_inf}>
                    <div className={styles.server_name}>
                        {this.state.data.serverName ?? "Сервер недоступен"}
                    </div>
                    <div className={styles.server_desc}>
                        {this.state.data.serverDescription && ""}
                    </div>
                </div>

                <div className={styles.counters}>
                    <button onClick={this.pleaseDelete}>x</button>
                    <div>Лобби: {this.state.data.currentLobbiesCount ?? 0}</div>
                    <div>Игроков: {this.state.data.totalPlayersCount ?? 0}</div>
                </div>
            </div>
        );
    }
}
