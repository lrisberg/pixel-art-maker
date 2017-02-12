(function() {
  document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // YOUR CODE HERE
    let numberOfRows = 30;
    let numberOfColumns = 30;

    let wrapper = document.getElementsByClassName('wrapper')[0];
    let grid = document.getElementsByClassName('grid')[0];
    let indicatorPalette = document.getElementsByClassName('palette')[0];
    let indicator = document.getElementsByClassName('indicator')[0];
    let palette = document.getElementsByClassName('palette')[1];
    let palettes = document.getElementsByClassName('palettes')[0];
    let swatches = palette.getElementsByClassName('swatches')[0];

    let colorPicker = document.getElementsByTagName('input')[0];

    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    let brush = '';

    function createPixels(numberOfRows, numberOfColumns, grid) {
      for (var i = 0; i < numberOfRows; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        grid.append(row);
        for (var j = 0; j < numberOfColumns; j++) {
          let pixel = document.createElement('div');
          pixel.className = 'pixel';
          pixel.addEventListener('mouseenter', function(event) {
            let target = event.target;
            if (mouseDown === true && target.classList.contains('pixel')) {
              target.style.backgroundColor = brush;
            }
          })
          row.append(pixel);
        }
      }
    }

    createPixels(numberOfRows, numberOfColumns, grid);

    function createSwatches(colors, swatches) {
      for (var i = 0; i < colors.length; i++) {
        let swatch = document.createElement('div');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = colors[i];
        swatches.append(swatch);
      }
    }

    createSwatches(colors, swatches);

    colorPicker.addEventListener('change', function (event) {
      let pickedColor = event.target.value;
      brush = pickedColor;
      indicator.style.backgroundColor = pickedColor;
    })



    //click on palette
    palettes.addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('swatch')) {
        brush = target.style.backgroundColor;
        indicator.style.backgroundColor = brush;
      }
    });

    let mouseDown = false;
    //mousedown
    grid.addEventListener('mousedown', function(event) {
      let target = event.target;
      if (target.classList.contains('pixel')) {
        target.style.backgroundColor = brush;
        mouseDown = true;
      }
    });

    grid.addEventListener('mouseup', function(event) {
        mouseDown = false;
      });


  });
})();
