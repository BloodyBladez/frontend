import {Component} from "preact";
import {Link} from "wouter-preact";
import styles from "./Menu.module.styl";

class Menu extends Component {
    elements = [
        ['court', 'Обучение'],
        ['castle', 'Кампания'],
        ['battle', 'Сражения'],
        ['character', 'Персонажи']
    ];

    render() {
        return (
            <div className={styles.buttons}>
                {this.elements.map(([id, name]) =>
                    <Link
                        to=""
                        className={styles[id]}
                    >
                        <div className={styles.text}>{name}</div>
                    </Link>
                )}
            </div>
        );
    }
}

export default Menu;