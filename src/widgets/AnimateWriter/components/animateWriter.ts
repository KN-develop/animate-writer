import {AnimateWriterOptions} from "../types/AnimateWriterOptions";
import {generateOptions} from "../lib/generateOptions.ts";
import {CURSOR_CLASSNAME} from "../consts";

type AnimateWriter = (root: HTMLElement, opts?: AnimateWriterOptions) => void;

/**
 * AnimateWriter
 * @author Nikolay Ivanov (n_13@bk.ru)
 * @description Shows text input animation
 */
export const animateWriter: AnimateWriter = (root, opts?) => {
    const options = generateOptions(root, opts);

    if (root.textContent) {
        root.textContent = '';
    }

    const speed = options.speed;

    root.style.position = 'relative';
    if (options.isCursorShow) {
        root.classList.add(CURSOR_CLASSNAME);
    }

    function writeProcess(){
        // Указатель на элемент массива вводимых строк
        let stringPointer = 0;

        function print (point: number) {
            const inputString = options.input[stringPointer];
            const delay = options.isAutoSpeedChange ? speed*Math.random() : speed;

            setTimeout(()  => {
                const char = inputString[point];
                root.textContent = root.textContent + char;
                if (point < inputString.length - 1) {
                    print(point + 1);
                } else if (stringPointer < options.input.length - 1 || options.loop) {
                    backspace();
                }
            }, delay);
        }

        function backspace () {
            const delay = speed / 10;
            setTimeout(function () {
                const newString = root.textContent?.substring(0, root.textContent.length - 1) || '';
                root.textContent = newString;
                if (newString.length) {
                    backspace();
                } else if (stringPointer < options.input.length - 1) {
                    stringPointer++;
                    print(0);
                } else if (options.loop) {
                    stringPointer = 0;
                    print(0);
                }
            }, delay);
        }

        print(0);
    }

    writeProcess();
}