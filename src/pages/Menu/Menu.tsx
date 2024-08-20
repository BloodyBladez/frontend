import { Link } from "wouter-preact";
import styles from "./Menu.module.styl";

const Menu = () => {
    const elements = [
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

    return (
        <div className={styles.buttons}>
            {elements.map(({ id, name, position }) => (
                <Link
                    key={id}
                    to={"/" + id}
                    style={{
                        "--image": `url("/menu/${id}.jpg")`,
                        "--position": position
                    }}
                >
                    <div className={styles.text}>{name}</div>
                </Link>
            ))}
        </div>
    );
};

export default Menu;
