var regForm = document.forms["reg-form"];
var msg = document.querySelector("#msg");

regForm.onsubmit = function (e) {
  e.preventDefault();

  const userInfo = {
    Name: regForm["name"].value,
    Email: regForm["email"].value,
    Password: regForm["password"].value,
    ConfirmPassword: regForm["confirm-p"].value,
  };
  console.table(userInfo);

  if (regForm["password"].value !== regForm["confirm-p"].value) {
    msg.innerHTML = "Password doesn't Match!";
  } else if (regForm["password"].value.length < 8) {
    msg.innerHTML = "Password Length must be 8 carecter!";
  } else {
    msg.innerHTML = "Submited Succesfully!";
  }
  regForm["name"].value = "";
  regForm["email"].value = "";
  regForm["password"].value = "";
  regForm["confirm-p"].value = "";
};
