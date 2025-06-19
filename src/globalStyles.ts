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

    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #444;
      border-radius: 8px;
      border: 2px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #666;
    }
  `;
  document.head.appendChild(globalStyle);
}
