(function() {
  document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // YOUR CODE HERE

                        // ----- INITIALIZATION ----- //

    let grid = document.getElementsByClassName('grid')[0];
    let indicatorPalette = document.getElementsByClassName('palette')[0];
    let indicator = document.getElementsByClassName('indicator')[0];
    let palettes = document.getElementsByClassName('palettes')[0];

    let colorPicker = document.getElementsByTagName('input')[0];

    let numberOfRows = 30;
    let numberOfColumns = 30;

    let colors = {
      rainbow: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      greyscale: ['#101010', '#4c4c4c', '#999999', '#cccccc', '#dedede', 'white'],
      pastel: ['#FFBFD6', '#FFC9BF', '#C4FFBF', '#BFFFCF', '#BFF9FF', '#BFDBFF'],
      psychedelic: ['#fd00ff', '#fdff00', '#00ff38', '#00f9ff', '#3c00ff']
    }
                    // ----- APPLICATION STATE ----- //

    let brush = '';
    let mouseDown = false;

                        // ----- CREATION ----- //

    function createPalette() {
      let paletteElement = document.createElement('div');
      paletteElement.className = 'palette';
      return paletteElement;
    }

    function createLabel(palette) {
      let label = document.createElement('div');
      label.innerText = palette;
      label.className = 'label';
      return label;
    }

    function createSwatches() {
      let swatches = document.createElement('div');
      swatches.className = 'swatches';
      return swatches;
    }

    function createSwatch(colorCode) {
      let swatch = document.createElement('div');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = colorCode;
      return swatch;
    }

    function createPalettes(colors) {
      for (let palette in colors) {
        let paletteElement = createPalette();
        palettes.append(paletteElement);

        let labelElement = createLabel(palette);
        paletteElement.append(labelElement);

        let swatches = createSwatches();
        paletteElement.append(swatches);

        let colorCodes = colors[palette];

        for (let colorCode of colorCodes) {
          let swatch = createSwatch(colorCode);
          swatches.append(swatch);
        }
      }
    }

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
    createPalettes(colors);



                        // ----- EVENTS ----- //

    //colorPicker
    colorPicker.addEventListener('change', function (event) {
      let pickedColor = event.target.value;
      brush = pickedColor;
      indicator.style.backgroundColor = pickedColor;
    })

    //get color on swatch click
    palettes.addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('swatch')) {
        brush = target.style.backgroundColor;
        indicator.style.backgroundColor = brush;
      }
    });

    //begin changing pixel to selected color on mousedown
    grid.addEventListener('mousedown', function(event) {
      let target = event.target;
      if (target.classList.contains('pixel')) {
        target.style.backgroundColor = brush;
        mouseDown = true;
      }
    });

    //stop adding colors on mouseup
    grid.addEventListener('mouseup', function(event) {
        mouseDown = false;
      });


  });
})();
