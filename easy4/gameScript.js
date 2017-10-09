//variable for card image theme
var easyMode;
var hardMode = false;

/*    FLIP CARD VARIABLES   */

var numCardMatched = 0;
var flippedOnce = false;
var firstSRC;
var secondSRC;
var firstRef;

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
        enableUnflipped();

        if (numCardMatched == 12)
        {
          alert("you win");
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
var woosh = new Audio("../sound/woosh.wav");

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
  jazzAudio.pause();
  disableUnflipped();
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
    alert("you lose");
  }

  colorTimer();

  //calculate and update the timer bar
  percent = count / checkCountPerSec * multi;
  $('#timer').css('width',percent+'%');
  text = Math.round(count/checkCountPerSec) + 's';
  $('#timer').text(text);
}

/*    CARD IMAGE VARIABLES   */

var imagesArray = ["../images/abstract/abstract_1.png",
"../images/abstract/abstract_2.png",
"../images/abstract/abstract_3.png",
"../images/abstract/abstract_4.png",
"../images/abstract/abstract_5.png",
"../images/abstract/abstract_6.png"];

var imgCounts = [0, 0, 0, 0, 0, 0];

var cardsPlaced = [0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0];

  function displayImage()
  {
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
      jazzAudio.play();
    }
    else {
      //mute == "1"
      selectModalButton($('#mute'));
      deselectModalButton($('#volumeOn'));
      jazzAudio.pause();
    }
  }
  /* exit the game page when click exit in setting */
  function exitGame(){
    selectModalButton($('#exit'));
    window.location.assign("../start.html");
  }
