var screenValue;


//numbers

function pressButton0() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"0";
}

function pressButton1() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"1";
}

function pressButton2() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"2";
  console.log(screenValue);
}

function pressButton3() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"3";
}

function pressButton4() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"2";
}

function pressButton5() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"5";
}

function pressButton6() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"6";
}

function pressButton7() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"7";
}

function pressButton8() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"8";
}

function pressButton9() {
  screenValue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = screenValue +"9";
}


//Clear display

function pressButtonClear() {
  document.getElementById("display").innerHTML = "";
}
