export class Image {
    constructor(
        private readonly _type: string,
        private readonly _raw: ArrayBuffer
    ) {}

    async process(width: number, height: number) {
        const bitmap = await createImageBitmap(new Blob([this._raw]));
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(bitmap, 0, 0, width, height);

        return canvas.toDataURL(this._type);
    }
}
