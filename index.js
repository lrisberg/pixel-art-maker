(function() {
  document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // YOUR CODE HERE
    let grid = document.getElementsByClassName('grid')[0];
    let palette = document.getElementsByClassName('palette')[0];

    let brush = '';

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
    })





  });
})();
