function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);

// keep scores
var lastNum = -1;
var draw = 0;
var win = 0;
var lose = 0;

var banker, player, drawn;
var boss, selected;
var scissor, paper, stone;
var pSelect, restart;
var myTimerEvt = 0;

const imgList = ["scissor.svg", "paper.svg", "stone.svg"]; // images
/* update the image of element to imgID **/
function updateImage(ele, imgID) {
  if (imgID === undefined) { // if undefined, then generate a random number
    imgID = Math.floor(Math.random() * 3);
  } else if (imgID == -1) { // restart to blank
    ele.src = "img/blank.svg";
    return 0;
  }
  ele.src = "img/" + imgList[imgID];
  return imgID;
}

/* change the image of the boss */
function changeBossImage() {
  lastNum = updateImage(boss);
}

/* user clicked on an element */
function chooseMe() {
  //console.log(this.id);
  switch (this.id) {
    case "scissorIcon":
      imgNum = 0;
      break;
    case "paperIcon":
      imgNum = 1;
      break;
    case "stoneIcon":
      imgNum = 2;
      break;
  }

  updateImage(selected, imgNum); // update user image
  clearInterval(myTimerEvt); // stop the timer
  checkGame(imgNum); // check the game
  displayScores(); // display the scores
}

/* check and update scores based on user's  and boss's choices */
function checkGame(choseNum) {
  switch (choseNum - lastNum) {
    case 0:
      draw++;
      break;
    case 1:
    case -2:
      lose++;
      break;
    case -1:
    case 2:
      win++;
      break;
  }
}

// display the scores 
function displayScores() {
  restart.style.display = "block"; // display restart button
  pSelect.style.display = "none"; // hide the selection panel
  drawn.innerHTML = "DRAW: " + draw;
  player.innerHTML = "PLAYER WIN: " + win;
  banker.innerHTML = "BANKER WIN: " + lose;
}

/* restart the timer */
function doStart() {
  myTimerEvt = setInterval(changeBossImage, 50);

  updateImage(selected, -1); // display blank for selected image
  restart.style.display = "none"; // hide restart button
  pSelect.style.display = "block"; // display the selection panel
}

function init() {
  // define elements
  banker = document.querySelector("#banker"); // banker's score
  player = document.querySelector("#player"); // player's score
  drawn = document.querySelector("#drawn"); // draw

  boss = document.querySelector("#bossImg"); // banker
  selected = document.querySelector("#selectedImg"); // player

  scissor = document.querySelector("#scissorIcon"); // icons
  paper = document.querySelector("#paperIcon");
  stone = document.querySelector("#stoneIcon");

  pSelect = document.querySelector(".selection"); // selection panel
  restart = document.querySelector("#restart"); // restart button

  // define the click listeners
  scissor.addEventListener("click", chooseMe);
  paper.addEventListener("click", chooseMe);
  stone.addEventListener("click", chooseMe);

  restart.addEventListener("click", doStart);
  restart.style.display = "none"; // hide restart button

  displayScores(); // display the scores
  doStart();

}

document.addEventListener('DOMContentLoaded', init);
