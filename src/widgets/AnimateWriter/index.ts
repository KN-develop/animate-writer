import {animateWriter as anim} from "./components/animateWriter.ts";
import './style.scss';

export const animateWriter = anim;

export const initAnimateWriter = (selector: string, options?: Record<string, any> | Record<string, any>[]) => {
    const roots = document.querySelectorAll(selector);

    roots.forEach((root, index) => {
        let opts: Record<string, any>;
        if (Array.isArray(options)) {
            opts = options[index] || options[0];
        } else {
            opts = options || {};
        }

        animateWriter(root as HTMLElement, opts);
    });
}