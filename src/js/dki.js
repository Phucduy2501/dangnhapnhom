console.clear("");

document.getElementById("mat").onclick = function () {
  console.log("hello");
  let passInput = document.getElementById("mkm");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
};

document.getElementById("hien4").onclick = function () {
  console.log("hello");
  let passInput = document.getElementById("pass4");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
};
