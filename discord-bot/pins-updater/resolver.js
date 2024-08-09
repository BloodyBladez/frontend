import { runtimeStorage } from "@eds-fw/framework";
import { ChannelType } from "discord.js";

export async function send(channel)
{
    console.log(`Отправляю новое сообщение в канал '${channel.name}'`);
    
    let message = await channel.send({ embeds: [{ description: `\`\`\`\nЭто сообщение скоро будет обновлено.\nОставайтесь на линии, пожалуйста. Наш звонок очень важен для Вас.\`\`\`` }] })
        .catch(err => {
            throw new Error(`Ошибка при обновлении закрепа:\n\t${err}`)
        });

    return message;
}

export async function resolve(file)
{
    const client = runtimeStorage.get("client");
    let channel = await client.channels.fetch(file.channelID).catch(() => {});

    if (!channel)
        throw new Error(`Ошибка: канала с ID '${file.channelID}' не существует.`);
    
    if (channel.type !== ChannelType.GuildText || !channel.isTextBased())
        throw new Error(`Канал '${channel.id}' должен быть текстовым и находиться на сервере.`);

    if (!file.messageID)
    {
        return await send(channel);
    }
    else {
        return await channel.messages.fetch(file.messageID).catch(() => console.error(`Ошибка, которую я предвидел\nСообщения с ID '${file.messageID}' не существует.`));
    }
}