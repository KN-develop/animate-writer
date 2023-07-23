import {AnimateWriterOptions, Options} from "../types/AnimateWriterOptions.ts";

const DEFAULT_SPEED = 200;
const CURSOR_CLASSNAME = 'aw-cursor';

type AnimateWriter = (root: HTMLElement, opts?: AnimateWriterOptions) => void;

export const animateWriter: AnimateWriter = (root, opts?) => {
    const options: Options = {
        speed: opts && typeof opts.speed === "number" && opts.speed > 0 ? opts.speed : DEFAULT_SPEED,
        input: opts && typeof opts.input === "string" && !!opts.input ? opts.input : root.textContent || 'Default string',
        isAutoSpeedChange: true,
        isCursorShow: opts && typeof opts.isCursorShow === "boolean" ? opts.isCursorShow : true,
    };

    if (root.textContent) {
        root.textContent = '';
    }

    const speed = options.speed;
    const splitInput = options.input.split('');

    root.style.position = 'relative';
    if (options.isCursorShow) {
        root.classList.add(CURSOR_CLASSNAME);
    }

    const loop = (point: number) => {
        const delay = options.isAutoSpeedChange ? speed*Math.random() : speed;

        setTimeout(()  => {
            const char = splitInput[point];
            root.textContent = root.textContent + char;
            if (point < splitInput.length - 1) {
                loop(point + 1);
            }
        }, delay);
    }

    loop(0);
}