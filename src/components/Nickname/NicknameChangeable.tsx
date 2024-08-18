import type {RefObject} from "preact";
import {type Signal} from "@preact/signals";
import {useEffect, useRef, useState} from "preact/hooks";
import {TextField} from "@";

export type NicknameProps = {
    value: Signal<string>;
    onSave: (nickname: string) => any;
    className?: string;
}

export const NicknameChangeable = ({ value, onSave, className }: NicknameProps) => {
    const inputRef = useRef<HTMLInputElement | HTMLDivElement>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if(isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className={className}>
            {isEditing ? (
                <TextField
                    type="text"
                    ref={inputRef as RefObject<HTMLInputElement>}
                    value={value}
                    onSave={(str) => onSave(str)}
                    onUnFocus={() => setIsEditing(false)}
                    minLength={2}
                    maxLength={20}
                />
            ) : (
                <>
                    <div ref={inputRef as RefObject<HTMLDivElement>}>
                        {value}
                    </div>

                    <img
                        src="/extra/pencil.svg"
                        alt="Редактировать никнейм"
                        width={32}
                        height={32}
                        onClick={() => setIsEditing(true)}
                    />
                </>
            )}
        </div>
    );
}

export default NicknameChangeable;