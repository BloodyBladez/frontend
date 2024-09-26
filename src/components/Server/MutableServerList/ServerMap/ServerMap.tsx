import { Component } from "preact";
import { HostContext, type HostManager } from "@managers";
import { ServerRecord } from "@components";
import styles from "./ServerMap.module.styl";

export class ServerMap extends Component {
    static contextType = HostContext;
    declare context: typeof HostManager;

    render() {
        return (
            <div className={styles.server_map}>
                {Object.keys(this.context.list.value).map((hostname) => (
                    <ServerRecord key={hostname}>{hostname}</ServerRecord>
                ))}
            </div>
        );
    }
}
