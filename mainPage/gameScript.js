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

  var numCardMatched = 0;
  var flippedOnce = false;
  var firstSRC;
  var secondSRC;
  var firstRef;

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
