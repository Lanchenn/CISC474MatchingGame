$(document).ready(function() {

  $('.clickBox').click(function() {
    var parentid = $(this).parent().attr('id');
    var cardSpot = document.getElementById(parentid).children[0];
    var cardIMG = cardSpot.children[0];
    var backIMG = cardSpot.children[1];
    if ($(cardIMG).is(':visible')) {
      $(cardIMG).hide();
      cardSpot.style.background = 'red';
      $(backIMG).show();
    }
    else {
      $(cardIMG).show();
      cardSpot.style.background = 'transparent';
      $(backIMG).hide();
    }
  })
});
//$('#t1').attr('src','pauseBtn.png');

//give each card spot (where we want clickable) a different class
//need attribute to know whether card flipped or not
//wait to do stuff after loading new src
