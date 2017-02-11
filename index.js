(function() {
  document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // YOUR CODE HERE
    let grid = document.getElementsByClassName('grid')[0];

    grid.addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('pixel')) {
        target.classList.add('red');
      }
    });





  });
})();
