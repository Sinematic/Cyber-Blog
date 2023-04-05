const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

const envelope = document.createElement("i");
envelope.classList.add("fa-regular", "fa-envelope");
form.appendChild(envelope);

const lock = document.createElement("i");
lock.classList.add("fa-solid", "fa-lock");
form.appendChild(lock);
