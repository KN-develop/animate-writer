export interface AnimateWriterOptions {
    speed?: number;
    input?: string[] | string;
    isAutoSpeedChange?: boolean;
    isCursorShow?: boolean;
    loop?: boolean;
}
export interface Options {
    speed: number;
    input: string[];
    isAutoSpeedChange: boolean;
    isCursorShow: boolean;
    loop: boolean;
}

export interface DatasetOptionsInterface {
    awSpeed?: string;
    awInput?: string;
    awIsAutoSpeedChange?: string;
    awIsCursorShow?: string;
    awLoop?: string;
}