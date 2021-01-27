/*Dit wordt de code voor een calculator*/

var value1;
var operator = "";

//operators
function pressPlus() {
  value1 = Number(document.getElementById('display').value);
  operator = "plus";
  document.getElementById('display').value = '';
}

function pressMinus() {
  value1 = Number(document.getElementById('display').value);
  operator = "minus";
  document.getElementById('display').value = '';
}

function pressDivide() {
  value1 = Number(document.getElementById('display').value);
  operator = "divide";
  document.getElementById('display').value = '';
}

function pressMultiply() {
  value1 = Number(document.getElementById('display').value);
  operator = "multiply";
  document.getElementById('display').value = '';
}

//resolve

function pressResolve() {
  var value2 = Number(document.getElementById('display').value);

  if (operator == "plus") {
      document.getElementById('display').value = value1 + value2;
      
  } else if (operator == "minus") {
      document.getElementById('display').value = value1 - value2;
  
  } else if (operator == "multiply") {
          document.getElementById('display').value = value1 * value2;

  } else if (operator == "divide") {
      document.getElementById('display').value = value1 / value2;
  }
}


//clear screen

function pressButtonClear() {
  document.getElementById("display").value = '';
}


//numbers

function pressButton0() {
  document.getElementById("display").value += 0;
}

function pressButton1() {
  document.getElementById("display").value += 1;
}

function pressButton2() {
  document.getElementById("display").value += 2;
}

function pressButton3() {
  document.getElementById("display").value += 3;
}

function pressButton4() {
  document.getElementById("display").value += 4;
}

function pressButton5() {
  document.getElementById("display").value += 5;
}

function pressButton6() {
  document.getElementById("display").value += 6;
}

function pressButton7() {
  document.getElementById("display").value += 7;
}

function pressButton8() {
  document.getElementById("display").value += 8;
}

function pressButton9() {
  document.getElementById("display").value += 9;
}

function pressComma() {
  document.getElementById("display").value += ',';
}
