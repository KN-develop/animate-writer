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
    <p class="read-the-docs js-animate-write" style="--aw-cursor-color: green">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

initAnimateWriter('.js-animate-write', {input: 'Вот этот текст тут должен быть введен'});