$(document).ready(function() {

  $('.card').click(function() {
    // alert("flip");
    var parentid = $(this).parent().attr('id');
    var cardSpot = document.getElementById(parentid).children[0];

    //and i%2==0 (don't need to include i==0 case)
      if ($(this).hasClass('flipped')) {
        $(this).removeClass('flipped');
      }
      else {
        $(this).addClass('flipped');
        $(this).addClass('flipper');
      }


  })
});
