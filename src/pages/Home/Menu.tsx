import {Component} from "preact";
import {Link} from "wouter-preact";
import styles from "./Home.module.styl";

class Menu extends Component {
    elements = [
        ['court', 'Обучение'],
        ['castle', 'Кампания'],
        ['battle', 'Сражения'],
        ['character', 'Персонажи'],
        ['store', 'Магазин']
    ];

    render() {
        return (
            <div className={styles.buttons}>
                {this.elements.map(([id, name]) =>
                    <Link
                        to=""
                        className={styles[id]}
                    >
                        {name}
                    </Link>
                )}
            </div>
        );
    }
}

export default Menu;