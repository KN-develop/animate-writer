# AnimateWriter

Animated typing plugin for website

## Install

```sh
npm i @kndev/animate-writer -D
```

## Usage

1. Create element to select.

```<p class="some-class"></p>```

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
     * String or array of string to be write
     * @default HTMLElement.textContent | 'Default string'
     */
    input: string | string[];
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
    /**
     * Loop animation
     * @default true
     */
    loop?: boolean;
}
```

## Options from data attributes
```html
<p
    class="some-class"
    data-aw-speed="200"
    data-aw-input="Some text"
    data-aw-is-auto-speed-change="true"
    data-aw-is-cursor-show="true"
    data-aw-loop="true"
></p>
 ```