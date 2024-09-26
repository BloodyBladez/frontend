import type { ApiTypes } from "@api-types";

export class AppFetch {
    constructor(
        public readonly host: string,
        private readonly isSecure: boolean
    ) {}

    private fetch<T extends {}>(options: { path: string; method: "GET" }) {
        return fetch(`http${this.isSecure ? "s" : ""}://${this.host}`, {
            method: options.method
        }).then((res) => res.json() as Promise<T>);
    }

    private get<T extends {}>(path: string) {
        return this.fetch<T>({ path, method: "GET" });
    }

    async info() {
        return this.get<ApiTypes["/server-info"]["Reply"]>("/server-info");
    }
}
