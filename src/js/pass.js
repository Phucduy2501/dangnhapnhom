console.clear("");
document.getElementById("hien").onclick = function () {
  let passInput = document.getElementById("pass");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
};

document.getElementById("hien1").onclick = function () {
  let passInput = document.getElementById("pass1");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
};

document.getElementById("hien2").onclick = function () {
  let passInput = document.getElementById("pass2");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
};
