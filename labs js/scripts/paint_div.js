
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var i = getRandomInt(1,11);

function paint_div() {

    document.body.children[i].style.backgroundColor = '#'+((1<<24)*Math.random()|0).toString(16);
  }


setInterval(paint_div, 150)

