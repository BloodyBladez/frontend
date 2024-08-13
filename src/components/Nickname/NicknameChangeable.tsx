import type {RefObject} from "preact";
import {type Signal} from "@preact/signals";
import {useEffect, useRef, useState} from "preact/hooks";

export type NicknameProps = {
    value: Signal<string> | string;
    onSave: (nickname: string) => any;
    className?: string;
}

const NicknameChangeable = ({ value, onSave, className }: NicknameProps) => {
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
                <input
                    type="text"
                    ref={inputRef as RefObject<HTMLInputElement>}
                    value={value}
                    onInput={(event) => onSave(
                        (event.target as HTMLInputElement)
                            .value
                    )}
                    onBlur={() => setIsEditing(false)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setIsEditing(false);
                        }
                    }}
                    minLength={2}
                    maxLength={20}
                />
            ) : (
                <>
                    <div ref={inputRef as RefObject<HTMLDivElement>}>
                        {typeof value === 'object'
                            ? value.value || 'Нет никнейма'
                            : value
                        }
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