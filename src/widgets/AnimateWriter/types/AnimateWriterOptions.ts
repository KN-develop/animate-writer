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