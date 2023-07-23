import {AnimateWriterOptions, DatasetOptionsInterface} from "../types/AnimateWriterOptions";
import {Options} from "../types/AnimateWriterOptions";
import {DEFAULT_SPEED} from "../consts";

export function generateOptions(root: HTMLElement, opts?: AnimateWriterOptions): Options {
    // init dataset options from element
    const dataset: DatasetOptionsInterface = root.dataset;
    const dataOptions: AnimateWriterOptions = {};
    dataset.awSpeed && (dataOptions.speed = Number(dataset.awSpeed));
    dataset.awInput && (dataOptions.input = dataset.awInput);
    dataset.awIsAutoSpeedChange && (dataOptions.isAutoSpeedChange = dataset.awIsAutoSpeedChange !== 'false');
    dataset.awIsCursorShow && (dataOptions.isCursorShow = dataset.awIsCursorShow !== 'false');

    const options: Options = {
        speed: opts && typeof opts.speed === "number" && opts.speed > 0 ? opts.speed : DEFAULT_SPEED,
        input: opts && typeof opts.input === "string" && !!opts.input ? opts.input : root.textContent || 'Default string',
        isAutoSpeedChange: true,
        isCursorShow: opts && typeof opts.isCursorShow === "boolean" ? opts.isCursorShow : true,
    };

    Object.assign(options, dataOptions);

    return options;
}