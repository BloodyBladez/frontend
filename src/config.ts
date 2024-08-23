const config = {
    validation: {
        host: new RegExp(
            /^(https?:\/\/)?((localhost|([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,})|((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)|\[((([0-9a-fA-F]{1,4}:){1,7}[0-9a-fA-F]{1,4})|(::([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,7}:))\])(:\d{1,5})?$/
        )
    },
    default: {
        avatar: "/default-avatar.webp",
        nickname: "Нет никнейма"
    }
};

export default config;
