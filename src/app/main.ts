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
    <h2>
        &#8203;<span class="js-animate-write" data-aw-speed="150"></span>
    </h2>
  </div>
`

initAnimateWriter('.js-animate-write', {
    input: [
        'Lorem Ipsum is simply dummy text',
        'It has survived not only five centuries',
        'It was popularised in the 1960s'
    ],
});