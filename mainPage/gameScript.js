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
  $('.img-responsive').each(function(i, obj) {
    if ($(this).attr("src") == "../images/Icon/spacer.jpg") {
      $(this).addClass("disabledbutton");
      console.log('disable');
    }
  });
}

function enableUnflipped() {
  $('.img-responsive').each(function(i, obj) {
    if ($(this).attr("src") == "../images/Icon/spacer.jpg") {
      $(this).removeClass("disabledbutton");
      console.log('enable');
    }
  });
}

function flipBack(card1, card2)
{
  console.log("flip back");
  setTimeout( function() {
    flipCard($(card1));
    flipCard($(card2));

    //enable the two flipped, and all other unflipped cards
    $(card1).removeClass("disabledbutton");
    $(card2).removeClass("disabledbutton");
    enableUnflipped();

  } , 1000);
}

$(document).ready(function() {

  $('.card').click(function() {

    // //do this right away in case there is a delay. don't want the user to be able to use the delay to click a 3rd card.
    if (!flippedOnce)
    {
      console.log("flipped first");
      firstSRC = $(this).children("div.back").children("img").attr("src");
      firstRef = $(this);
      flipCard($(this));
      //make it unclickable
      $(this).addClass("disabledbutton");
      flippedOnce = true;
    }
    else
    {
      secondSRC = $(this).children("div.back").children("img").attr("src");

      flipCard($(this));
      $(this).addClass("disabledbutton");
      disableUnflipped();

      if (firstSRC == secondSRC)
      {
        console.log("it's a match and they are different cards");
        numCardMatched += 2;
        enableUnflipped();
      }
      else
      {
        console.log("not a match");
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
var totalTime = 35;
//in milliseconds
var checkInterval = 100;
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

/*    SOUND VARIABLES   */

var jazzAudio = new Audio("../sound/jazzyfrenchy.mp3");
var cuteAudio = new Audio("../sound/cute.mp3");
var woosh = new Audio("../sound/woosh.wav");

function pausePlay()
{
  if (paused)
  {
    startTimer();
    paused = false;
    $('#pausePlayBtn').attr('src', '../images/Icon/pauseBtn.png');
  }
  else
  {
    stopTimer();
    paused = true;
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
  return;
}

function timing()
{
  count = count-1;
  if (count <= 0)
  {
    endGame();
  }
  time = count/checkCountPerSec;
  if (!halfway && (time < totalTime/2))
  {
    halfway=true;
    $('#timer').css('background-color','orange');
  }
  else if (!quarterway && (time < totalTime/4))
  {
    quarterway=true;
    $('#timer').css('background-color','pink');
  }

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
  function displayImage(){
    var cardToPlace1;
    var cardToPlace2;
    // while any of the images hasn't been placed on the board
    var success = false;

    while((imgCounts[0]==0) || (imgCounts[1]==0) || (imgCounts[2]==0) ||
    (imgCounts[3]==0) || (imgCounts[4]==0) || (imgCounts[5]==0) ){
      // alert("imgCounts arrayTop: " + imgCounts[0]+imgCounts[1]+imgCounts[2]+imgCounts[3]+imgCounts[4]+imgCounts[5]);
      // alert("cardsPlaced arrayTop: " + cardsPlaced[0]+cardsPlaced[1]+cardsPlaced[2]+cardsPlaced[3]+cardsPlaced[4]+cardsPlaced[5]+cardsPlaced[6]+cardsPlaced[7]+cardsPlaced[8]+cardsPlaced[9]+cardsPlaced[10]+cardsPlaced[11]);

      success=false;
      // alert("in outermost while loop");

      do{
        cardToPlace1 = Math.floor(Math.random() * (12));
      }while(cardsPlaced[cardToPlace1]!=0);
      // alert("cardToPlace1: " + cardToPlace1);

      var canvas1 = "canvas";

      var name1 = canvas1.concat(cardToPlace1.toString());
      // alert("name1: "+name1);


      do{
        cardToPlace2 = Math.floor(Math.random() * (12));
      }while((cardsPlaced[cardToPlace2]!=0) || (cardToPlace2 == cardToPlace1));

      // alert("cardToPlace2: " + cardToPlace2);

      var canvas2 = "canvas";

      var name2 = canvas2.concat(cardToPlace2.toString());
      // alert("name2: "+name2);

      // alert("about to enter do/while loop");

      do{
        // alert("in do/while loop");


        // randomly generate a number between zero and imagesArray.length
        var i = Math.floor(Math.random() * (imagesArray.length));
        // alert("var i = "+i)
        // alert("imgCounts[i] = "+imgCounts[i]);

        //check if that image has not yet been listed as placed (i.e. imgCounts[i] == 0)
        if(imgCounts[i] == 0){
          // alert("imgCounts[i]==0. Now in if statement");
          // alert("name1 = "+name1);
          document.getElementById(name1).src = imagesArray[i];
          // alert("here1");
          document.getElementById(name2).src = imagesArray[i];
          // alert("here2");
          imgCounts[i]=1;
          // alert("imgCounts["+i+"] = "+ imgCounts[i]);
          success = true;
          // alert("here3");
        }

      }while(!success);

      cardsPlaced[cardToPlace1]=1;
      cardsPlaced[cardToPlace2]=1;

      // alert("imgCounts arrayBottom: " + imgCounts[0]+imgCounts[1]+imgCounts[2]+imgCounts[3]+imgCounts[4]+imgCounts[5]);
      // alert("cardsPlaced arrayBottom: " + cardsPlaced[0]+cardsPlaced[1]+cardsPlaced[2]+cardsPlaced[3]+cardsPlaced[4]+cardsPlaced[5]+cardsPlaced[6]+cardsPlaced[7]+cardsPlaced[8]+cardsPlaced[9]+cardsPlaced[10]+cardsPlaced[11]);
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
      console.log(modal);
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

  /* change the background color when the button is clicked in setting */
  function clickMute(){
    var mute = document.getElementById("mute").style.opacity;
    var volumeOn = document.getElementById("volumeOn").style.opacity;
    if (mute == "1"){
      document.getElementById("mute").style.opacity = "0.5";
      document.getElementById("mute").style.boxShadow = "inset 4px 2px 1px grey";
      jazzAudio.pause();
      document.getElementById("volumeOn").style.opacity = "1";
      document.getElementById("volumeOn").style.boxShadow = "4px 2px 1px grey";
    }
    else if (volumeOn == "1"){
      document.getElementById("mute").style.opacity = "1";
      document.getElementById("mute").style.boxShadow = "4px 2px 1px grey";
      document.getElementById("volumeOn").style.boxShadow = "inset 4px 2px 1px grey";
      document.getElementById("volumeOn").style.opacity = "0.5";
      jazzAudio.play();
    }
    else {
      document.getElementById("mute").style.opacity = "0.5";
      document.getElementById("volumeOn").style.opacity = "1";
      document.getElementById("mute").style.boxShadow = "inset 4px 2px 1px grey";
      document.getElementById("volumeOn").style.boxShadow = "4px 2px 1px grey";
      jazzAudio.pause();
    }
  }
  /* exit the game page when click exit in setting */
  function exitGame(){
    document.getElementById("exit").style.opacity = "0.5";
    document.getElementById("exit").style.boxShadow = "inset 4px 2px 1px grey";
    window.location.assign("../start.html");
  }
