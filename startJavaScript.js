var img = document.getElementById('firstb');
var b1 = document.getElementById('button1');
var b2 = document.getElementById('button2');
//var clickBtn = document.getElementsByClassName("click1")[0];
// Disable the button on initial page load
//button1.disabled = true;
//button2.disabled = true;

//clickBtn.addEventListener('click1', function(event) {
  //  button.disabled = !button.disabled;
//});
img.onclick = function(){
  document.getElementById('button1').disabled = false;
}
/*function iffunction(){
  if(){

  }
  retrun true;
}
//document.getElementById("button1").disabled = true;
//$('#firstb').click(function() {
document.getElementById("button1").disabled = iffunction();
*/

// This javascript is about the popup window in start page, which
// included instruction of how to play the game.

function startPageModal(){
// Get the modal
  var modal = document.getElementById('modal');

// Get the button that opens the modal
  var btn = document.getElementById("popUpButton");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    console.log(modal);
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

window.onload = startPageModal;
