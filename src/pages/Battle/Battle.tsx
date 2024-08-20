import { MutableServerList, SelectedServer } from "@";
import styles from "./Battle.module.styl";

const Battle = () => (
    <div className={styles.selector}>
        <SelectedServer size={40} />
        <MutableServerList />
    </div>
);

export default Battle;
