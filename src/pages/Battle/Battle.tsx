import { Component } from "preact";
import { MutableServerList, SelectedServer } from "@components";
import styles from "./Battle.module.styl";

export class Battle extends Component {
    render() {
        return (
            <div className={styles.selector}>
                <SelectedServer />
                <MutableServerList />
            </div>
        );
    }
}
