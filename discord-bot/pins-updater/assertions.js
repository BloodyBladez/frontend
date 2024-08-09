function $ex(val)
{
    return val !== undefined && val !== null;
}

function $len(str, limit)
{
    return str !== undefined ? str.length > 0 && str.length < limit : true;
}

export async function check(filename, file)
{
    let results = [];
    let tr;

    tr = file?.message;

    if (!tr)
    {
        console.log(`Ошибка в файле '${filename}', которую я предвидел\nНет свойства 'message' в файле`);
        results.push(false);
    }
    if (tr.embeds)
    {
        if (tr.embeds?.length > 5)
        {
            console.log(`Ошибка в файле '${filename}', которую я предвидел\nМаксимальное количество эмбедов - 5. Больше отправить невозможно.`);
            results.push(false);
        }
    
    let n = 0;
    for (tr of tr.embeds)
    /* Э М Б Е Д Ы */
    {
        if (
            !$ex(tr.title)
            && !$ex(tr.author?.name)
            && !$ex(tr.footer?.text)
            && !$ex(tr.fields)
            && !$ex(tr.description)
            && !$ex(tr.image)
            && !$ex(tr.thumbnail)
        ) {
            console.log(`Ошибка в файле '${filename}', которую я предвидел\nЭмбед #${n} должен содержать хоть какой-то текст или картинку, а ты отправляшь пустой.`);
            results.push(false);
        }

        if ($ex(tr.url) && !$ex(tr.title))
        {
            console.log(`Ошибка в файле '${filename}', которую я предвидел\nУ тебя нет заголовка (title) в эмбеде #${n}, и ты пытаешься сделать его кликабельным (url).`);
            results.push(false);
        }

        let lenErr = (field, limit) =>
            console.log(`Ошибка в файле '${filename}', которую я предвидел\nПоле 'embeds.${n}.${field}' не должно быть пустым и содержать меньше ${limit} символов.`);

        if (!$len(tr.title, 256))
        return void lenErr("title", 256);

        if (!$len(tr.description, 4096))
        return void lenErr("description", 4096);

        if (!$len(tr.author?.name, 256))
        return void lenErr("author.name", 256);
        
        if (!$len(tr.footer?.text, 2048))
        return void lenErr("footer.text", 2048);

        let i = 0;
        if (tr.fields)
        for (const field of tr.fields)
        {
            if (!$len(field.name, 256))
            return void lenErr(`fields.${i}.name`, 256);

            if (!$len(field.value, 1024))
            return void lenErr(`fields.${i}.value`, 1024);
            i++;
        }

        n++;
        }
    }

    if (!results.includes(false))
        return file;
    else return undefined;
}