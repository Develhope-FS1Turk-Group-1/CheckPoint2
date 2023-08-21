const mailInput = document.getElementById("mailInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
let usersLocalStorage = JSON.parse(localStorage.getItem("usersLocal")) || [];

let users = [];

loginBtn.addEventListener("click", () => {
  users.map((user) => {
    if (user.mail == mailInput.value && user.password == passwordInput.value) {
      alert(user.count);
      user.count++;
    }
  });
  mailInput.value = "";
  passwordInput.value = "";
  localStorage.setItem("usersLocal", JSON.stringify(users));
});

registerBtn.addEventListener("click", () => {
  if (usersLocalStorage.length === 0) {
    users = [
      ...users,
      { mail: mailInput.value, password: passwordInput.value, count: 1 },
    ];
    localStorage.setItem("usersLocal", JSON.stringify(users));
  } else if (usersLocalStorage.length >= 1) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].mail === mailInput.value) {
        console.log("already registered");
        mailInput.value = "";
        passwordInput.value = "";
      } else if (users[i].mail != mailInput.value) {
        users = [
          ...users,
          { mail: mailInput.value, password: passwordInput.value, count: 1 },
        ];
        localStorage.setItem("usersLocal", JSON.stringify(users));
      }
    }
  }
  mailInput.value = "";
  passwordInput.value = "";
});

const LoadPage = () => {
  users = [...usersLocalStorage];
};

LoadPage();
