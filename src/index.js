const square = document.getElementsByClassName('square')[0]; 
const mouseHover = false;

function toggle(square, mouseHover) {
  if (mouseHover){
    square.style.width = '100px';
    square.style.height = '100px';
  } else {
    square.style.width = '50px';
    square.style.height = '50px';
  }
}

/**
 * @param {Event} ev
 */

function onHover(ev){
  toggle(ev.target, true)
}


/** 
 * @param {Event} ev 
 */
  function onLeave(ev) { 
    toggle(ev.target, false)
  }


function main() {
  const squares = document.querySelectorAll('.square');

  for (let i = 0; i < squares.length; i += 1) {
    const square = squares[i];
    square.addEventListener('mouseenter', onHover);
    square.addEventListener('mouseleave', onLeave);
   

  }
}

main();