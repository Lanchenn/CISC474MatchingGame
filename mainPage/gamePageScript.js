// This javascript is about the popup window in game page, which
// included music, mute and help button.

function gamePageModal(){
// Get the modal
  var modal = document.getElementById('modal');

// Get the button that opens the modal
  var btn = document.getElementById("popUpButton");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
// Get pause button image
  var img = document.querySelectorAll("img")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    console.log(modal);
    modal.style.display = "block";
    pausePlay();
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    startTimer();

  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      pausePlay();
    }
  }
}

//window.onload = gamePageModal;
