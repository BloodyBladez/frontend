import {eds} from "@eds-fw/framework";
import {Options} from "discord.js";
import assets from "./assets.js";
import secret from "./secret.json" assert {type: "json"};
import("./runtime.js");

const {client} = eds.createBot({ 
    token: secret.token,
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent",
        "GuildScheduledEvents",
        "AutoModerationConfiguration",
        "AutoModerationExecution"
    ],
    clientOptions: {
        makeCache: Options.cacheWithLimits({
            ...Options.DefaultMakeCacheSettings,
            ReactionManager: 0,
            GuildMemberManager: 500,
            UserManager: 500,
            GuildEmojiManager: 0,
            GuildStickerManager: 0,
            PresenceManager: 0,
            DMMessageManager: 0,
        }),
    },
    commandsPath: "./cmds/",
    footerText: [
        "Text-Fighting"
    ],
    footerIcon: [
        assets.icons.text_fighting
    ],
    slashOnly: false,
    guildOnly: true,
    prefix: "!",
    doNotLoadFilesStartsWith: ["#"],
    builtinCommandsSettings: {
        helpCommandCategory: "Основные",
        helpListTitleText: "Список команд:",
        helpPageTitleText: "Помощь по команде:",
        helpCommandDescription: "Список всех команд бота",
        helpCommandName: "хелп",
        helpCommandArgumentDescription: "Название команды",
        helpEphemeral: true,
        helpListAdditionalText: `Я - бот для **Text Fighting**'а. Собрал в себе некоторые утилиты и уникальные фишки. Ничего особенного 🤠`
    },
    noAccess: function noAccess(ctx)
    {
        ctx.quickReply(true, "Ошибка", `\`\`\`d\nОтказано в доступе\`\`\``, undefined, undefined, { thumbnail: { url: assets.icons.no } });
    }
});

client.init();
client.once("ready", async () => {
    console.log("БОТ ОНЛАЙН!!!");
    (await import("./pins-updater/UpdatePins.js")).default();
});
