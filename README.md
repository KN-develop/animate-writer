<h1 align="center">AnimateWriter</h1>

<p align="center">
  Animated typing plugin for website
</p>

## Install

```sh
npm i @kndev/animate-writer -D
```

## Usage

1. Create element to select.

```<p class="some-class"></span>```

2. Usage in your js file

  ```ts
    import { animateWriter } from '@kndev/animate-writer';
    import "@kndev/animate-writer/dist/style.css";
    
    animateWriter(document.querySelector('.some-class'));
    // or with options
    animateWriter(document.querySelector('.some-class'), { delay: 350 });
  ```

## Options

There are a number of options you may use to customize typeIt.
```ts
interface AnimateWriterOptions {
    /**
     * Write speed
     * @default 200
     */
    speed: number;
    /**
     * String to be write
     * @default HTMLElement.textContent | 'Default string'
     */
    input: string;
    /**
     * Simulation of human input
     * @default true
     */
    isAutoSpeedChange: boolean;
    /**
     * Blinking cursor at the end of a line
     * @default true
     */
    isCursorShow?: boolean;
}
```