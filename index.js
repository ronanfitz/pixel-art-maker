(function() {
  'use strict';

  let brushClass = 'drab-black';

  let paintPixel = function(pixel) {
    pixel.classList.remove(pixel.classList.item(1));
    pixel.classList.add(brushClass);
  }

  let drawCanvas = function() {
    let canvas = document.querySelector('#canvas');

    for (let i = 0; i < 1998; i++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      canvas.append(pixel);
    }

    canvas.addEventListener('click', (event) => {
      if (event.target === canvas) {
        return;
      }

      paintPixel(event.target);
    });

  }

  let drawPalette = function() {
    let palette = document.querySelector('#palette');

    let colorClasses = [
      'red',
      'black',
      'blue',
      'green',
      'white',
      'yellow'
    ];

    for (let colorClass of colorClasses) {
      let color = document.createElement('div');
      color.classList.add('color', colorClass);
      palette.append(color);
    }

    let heading = document.createElement('h3');
    heading.textContent = 'CURRENT COLOR ';

    let brushCurrentColor = document.createElement('div');
    brushCurrentColor.classList.add('brushCurrentColor', brushClass);

    palette.append(heading);
    palette.append(brushCurrentColor);

    palette.addEventListener('click', (event) => {
      if (event.target === palette) {
        return;
      }

      brushClass = event.target.classList.item(1);

      brushCurrentColor.classList.remove(brushCurrentColor.classList.item(1));
      brushCurrentColor.classList.add(brushClass);
    });
  }

  drawCanvas();
  drawPalette();
})();
































// 'carmine-red',
// 'coral-red',
