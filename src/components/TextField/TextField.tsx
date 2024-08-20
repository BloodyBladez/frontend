import { type ForwardedRef, forwardRef, type HTMLAttributes } from "react";

export type TextFieldProps = HTMLAttributes<HTMLInputElement> & {
    min?: number;
    max?: number;
    type?: "text" | "number";
    onSave: (value: string) => void;
    onUnFocus?: (element: HTMLInputElement) => void;
};

export const TextField = forwardRef(
    (
        { type, min, max, onSave, onUnFocus, ...other }: TextFieldProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => (
        <input
            {...other}
            ref={ref}
            type={type}
            minLength={min}
            maxLength={max}
            onInput={(event) => onSave(event.currentTarget.value)}
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
    )
);
