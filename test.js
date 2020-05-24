// get the button clicked value
function btn(value) {
  if (document.getElementById("inputText").value != "0") {
    document.getElementById("inputText").value += value;
  } else {
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").value += value;
  }
}

// get the button clicked symbol
function btnSymbol(value) {
  let str = document.getElementById("inputText").value;
  let firstChar = str.charAt(str.length - 1);
  if (
    firstChar != "+" &&
    firstChar != "-" &&
    firstChar != "*" &&
    firstChar != "/"
  ) {
    document.getElementById("inputText").value += value;
  }
}

// clear the input text
document.getElementById("btnClear").addEventListener("click", function () {
  document.getElementById("inputText").value = "";
});

// calculate the value inside the input text
document.getElementById("btnSolve").addEventListener("click", function () {
  let x = document.getElementById("inputText").value;
  let y = eval(x);
  let z = document.getElementById("inputText");
  z.value = y;
  if (z.value == "69") {
    z.value += " " + String.fromCodePoint(0x1f92d);
  }
});
