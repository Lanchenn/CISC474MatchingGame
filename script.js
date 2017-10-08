$(document).ready(function() {

  var i = 0;
  var card1ID;
  var card2ID;
  var card1SRC;
  var card2SRC;
  var card1ref;

  $('.card').click(function() {

    woosh.play();
    i++;

    //do this right away in case there is a delay. don't want the user to be able to use the delay to click a 3rd card.
    if( i%2 == 0 && i!=0){
      //disable all cards
      $("#gameBoard").addClass("disabledbutton");
    }
    var parentid = $(this).parent().attr('id');
    var cardSpot = document.getElementById(parentid).children[0];
  //  var cardSpot = $this.attr('id') <!-- using this line instead of the two above causes nothing to happen when card is clilcked-->


    if((i%2)==0 && i!=0){
      //check if this card matches the other on the board that has class flipped
      card2ID = $(this).parent().attr('id');
      // $(this).parent().attr('id');
      card2SRC = $(this).children("div.back").children("img").attr("src");
      // alert($(this).children("div.back").children("img").attr("src"));
      // alert(card2SRC);

      if(card1SRC == card2SRC){
        alert("match!");
        //reenable game board
        $(this).addClass("disabledbutton");
        // alert($(this).attr('id'));
        // alert(card1ref);
        $(card1ref).addClass("disabledbutton");
        $("#gameBoard").removeClass("disabledbutton");
        //disable these two cards
      }
      else{
        alert("not a match");
        //flip cards back over
        $(this).removeClass("flipped");
        $(card1ref).removeClass("flipped");



        $(this).addClass("flippedBack");
        $(card1ref).addClass("flippedBack");


        //wait
        // $(delay(1000));

        //reenable the game board
        $("#gameBoard").removeClass("disabledbutton");
      }
    }
    else{
      card1ID = $(this).parent().attr('id');
      card1ref = $(this);
      // alert(card1ref);
      $(this).parent().attr('id');
      card1SRC = $(this).children("div.back").children("img").attr("src");
      // alert($(this).children("div.back").children("img").attr("src"));
      // alert(card1SRC);
    }
// alert("here5");

  // alert($(this).attr('class'));
  })
});
