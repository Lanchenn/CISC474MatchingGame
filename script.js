$(document).ready(function() {

  $('.card').click(function() {
    var parentid = $(this).parent().attr('id');
    var cardSpot = document.getElementById(parentid).children[0];
  //  var cardSpot = $this.attr('id') <!-- using this line instead of the two above causes nothing to happen when card is clilcked-->

    //var cardIMG = cardSpot.children[0];
    //var backIMG = cardSpot.children[1];
    // alert($(parentid).attr('id'));
    //
    // alert($(cardSpot).attr('id'));
    //alert($(cardIMG).attr('id'));
    //alert($(backIMG).attr('id'));

    // alert($(this).attr('id'));



    if ($(this).hasClass('flipped')) {
      // $(cardIMG).hide();
      // cardSpot.style.background = 'red';
      // $(backIMG).show();
      $(this).removeClass('flipped');

    }
    else {
      // $(cardIMG).show();
      // cardSpot.style.background = 'transparent';
      // $(backIMG).hide();
      $(this).addClass('flipped');
      $(this).addClass('flipper');
    }
  })
});
//$('#t1').attr('src','pauseBtn.png');

//give each card spot (where we want clickable) a different class
//need attribute to know whether card flipped or not
//wait to do stuff after loading new src
