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

/*$(document).ready(function() {

  $('.col-xs-3').click(function() {
    var keyid = $(this).attr('id');
    var cardSpot = document.getElementById(keyid).children[0];
    cardSpot.style.background = 'red';
    var cardIMG = cardSpot.children[0];
    var backIMG = cardSpot.children[1];
    if ($(cardIMG).is(':visible')) {
      $(cardIMG).hide();
      $(backIMG).show();
    }
    else {
      $(cardIMG).show();
      $(backIMG).hide();
    }
  })
});*/

/*$(document).ready(function() {

  $(".col-xs-3").click(function() {
    document.getElementById('cardSpot').style.background = "red";
    var keyid = $(this).attr('id');
    $('#t1').attr('src','pauseBtn.png');
    alert(keyid);
  })
});*/
//give each card spot (where we want clickable) a different class
//need attribute to know whether card flipped or not
//wait to do stuff after loading new src
