'use strict';

function render(data) {
  const schemeContainer = document.getElementById('scheme-container');

  schemeContainer.innerHTML = getColorHtml(data);
}

function getColorHtml(data) {
  let id = 0;
  return data.colors
    .map(colors => {
      return `
              <div class="color-output" style="background:${
                colors.hex.value
              }" data-id="${id}"></div>
              <p class="color-text" id="color-text data-id="${id++}"">${
        colors.hex.value
      }</p>
              `;
    })
    .join('');
}

export { render, getColorHtml };
