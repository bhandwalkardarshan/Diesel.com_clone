let signUpUser = JSON.parse(localStorage.getItem("signupuser")) || [];
let activeloginuser =
  JSON.parse(localStorage.getItem("activeLoginUser")) || null;
let signup = document.getElementById("signup");
let warning = document.getElementById("warning");
warning.style.display = "none";

signup.addEventListener("submit", (e) => {
  let c = 0;
  e.preventDefault();
  let obj = {
    username: signup.username.value,
    usermobilenumber: signup.usermobilenumber.value,
    userpassword: signup.userpassword.value,
  };
  if (
    signup.username.value == "" ||
    signup.usermobilenumber.value == "" ||
    signup.userpassword.value == ""
  ) {
    alert("Somthing wrong!");
  } else {
    if (signup.usermobilenumber.value.length < 10) {
      alert("please enter 10 digit mobile number");
      return;
    }
    if (signup.userpassword.value.length < 6) {
      alert("please enter atleast 6 character");
      return;
    }

    for (let phonenumber of signUpUser) {
      if (signup.usermobilenumber.value == phonenumber.usermobilenumber) {
        warning.style.display = "block";
        c = 1;
        signup.usermobilenumber.value = "";
        break;
      }
    }
    if (c == 0) {
      stroeDataofsignupUser(obj);
    }
  }
});

//new user data store (signup) function
function stroeDataofsignupUser(obj) {
  signUpUser.push(obj);
  localStorage.setItem("signupuser", JSON.stringify(signUpUser));
  localStorage.setItem("activeLoginUser", JSON.stringify(obj));

  alert("Congratulation! you are welcome");
  window.location.href = "../html/index.html";
}
