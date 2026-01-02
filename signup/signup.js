const signupForm = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload

  // create a new user
  let newUserData = {
    id: Math.random(),
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(newUserData);

  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  allUsers.push(newUserData);

  localStorage.setItem("users", JSON.stringify(allUsers));

  window.location.href = "/index.html";
});
