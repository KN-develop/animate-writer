import './style.scss'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'
import {initAnimateWriter} from "../widgets/AnimateWriter";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Animate writer</h1>
    
    <h2 style="max-width: 100%; overflow: hidden;white-space: nowrap;text-overflow: ellipsis">
    <span style="text-decoration: underline; font-weight: 300">With white-space nowrap</span><br>
        &#8203;<span class="js-animate-write-1" data-aw-speed="150"></span>
    </h2>
    
    <h2>
    <span style="text-decoration: underline; font-weight: 300">With white-space normal</span><br>
        &#8203;<span class="js-animate-write-2" data-aw-speed="150"></span>
    </h2>
  </div>
`

initAnimateWriter('.js-animate-write-1', {
    input: [
        'Lorem Ipsum is simply dummy text. It has survived not only five centuries. It was popularised in the 1960s',
        'It has survived not only five centuries',
        'It was popularised in the 1960s'
    ],
});

initAnimateWriter('.js-animate-write-2', {
    input: [
        'Lorem Ipsum is simply dummy text. It has survived not only five centuries. It was popularised in the 1960s',
        'It has survived not only five centuries',
        'It was popularised in the 1960s'
    ],
});