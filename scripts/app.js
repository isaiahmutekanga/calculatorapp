const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const display = document.querySelector(".display");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equals = document.querySelector(".equals");
const backspace = document.querySelector(".delete");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const multipy = document.querySelector(".multipy");
let displayBox = display.innerHTML;

one.addEventListener("click", () => {
  display.append(1);
});
two.addEventListener("click", () => {
  display.append(2);
});
three.addEventListener("click", () => {
  display.append(3);
});
four.addEventListener("click", () => {
  display.append(4);
});
five.addEventListener("click", () => {
  display.append(5);
});
six.addEventListener("click", () => {
  display.append(6);
});
seven.addEventListener("click", () => {
  display.append(7);
});
eight.addEventListener("click", () => {
  display.append(8);
});
nine.addEventListener("click", () => {
  display.append(9);
});
zero.addEventListener("click", () => {
  display.append(0);
});
plus.addEventListener("click", () => {
  preventErorrs("+");
});
minus.addEventListener("click", () => {
  preventErorrs("-");
});
divide.addEventListener("click", () => {
  // if (display.innerHTML == "") {
  //   return;
  // } else {
  //   display.append("/");
  // }
  preventErorrs("/");
  //display.append("/");
});
multipy.addEventListener("click", () => {
  //display.append("*");
  preventErorrs("*");
});

equals.addEventListener("click", () => {
  preventLastCharacter();
  display.innerHTML = eval(display.innerHTML);
});
backspace.addEventListener("click", () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
});
clear.addEventListener("click", () => {
  display.innerHTML = "";
});

function preventErorrs(symbol) {
  if (display.innerHTML == "") {
    return;
  } else {
    display.append(symbol);
  }

  if (display.innerHTML[display.innerHTML.length - 2] == "/") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  if (display.innerHTML[display.innerHTML.length - 2] == "*") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  if (display.innerHTML[display.innerHTML.length - 2] == "-") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  if (display.innerHTML[display.innerHTML.length - 2] == "+") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
}

function preventLastCharacter() {
  if (display.innerHTML[display.innerHTML.length - 1] == "/") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  if (display.innerHTML[display.innerHTML.length - 1] == "+") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  if (display.innerHTML[display.innerHTML.length - 1] == "-") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  if (display.innerHTML[display.innerHTML.length - 1] == "*") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
}
