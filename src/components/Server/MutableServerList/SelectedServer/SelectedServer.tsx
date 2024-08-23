import { Component } from "preact";
import { HostContext, type HostManager } from "@managers";
import styles from "./SelectedServer.module.styl";

export class SelectedServer extends Component {
    static contextType = HostContext;
    declare context: typeof HostManager;

    render() {
        return (
            <h1 className={styles.selected}>{this.context.fixedSelected}</h1>
        );
    }
}
