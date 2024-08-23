import { Component } from "preact";
import styles from "./NotFound.module.styl";

export class NotFound extends Component {
    render() {
        return (
            <div
                className={styles.cat_box}
                title={
                    "Нажмите логотип BloodyBladez слева сверху чтобы перейти в меню"
                }
            >
                <img src={"/404.jpg"} alt={"Мем: не найдено"} />
            </div>
        );
    }
}
