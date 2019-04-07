let input = document.querySelector("input");
let submit = document.querySelector(".add_button");
let olTag = document.querySelector("ol");

function addToList() {
  let newLi = document.createElement("li");
  newLi.classList.add("items");
  newLi.appendChild(document.createTextNode(input.value));
  olTag.appendChild(newLi);
  input.value = "";

  let delButton = document.createElement("button");
  delButton.innerHTML = "Delete!";
  delButton.classList.add("del_button");
  delButton.addEventListener("click", removeList);
  newLi.append(delButton);

  function removeList() {
    newLi.remove();
  }
}

function inputLength() {
  return input.value.length;
}

function clickSubmit() {
  if (inputLength() > 0) {
    addToList();
  }
}

function hitEnter(keyStroke) {
  if (inputLength() > 0 && keyStroke.keyCode === 13) {
    addToList();
  }
}

function crossOut(tar) {
  tar.target.classList.toggle("cross_out");
}

submit.addEventListener("click", clickSubmit);
input.addEventListener("keypress", hitEnter);
olTag.addEventListener("click", crossOut);
