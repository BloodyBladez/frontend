import type {HTMLAttributes} from "react";
import {Signal} from "@preact/signals";

export type TextFieldProps = HTMLAttributes<HTMLInputElement> & {
    placeholder?: string;
    value?: Signal<string> | string;
    type?: "text" | "number";
    min?: number;
    max?: number;
    onSave: (value: string) => void;
    onUnFocus?: (element: HTMLInputElement) => void;
}

export const TextField = ({ type, min, max, onSave, onUnFocus, ...other }: TextFieldProps) => {
    return (
        <input
            {...other}
            type={type}
            minLength={min}
            maxLength={max}
            onInput={(event) => onSave(event.currentTarget.value)}
            onBlur={onUnFocus && function(e) {
                onUnFocus(e.currentTarget);
            }}
            onKeyDown={onUnFocus && function(e) {
                if(e.key === 'Enter') {
                    e.currentTarget.blur();
                }
            }}
        />
    );
}