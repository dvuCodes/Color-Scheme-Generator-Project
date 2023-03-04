'use strict';

import { render } from './utils.js';

document.addEventListener('submit', e => {
  const colorPicker = document.getElementById('color-picker').value;
  const schemeMode = document.getElementById('scheme-mode').value;

  e.preventDefault();

  //   get hex string without #
  const colorString = colorPicker
    .split('')
    .slice(1, colorPicker.length)
    .join('');

  console.log(colorString, colorPicker, schemeMode);

  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/join' },
  };

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorString}&mode=${schemeMode}`,
    options
  )
    .then(res => res.json())
    .then(data => {
      render(data);
    });
});
