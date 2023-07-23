export interface AnimateWriterOptions {
    speed?: number;
    input?: string;
    isAutoSpeedChange?: boolean;
    isCursorShow?: boolean;
}
export interface Options extends AnimateWriterOptions {
    speed: number;
    input: string;
    isAutoSpeedChange: boolean;
    isCursorShow: boolean;
}

export interface DatasetOptionsInterface {
    awSpeed?: string;
    awInput?: string;
    awIsAutoSpeedChange?: string;
    awIsCursorShow?: string;
}