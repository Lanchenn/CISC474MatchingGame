$(document).ready(function() {

  $('.card').click(function() {
    woosh.play();
    var parentid = $(this).parent().attr('id');
    var cardSpot = document.getElementById(parentid).children[0];
  //  var cardSpot = $this.attr('id') <!-- using this line instead of the two above causes nothing to happen when card is clilcked-->

    if ($(this).hasClass('flipped')) {
      $(this).removeClass('flipped');
    }
    else {
      $(this).addClass('flipped');
      $(this).addClass('flipper');
    }
  })
});
