const signinForm = document.getElementById("signinForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let signinUserData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(signinUserData);

  let allSignupUsers = JSON.parse(localStorage.getItem("users"))

  let authUser  = allSignupUsers.find((ele) => {
    return ele.email === signinUserData.email && ele.password === signinUserData.password
  })
  console.log(authUser);
  

  if (authUser) {
        alert(`Welcome ${authUser.username} 🤩 `)
  }

});
