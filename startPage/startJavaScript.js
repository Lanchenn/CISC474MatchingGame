function img1Clicked(){
  var block2 = document.getElementById('secondb').style.opacity;
  var block3 = document.getElementById('thirdb').style.opacity;
  var block4 = document.getElementById('forthb').style.opacity;

  if(block2 == "1"){
    document.getElementById("secondb").style.opacity = "0.5";
  }else if(block3 == "1"){
    document.getElementById("thirdb").style.opacity = "0.5";
  }else if(block4 == "1"){
    document.getElementById("forthb").style.opacity = "0.5";
  }else{
    document.getElementById("firstb").style.opacity = "1";
    document.getElementById("firstb").style.filter = 'grayscale(0%)';
    document.getElementById("firstb").style.boxShadow = "5px 5px 5px gray";
  }

  document.getElementById("firstb").style.opacity = "1";
  document.getElementById("firstb").style.filter = 'grayscale(0%)';
  document.getElementById("firstb").style.boxShadow = "5px 5px 5px gray";

  document.getElementById("button1").style.cursor = 'pointer';
  //document.getElementById("button1").onmouseover.style.cursor= "pointer";
  //document.getElementById("button1").style.backgroundColor = '#da9289';
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").style.cursor = 'pointer';
  document.getElementById("button2").disabled = false;
  //retrun true;
}

function img2Clicked(){
  var block1 = document.getElementById('firstb').style.opacity;
  var block3 = document.getElementById('thirdb').style.opacity;
  var block4 = document.getElementById('forthb').style.opacity;
  if(block1 == "1"){
    document.getElementById("firstb").style.opacity = "0.5";
  }else if(block3 == "1"){
    document.getElementById("thirdb").style.opacity = "0.5";
  }else if(block4 == "1"){
    document.getElementById("forthb").style.opacity = "0.5";
  }else{
    document.getElementById("secondb").style.opacity = "1";
    document.getElementById("secondb").style.filter = 'grayscale(0%)';
    document.getElementById("secondb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("secondb").style.opacity = "1";
  document.getElementById("secondb").style.filter = 'grayscale(0%)';
  document.getElementById("secondb").style.boxShadow = "5px 5px 5px gray";

  document.getElementById("button1").style.cursor = 'pointer';
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").style.cursor = 'pointer';
  document.getElementById("button2").disabled = false;
}
function img3Clicked(){
  var block1 = document.getElementById('firstb').style.opacity;
  var block2 = document.getElementById('secondb').style.opacity;
  var block4 = document.getElementById('forthb').style.opacity;
  if(block1 == "1"){
    document.getElementById("firstb").style.opacity = "0.5";
  }else if(block2 == "1"){
    document.getElementById("secondb").style.opacity = "0.5";
  }else if(block4 == "1"){
    document.getElementById("forthb").style.opacity = "0.5";
  }else{
    document.getElementById("thirdb").style.opacity = "1";
    document.getElementById("thirdb").style.filter = 'grayscale(0%)';
    document.getElementById("thirdb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("thirdb").style.opacity = "1";
  document.getElementById("thirdb").style.filter = 'grayscale(0%)';
  document.getElementById("thirdb").style.boxShadow = "5px 5px 5px gray";

  document.getElementById("button1").style.cursor = 'pointer';
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").style.cursor = 'pointer';
  document.getElementById("button2").disabled = false;
}
function img4Clicked(){
  var block1 = document.getElementById('firstb').style.opacity;
  var block2 = document.getElementById('secondb').style.opacity;
  var block3 = document.getElementById('thirdb').style.opacity;
  if(block1 == "1"){
    document.getElementById("firstb").style.opacity = "0.5";
  }else if(block2 == "1"){
    document.getElementById("secondb").style.opacity = "0.5";
  }else if(block3 == "1"){
    document.getElementById("thirdb").style.opacity = "0.5";
  }else{
    document.getElementById("forthb").style.opacity = "1";
    document.getElementById("forthb").style.filter = 'grayscale(0%)';
    document.getElementById("forthb").style.boxShadow = "5px 5px 5px gray";
  }
  document.getElementById("forthb").style.opacity = "1";
  document.getElementById("forthb").style.filter = 'grayscale(0%)';
  document.getElementById("forthb").style.boxShadow = "5px 5px 5px gray";

  document.getElementById("button1").style.cursor = 'pointer';
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").style.cursor = 'pointer';
  document.getElementById("button2").disabled = false;
}

function button1Clicked(){
  var block1 = document.getElementById('firstb').style.opacity;
  var block2 = document.getElementById('secondb').style.opacity;
  var block3 = document.getElementById('thirdb').style.opacity;
  var block4 = document.getElementById('forthb').style.opacity;

  //if((haha == "1")||(hehe == "1")||(hoho == "1")||(hihi == "1")){
  if(block1 == "1"){
    document.getElementById("button1").style.backgroundColor = '#da9289';
    window.location.assign("mainPage/game.html");
  }else if(block2 == "1"){
    document.getElementById("button1").style.backgroundColor = '#da9289';
    window.location.assign("easy2/easy2.html");
  }else if(block3 == "1"){
    document.getElementById("button1").style.backgroundColor = '#da9289';
    window.location.assign("easy3/easy3.html");
  }else if(block4 == "1"){
    document.getElementById("button1").style.backgroundColor = '#da9289';
    window.location.assign("easy4/easy4.html");
  }

}

function button2Clicked(){
  var block1 = document.getElementById('firstb').style.opacity;
  var block2 = document.getElementById('secondb').style.opacity;
  var block3 = document.getElementById('thirdb').style.opacity;
  var block4 = document.getElementById('forthb').style.opacity;

  //if((haha == "1")||(hehe == "1")||(hoho == "1")||(hihi == "1")){
  if(block1 == "1"){
    document.getElementById("button1").style.backgroundColor = '#da9289';
    window.location.assign("hard1/hard1.html");
  }else if(block2 == "1"){

  }else if(block3 == "1"){

  }else if(block4 == "1"){

  }

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
