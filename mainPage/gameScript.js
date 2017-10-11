//variable for card image theme
var easyMode;
var qs = new URLSearchParams(window.location.search);
var hardMode = qs.get("hardMode");
var theme = qs.get("theme");

/*    FLIP CARD VARIABLES   */

var numCardMatched = 0;
var flippedOnce = false;
var firstSRC;
var secondSRC;
var firstRef;
var score = 0;
var finalScore = 0;
var timeLeft = 0;

function flipCard(cardSRC)
{
  if ($(cardSRC).hasClass('flipped')) {
    $(cardSRC).removeClass('flipped');
  }
  else {
    $(cardSRC).addClass('flipped');
    $(cardSRC).addClass('flipper');
  }

  woosh.play();
}

function disableUnflipped() {
  //makes unflipped cards unclickable
  $('.img-responsive').each(function(i, obj) {
    if ($(this).attr("src") == "../images/Icon/spacer.jpg") {
      $(this).addClass("disabledbutton");
    }
  });
}

function enableUnflipped() {
  //makes unflipped cards clickable
  $('.img-responsive').each(function(i, obj) {
    if ($(this).attr("src") == "../images/Icon/spacer.jpg") {
      $(this).removeClass("disabledbutton");
    }
  });
}

function flipBack(card1, card2)
{
  //flips the two cards
  setTimeout( function() {
    flipCard($(card1));
    flipCard($(card2));

    //enable the two flipped, and all other unflipped cards
    $(card1).removeClass("disabledbutton");
    $(card2).removeClass("disabledbutton");
    enableUnflipped();

    if (hardMode)
    {
      subtractTimer();
    }

  } , 1000);
}

$(document).ready(function() {

  $('.card').click(function() {

    if (!flippedOnce)
    {
      //flipped first card
      firstSRC = $(this).children("div.back").children("img").attr("src");
      firstRef = $(this);
      flipCard($(this));
      //make it unclickable
      $(this).addClass("disabledbutton");
      flippedOnce = true;
    }
    else
    {
      //flipped second card
      secondSRC = $(this).children("div.back").children("img").attr("src");

      flipCard($(this));
      $(this).addClass("disabledbutton");
      disableUnflipped();

      if (firstSRC == secondSRC)
      {
        //it's a match
        numCardMatched += 2;
        score += 10;
        enableUnflipped();

        if (numCardMatched == 2)
        {
          //alert("you win");
          stopTimer();
          timeLeft = count / checkCountPerSec;
          finalScore = score + timeLeft;
          gameWinPopup();
        }
      }
      else
      {
        //not a match
        flipBack(this, firstRef);
      }

      //ready for next flip attempt
      flippedOnce = false;
    }
  })
});

/*    TIMER VARIABLES   */

//the start display width of progress bar
var startWidth = 40;
//in seconds
var totalTime = 60;
var subtractTime = 2;
//in milliseconds
var checkInterval = 100;
//how many times it checks per second
var checkCountPerSec = 1000/checkInterval;

//multiplier to determine new display width
var multi = startWidth/totalTime;

var counter = null;
var percent;
var time;
var count = totalTime * checkCountPerSec;
var paused = false;
var halfway = false;
var quarterway = false;

function resetTimer()
{
  count = totalTime * checkCountPerSec;
  paused = false;
  halfway = false;
  quarterway = false;
  counter = setInterval(timing, checkInterval);
}

function startTimer()
{
  counter = setInterval(timing, checkInterval);
}

function stopTimer()
{
  clearInterval(counter);
}

function subtractTimer()
{
  var subtractCount = subtractTime * checkCountPerSec;
  count -= subtractCount;
}

/*    SOUND VARIABLES   */

var jazzAudio = new Audio("../sound/jazzyfrenchy.mp3");
var cuteAudio = new Audio("../sound/cute.mp3");
var backgroundMusic;
var woosh = new Audio("../sound/woosh.wav");

function setupMusic()
{
  if (hardMode) {
    backgroundMusic = jazzAudio;
  }
  else {
    backgroundMusic = cuteAudio;
  }
  backgroundMusic.play();
  loopAudio(backgroundMusic);
}

function loopAudio(audio){
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
}

function pausePlay()
{
  if (paused)
  {
    startTimer();
    paused = false;
    enableUnflipped();
    $('#pausePlayBtn').attr('src', '../images/Icon/pauseBtn.png');
  }
  else
  {
    stopTimer();
    paused = true;
    disableUnflipped();
    $('#pausePlayBtn').attr('src', '../images/Icon/playBtn.png');
  }
}

//need to differentiate winning/losing
function endGame()
{
  stopTimer();
  $('#timer').text("");
  $('#timer').css('width','0%');
  backgroundMusic.pause();
  disableUnflipped();
  gameOverPopup();
  return;
}

function colorTimer()
{
    time = count/checkCountPerSec;
    //half the time left
    if (!halfway && (time < totalTime/2))
    {
      halfway=true;
      $('#timer').css('background-color','orange');
    }
    //1/4 the time left
    else if (!quarterway && (time < totalTime/4))
    {
      quarterway=true;
      $('#timer').css('background-color','pink');
    }
}

