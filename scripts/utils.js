'use strict';

function render(data) {
  const schemeContainer = document.getElementById('scheme-container');

  schemeContainer.innerHTML = getColorHtml(data);
}

function getColorHtml(data) {
  return data.colors
    .map(colors => {
      return `
              <div class="color-output" style="background:${colors.hex.value}"></div>
              <p>${colors.hex.value}</p>
              `;
    })
    .join('');
}

export { render, getColorHtml };
