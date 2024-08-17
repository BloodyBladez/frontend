import {useContext} from "preact/hooks";
import {HostContext} from "../../managers/host";
import {MutableServerList, SelectedServer} from "@";
import styles from './Battle.module.styl';

const Battle = () => {
    const host = useContext(HostContext);

    return (
        <div className={styles.selector}>
            <SelectedServer size={40} />

            <MutableServerList />
        </div>
    );
}

export default Battle;