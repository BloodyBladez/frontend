import { Component } from "preact";
import { Link } from "wouter-preact";
import styles from "./Menu.module.styl";

export class Menu extends Component {
    items = [
        {
            id: "court",
            name: "Обучение",
            position: "left"
        },
        {
            id: "castle",
            name: "Кампания",
            position: "bottom"
        },
        {
            id: "battle",
            name: "Сражения",
            position: "center"
        },
        {
            id: "character",
            name: "Персонажи",
            position: "center"
        }
    ];

    render() {
        return (
            <div className={styles.buttons}>
                {this.items.map(({ id, name, position }) => (
                    <Link
                        key={id}
                        to={"/" + id}
                        style={{
                            "--image": `url("/menu/${id}.jpg")`,
                            "--position": position
                        }}
                    >
                        <div>{name}</div>
                    </Link>
                ))}
            </div>
        );
    }
}
