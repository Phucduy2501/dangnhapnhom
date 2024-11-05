document.getElementById("hien").onclick = function () {
  let passInput = document.getElementById("pass");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
};
