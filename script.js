let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      try {
        value.innerHTML = eval(value.innerHTML);
      } catch (e) {
        value.innerHTML = "Error";
      }
    } else if (this.innerHTML == "Clear") {
      value.innerHTML = "";
    } else {
      let lastChar = value.innerHTML.slice(-1);
      if (
        ["+", "-", "*", "/"].includes(lastChar) &&
        ["+", "-", "*", "/"].includes(this.innerHTML)
      ) {
        return; 
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
}
