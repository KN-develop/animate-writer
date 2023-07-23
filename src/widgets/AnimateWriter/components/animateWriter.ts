import {AnimateWriterOptions} from "../types/AnimateWriterOptions";
import {generateOptions} from "../lib/generateOptions.ts";
import {CURSOR_CLASSNAME} from "../consts";

type AnimateWriter = (root: HTMLElement, opts?: AnimateWriterOptions) => void;

export const animateWriter: AnimateWriter = (root, opts?) => {
    const options = generateOptions(root, opts);

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