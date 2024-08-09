export default {
    colors: {
        default: cl("#0D3E9E"),
        error: cl("#881313"),
        ds_gray: cl("#4e5058"),
    },
    icons: {
        text_fighting: "https://cdn.discordapp.com/attachments/1247877398880325682/1271540606241345567/Muni-Beta.jpg?ex=66b7b5f8&is=66b66478&hm=48dfc89d40a56334d8fb91a91dcdc2d7d43a2ffc91e3f79de385de4e1be06202&",
        no: "https://cdn.discordapp.com/attachments/1235673660606386206/1235680188612739112/No.png?ex=66b71c1a&is=66b5ca9a&hm=31150c72560211d5b739957b0094166f4845d8faa9a9cb00901d9ae657728b37&",
    }
}

function cl(color)
    { return parseInt(color.slice(1), 16); }
