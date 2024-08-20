import { useContext } from "preact/hooks";
import { HostContext } from "../../../managers/host";
import { ServerMap, TextField } from "@";
import styles from "./MutableServerList.module.styl";
import config from "../../../config";

export const MutableServerList = () => {
    const host = useContext(HostContext);

    return (
        <div className={styles.slist}>
            <ServerMap />

            <TextField
                className={styles.typer}
                onSave={(value) => (host.selected.value = value)}
                onUnFocus={(target) => {
                    const { value } = target;
                    if (value !== "") {
                        if (config.validation.host.test(value)) {
                            const hostname = value.includes("//")
                                ? value.split("//")[1]
                                : value;

                            if (host.list.value[hostname] === undefined) {
                                host.list.value = {
                                    ...host.list.peek(),
                                    [hostname]: null
                                };

                                host.save();
                                target.value = "";
                            }
                        }
                    }
                }}
            />
        </div>
    );
};
