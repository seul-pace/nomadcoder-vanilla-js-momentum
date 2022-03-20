const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const nameDiv = document.querySelector("#name");
const userNameDiv = document.createElement("div");
nameDiv.appendChild(userNameDiv);

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "name";

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greetToUser(username);
}

function greetToUser(username) {
    userNameDiv.innerText = `안녕하세요 [${username}]님`;
    nameDiv.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greetToUser(savedUsername);
}

