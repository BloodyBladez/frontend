import {Link} from "wouter-preact";
import styles from "./Header.module.styl";

export const Header = () => {
    const buttons = ['profile', 'settings'];
    const iconsMap: Record<string, string> = {
        profile: "/extra/user.svg",
        settings: "/extra/settings.svg",
    }

    return (
        <header className={styles.header}>
            <Link
                to="/"
                className={styles.left}
            >
                <img
                    src="/logo.webp"
                    alt="Logotype"
                    height={40}
                    className={styles.logo}
                />
            </Link>

            <div className={styles.right}>
                {buttons.map((value) =>
                    <Link
                        key={value}
                        to={'/' + value}
                        style={{
                            '--image': `url("${iconsMap[value]}")`
                        }}
                    />
                )}
            </div>
        </header>
    );
}