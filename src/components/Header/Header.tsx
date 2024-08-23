import { Component } from "preact";
import { Link } from "wouter-preact";
import styles from "./Header.module.styl";

export class Header extends Component {
    buttons = [
        ["profile", "/extra/user.svg"],
        ["settings", "/extra/settings.svg"]
    ];

    render() {
        return (
            <header className={styles.header}>
                <Link to="/" className={styles.left}>
                    <img
                        src="/banners-icons/BB-Banner.webp"
                        alt="Logotype"
                        height={40}
                        className={styles.logo}
                    />
                </Link>

                <div className={styles.right}>
                    {this.buttons.map(([name, source]) => (
                        <Link
                            key={name}
                            to={`/${name}`}
                            style={{
                                "--image": `url("${source}")`
                            }}
                        />
                    ))}
                </div>
            </header>
        );
    }
}
