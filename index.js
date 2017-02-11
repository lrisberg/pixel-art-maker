(function() {
  document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // YOUR CODE HERE
    let numberOfRows = 30;
    let numberOfColumns = 30;

    let grid = document.getElementsByClassName('grid')[0];
    let palette = document.getElementsByClassName('palette')[0];

    let brush = '';

    function createPixels(numberOfRows, numberOfColumns, grid) {
      for (var i = 0; i < numberOfRows; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        grid.append(row);
        for (var j = 0; j < numberOfColumns; j++) {
          let pixel = document.createElement('div');
          pixel.className = 'pixel';
          row.append(pixel);
        }
      }
    }

    createPixels(numberOfRows, numberOfColumns, grid);







    grid.addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('pixel')) {
        target.className = 'pixel ' + brush;
      }
    });

    palette.addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('swatch')) {
        brush = target.classList[1];
        console.log(brush);
      }
    });

  });
})();
