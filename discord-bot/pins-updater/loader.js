import { sep } from "path";
import { expandDirs } from "@eds-fw/framework";
import { check } from "./assertions.js";
import { resolve } from "./resolver.js";

export class PinsUpdaterLoader
{
    files = [];
    failed = false;

    countUpdated = 0;
    countIgnored = 0;

    async load()
    {
        const path = `${sep}pins`;
        for (const filepath of (await expandDirs('.' + path)).filter($ => $.endsWith('.js') && !$.startsWith('#')))
        {
            const filename = filepath.split(path)[1];
            const bakedPath = `../` + filepath.replaceAll(`.${sep}`, '').replaceAll(sep, '/');
            const req = (await import(bakedPath)).default;

            if (Array.isArray(req))
            {
                let result = req.map(async $ => await check(filename, $));
                for (const file of result)
                {
                    file.then($ => {
                        if (!$) return;
                        this.files.push($)
                    });
                }
            }
            else {
                const result = await check(filename, req);
            
                if (result)
                    this.files.push(result);
                else
                    this.failed = true;
            }
        }
    }

    async update(req)
    {
        if (!req) return;
        if (req.ignore) return this.countIgnored++;
        let msg = await resolve(req);
            if (!msg) return;
            
            await msg.edit(req.message).catch(err => console.log(`Ошибка при обновлении закрепов\n\t${err}`));
            this.countUpdated += 1;
    }
}
