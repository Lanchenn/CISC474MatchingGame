//var img = document.getElementById('firstb');
//var b1 = document.getElementById('button1');
//var b2 = document.getElementById('button2');
//var clickBtn = document.getElementsByClassName("click1")[0];
// Disable the button on initial page load
//button1.disabled = true;
//button2.disabled = true;

//clickBtn.addEventListener('click1', function(event) {
  //  button.disabled = !button.disabled;
//});
//img.onclick = function(){
//  document.getElementById('button1').disabled = false;
//}

function my1(){
  //var img = document.getElementById('firstb');
  //var b1 = document.getElementById('button1');
  //var b2 = document.getElementById('button2');
  //document.getElementById("firstb").style.opacity = "1";
  //document.getElementById("firstb").style.filter = 'grayscale(0%)';
  //document.getElementById("firstb").style.boxShadow = "5px 5px 5px gray";
  //document.getElementById("button1").disable = false;
  var haha = document.getElementById('secondb').style.opacity;
  var hehe = document.getElementById('thirdb').style.opacity;
  var hoho = document.getElementById('forthb').style.opacity;
  if(haha == "1"){
    document.getElementById("secondb").style.opacity = "0.5";
  }else if(hehe == "1"){
    document.getElementById("thirdb").style.opacity = "0.5";
  }else if(hoho == "1"){
    document.getElementById("forthb").style.opacity = "0.5";
  }else{
    document.getElementById("firstb").style.opacity = "1";
    document.getElementById("firstb").style.filter = 'grayscale(0%)';
    document.getElementById("firstb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("firstb").style.opacity = "1";
  document.getElementById("firstb").style.filter = 'grayscale(0%)';
  document.getElementById("firstb").style.boxShadow = "5px 5px 5px gray";
  //retrun true;
}
//document.getElementById("button1").disabled = true;
//$('#firstb').click(function() {
//document.getElementById("button1").disabled = iffunction();
function my2(){
  var haha = document.getElementById('firstb').style.opacity;
  var hehe = document.getElementById('thirdb').style.opacity;
  var hoho = document.getElementById('forthb').style.opacity;
  if(haha == "1"){
    document.getElementById("firstb").style.opacity = "0.5";
  }else if(hehe == "1"){
    document.getElementById("thirdb").style.opacity = "0.5";
  }else if(hoho == "1"){
    document.getElementById("forthb").style.opacity = "0.5";
  }else{
    document.getElementById("secondb").style.opacity = "1";
    document.getElementById("secondb").style.filter = 'grayscale(0%)';
    document.getElementById("secondb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("secondb").style.opacity = "1";
  document.getElementById("secondb").style.filter = 'grayscale(0%)';
  document.getElementById("secondb").style.boxShadow = "5px 5px 5px gray";
}
function my3(){
  var haha = document.getElementById('firstb').style.opacity;
  var hehe = document.getElementById('secondb').style.opacity;
  var hoho = document.getElementById('forthb').style.opacity;
  if(haha == "1"){
    document.getElementById("firstb").style.opacity = "0.5";
  }else if(hehe == "1"){
    document.getElementById("secondb").style.opacity = "0.5";
  }else if(hoho == "1"){
    document.getElementById("forthb").style.opacity = "0.5";
  }else{
    document.getElementById("thirdb").style.opacity = "1";
    document.getElementById("thirdb").style.filter = 'grayscale(0%)';
    document.getElementById("thirdb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("thirdb").style.opacity = "1";
  document.getElementById("thirdb").style.filter = 'grayscale(0%)';
  document.getElementById("thirdb").style.boxShadow = "5px 5px 5px gray";
}
function my4(){
  var haha = document.getElementById('firstb').style.opacity;
  var hehe = document.getElementById('secondb').style.opacity;
  var hoho = document.getElementById('thirdb').style.opacity;
  if(haha == "1"){
    document.getElementById("firstb").style.opacity = "0.5";
  }else if(hehe == "1"){
    document.getElementById("secondb").style.opacity = "0.5";
  }else if(hoho == "1"){
    document.getElementById("thirdb").style.opacity = "0.5";
  }else{
    document.getElementById("forthb").style.opacity = "1";
    document.getElementById("forthb").style.filter = 'grayscale(0%)';
    document.getElementById("forthb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("forthb").style.opacity = "1";
  document.getElementById("forthb").style.filter = 'grayscale(0%)';
  document.getElementById("forthb").style.boxShadow = "5px 5px 5px gray";
}

function myFunction(){

}





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
  //window.onload = startPageModal;
}
//window.onload = startPageModal;
