import { Component, type RefObject } from "preact";
import type { Signal } from "@preact/signals";

export type TextFieldProps = {
    min?: number;
    max?: number;
    className?: string;
    type?: "text" | "number";
    value?: Signal<string> | string;
    inputRef?: RefObject<HTMLInputElement>;
    onInput: (value: string) => void;
    onUnFocus?: (element: HTMLInputElement) => void;
};

export class TextField extends Component<TextFieldProps> {
    render({
        min,
        max,
        value,
        type = "text",
        inputRef,
        onInput,
        onUnFocus,
        className
    }: TextFieldProps) {
        return (
            <input
                className={className}
                ref={inputRef}
                minLength={min}
                maxLength={max}
                value={value}
                type={type}
                onInput={
                    onInput &&
                    function (e) {
                        onInput(e.currentTarget.value);
                    }
                }
                onBlur={
                    onUnFocus &&
                    function (e) {
                        onUnFocus(e.currentTarget);
                    }
                }
                onKeyDown={
                    onUnFocus &&
                    function (e) {
                        if (e.key === "Enter") {
                            e.currentTarget.blur();
                        }
                    }
                }
            />
        );
    }
}
