// Este arquivo injeta estilos globais no documento
export function injectGlobalStyles() {
  const globalStyle = document.createElement('style');
  globalStyle.innerHTML = `
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      background-color: #121214;
      overflow-x: hidden;
    }
  `;
  document.head.appendChild(globalStyle);
}
