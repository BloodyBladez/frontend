import {type HTMLAttributes} from "react";
import {useRef} from "preact/hooks";
import {Image} from "../../classes/Image";

export type AvatarProps = HTMLAttributes<HTMLImageElement> & {
    onSave: (url: string) => any;
}

const AvatarChangeable = ({ src, width = 200, height = 200, onSave }: AvatarProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <img
                src={src}
                alt="Аватарка игрока"
                width={width}
                height={height}
                onClick={() => {
                    if(fileInputRef.current) {
                        fileInputRef.current.click();
                    }
                }}
            />
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={async(event) => {
                    const target = event.target as HTMLInputElement;
                    if(target.files && target.files[0]) {
                        const file = target.files[0];
                        if(file.size > 1048576) return alert("Файл слишком большой");
                        const url = await new Image(
                            file.type,
                            await file.arrayBuffer()
                        ).process(200, 200);

                        onSave(url);
                    }
                }}
            />
        </>
    );
}

export default AvatarChangeable