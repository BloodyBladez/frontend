import { Component } from "preact";
import { HostContext, type HostManager, type ServerData } from "@managers";
import { TextField, ServerMap } from "@components";
import styles from "./MutableServerList.module.styl";
import config from "@config";

export class MutableServerList extends Component {
    static contextType = HostContext;
    declare context: typeof HostManager;

    render() {
        return (
            <div className={styles.mtb_list}>
                <ServerMap />
                <TextField
                    onInput={(value) => (this.context.selected.value = value)}
                    onUnFocus={(target) => {
                        const { value } = target;
                        if (value !== "") {
                            if (config.validation.host.test(value)) {
                                const hostname = value.includes("//")
                                    ? value.split("//")[1]
                                    : value;

                                if (
                                    this.context.list.value[hostname] ===
                                    undefined
                                ) {
                                    this.context.list.value = {
                                        ...this.context.list.value,
                                        [hostname]: {} as ServerData
                                    };

                                    this.context.save();
                                    target.value = "";
                                }
                            }
                        }
                    }}
                />
            </div>
        );
    }
}
