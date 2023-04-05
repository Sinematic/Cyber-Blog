const form = document.getElementById("login-form");
const email = document.getElementById("email");
const labelEmail = document.getElementById("label-email");
const password = document.getElementById("password");
const labelPassword = document.getElementById("label-password");
const submit = document.getElementById("login-submit");

const envelope = document.createElement("i");
envelope.classList.add("fa-regular", "fa-envelope");
labelEmail.appendChild(envelope);

const lock = document.createElement("i");
lock.classList.add("fa-solid", "fa-lock");
labelPassword.appendChild(lock);

email.addEventListener("input", function() {


    if (isValidEmail(email.value)) {

        envelope.style.color = "greenyellow";
    }  else {

        envelope.style.color = "white";
    }

});

password.addEventListener("input", function() {

    if (password.value.length >= 8) {

        lock.style.color = "greenyellow";
    } else {

        lock.style.color = "white";
    }
});


function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

submit.addEventListener("click", function(event) {

    event.preventDefault();
    /* Appel à la fonction de connexion */
});