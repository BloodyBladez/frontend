import { wait } from "@eds-fw/framework";
import { pinsUpdaterLoader } from "../runtime.js";

export default async function UpdatePins()
{
    console.log("=== === === ОБНОВЛЯЕМ ЗАКРЕПЫ... === === === === === === === === === === === === === === === === === ===");
    for await (const file of pinsUpdaterLoader.files)
    {
        await wait(100);
        await pinsUpdaterLoader.update(file);
    }
    console.log("=== === === ЗАКРЕПЫ ОБНОВЛЕНЫ ! === === === === === === === === === === === === === === === === === ===");
    return pinsUpdaterLoader;
}