function timing()
{
  count = count-1;
  //time runs out
  if (count <= 0)
  {
    endGame();
    //alert("you lose");
  }

  colorTimer();

  //calculate and update the timer bar
  percent = count / checkCountPerSec * multi;
  $('#timer').css('width',percent+'%');
  text = Math.round(count/checkCountPerSec) + 's';
  $('#timer').text(text);
}

/*    CARD IMAGE VARIABLES   */
var foodArray = ["../images/food/chicken-leg.png",
"../images/food/steak.png",
"../images/food/pizza-slice.png",
"../images/food/mushroom.png",
"../images/food/shiny-apple.png",
"../images/food/pretzel.png"];

var electronicArray = ["../images/electronic/computing.png",
"../images/electronic/cctv-camera.png",
"../images/electronic/film-projector.png",
"../images/electronic/gamepad.png",
"../images/electronic/mouse.png",
"../images/electronic/smartphone.png"];

var animalArray = ["../images/animals/dolphin.png",
"../images/animals/elephant.png",
"../images/animals/feline.png",
"../images/animals/pig.png",
"../images/animals/snail.png",
"../images/animals/sheep.png"];

var abstractArray = ["../images/abstract/abstract_1.png",
"../images/abstract/abstract_2.png",
"../images/abstract/abstract_3.png",
"../images/abstract/abstract_4.png",
"../images/abstract/abstract_5.png",
"../images/abstract/abstract_6.png"];

var imagesArray;

var imgCounts = [0, 0, 0, 0, 0, 0];

var cardsPlaced = [0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0];

  function displayImage()
  {
    if(theme == "food"){
      imagesArray = foodArray;
    }else if(theme == "electronic"){
      imagesArray = electronicArray;
    }else if(theme == "animal"){
      imagesArray = animalArray;
    }else if(theme == "abstract"){
      imagesArray = abstractArray;
    }

    var cardToPlace1;
    var cardToPlace2;
    // while any of the images hasn't been placed on the board
    var success = false;

    while((imgCounts[0]==0) || (imgCounts[1]==0) || (imgCounts[2]==0) ||
    (imgCounts[3]==0) || (imgCounts[4]==0) || (imgCounts[5]==0) )
    {
      success=false;

      do{
        cardToPlace1 = Math.floor(Math.random() * (12));
      }while(cardsPlaced[cardToPlace1]!=0);

      var canvas1 = "canvas";
      var name1 = canvas1.concat(cardToPlace1.toString());

      do{
        cardToPlace2 = Math.floor(Math.random() * (12));
      }while((cardsPlaced[cardToPlace2]!=0) || (cardToPlace2 == cardToPlace1));

      var canvas2 = "canvas";
      var name2 = canvas2.concat(cardToPlace2.toString());

      do{
        // randomly generate a number between zero and imagesArray.length
        var i = Math.floor(Math.random() * (imagesArray.length));

        //check if that image has not yet been listed as placed (i.e. imgCounts[i] == 0)
        if(imgCounts[i] == 0){
          document.getElementById(name1).src = imagesArray[i];
          document.getElementById(name2).src = imagesArray[i];
          imgCounts[i]=1;
          success = true;
        }

      }while(!success);

      cardsPlaced[cardToPlace1]=1;
      cardsPlaced[cardToPlace2]=1;
    }
  }

  // the popup window for game over
  function gameOverPopup(){
    var modalGameOver = document.getElementById('modalGameOver');
    var rePlay = document.getElementById("replayBtn");
    var img = document.querySelectorAll("img")[0];

    modalGameOver.style.display = "block";
    $("#score").html("Final score: " + finalScore);
    // When the user clicks button replay, close it
    rePlay.onclick = function() {
        window.location.assign("../start.html");
    }
  }

  // the popup window for game win
  function gameWinPopup(){
    var modalGameWin = document.getElementById('modalGameWin');
    var rePlay = document.getElementById("replayBtnWin");
    var img = document.querySelectorAll("img")[0];

    modalGameWin.style.display = "block";
    $("#scoreWin").html("Final score: " + finalScore);
    // When the user clicks button replay, close it
    rePlay.onclick = function() {
        window.location.assign("../start.html");
    }
  }

  // This javascript is about the popup window in game page, which
  // included music, mute and help button.

  function gamePageModal(){
    // Get the modal
    var modal = document.getElementById('modal');

    // Get the button that opens the modal
    var btn = document.getElementById("popUpButton");

    // Get pause button image
    var img = document.querySelectorAll("img")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
      stopTimer();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        if (!paused) {
          startTimer();
        }
      }
    }
  }

  function selectModalButton(button)
  {
      button.css('opacity', '0.5');
      button.css('boxShadow', 'inset 4px 2px 1px grey');
  }

  function deselectModalButton(button)
  {
      button.css('opacity', '1');
      button.css('boxShadow', '4px 2px 1px grey');
  }

  /* change the background color when the button is clicked in setting */
  function clickMute(){
    var mute = $('#mute').css('opacity');
    var volumeOn = $('#volumeOn').css('opacity');
    if (volumeOn == "1"){
      selectModalButton($('#volumeOn'));
      deselectModalButton($('#mute'));
      backgroundMusic.play();
    }
    else {
      //mute == "1"
      selectModalButton($('#mute'));
      deselectModalButton($('#volumeOn'));
      backgroundMusic.pause();
    }
  }
  /* exit the game page when click exit in setting */
  function exitGame(){
    selectModalButton($('#exit'));
    window.location.assign("../start.html");
  }
