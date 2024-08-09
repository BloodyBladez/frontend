import { eds, runtimeStorage } from "@eds-fw/framework";

/** @type {import("./resolvePinAuthors").resolveAuthors} */
export async function resolveAuthors(authors_list, redactors_list, designers_list)
{
    const client = runtimeStorage.client;
    const res_author = await Promise.all(authors_list.map(async author => await eds.sfUser(client.users, author)));
    const res_redactor = redactors_list ? await Promise.all(redactors_list?.map(async redactor => await eds.sfUser(client.users, redactor))) : undefined;
    const res_designer = designers_list ? await Promise.all(designers_list?.map(async designer => await eds.sfUser(client.users, designer))) : undefined;
    return (res_author.map(author => `\nАвтор: ${author?.username}`).join('') || '') +
        (res_redactor?.map(redactor => `\nРедактор: ${redactor?.username}`).join('') || '') +
        (res_designer?.map(designer => `\nДизайнер: ${designer?.username}`).join('') || '');
}
