const form = document.querySelector(".form1");
const firstname = document.querySelector(".firstname input");
const lastname = document.querySelector(".lastname input");
const username = document.querySelector(".username input");
const email = document.querySelector(".email input");
const password = document.querySelector(".password input");
const confirmPassword = document.querySelector(".confirm input");
const terms = document.querySelector(".terms");
const errorBox = document.querySelector(".form-error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {
    // Get the values from the input fields
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // Check if any field is empty
    if (firstnameValue === "") {
        showFormError(firstname, "First name cannot be empty.");
        return;
    } else {
        showFormSuccess(firstname)
    }

    if (lastnameValue === "") {
        showFormError(lastname, "Last name cannot be empty.");
        return;
    } else {
        showFormSuccess(lastname)
    }

    if (usernameValue === "") {
        showFormError(username, "Username cannot be empty.");
        return;
    } else {
        showFormSuccess(username)
    }

    if (emailValue === "") {
        showFormError(email, "Email cannot be empty.")
        return;
    } else {
        showFormSuccess(email)
    }

    if (passwordValue === "") {
        showFormError(password, "Password cannot be empty.")
        return;
    } else {
        showFormSuccess(password)
    }

    if (confirmPasswordValue === "") {
        showFormError(confirmPassword, "Please confirm your password.")
        return;
    } else {
        showFormSuccess(confirmPassword)
    }

    if (!terms.checked) {
        showCheckboxError(terms, "You must agree to the terms before registering.");
        return;
    } else {
        showCheckboxSuccess(terms)
    }

    if (passwordValue !== confirmPasswordValue) {
        showFormError(password, "Passwords do not match.");
        showFormError(confirmPassword, "Passwords do not match.");

        return;
    }
};

const showFormError = (input, message) => {
    const user = input.parentElement;
    errorBox.textContent = message;
    errorBox.style.display = "block";
    user.classList.remove("correct");
    user.classList.add("incorrect");
};

const showFormSuccess = (input) => {
    const user = input.parentElement; // .user
    errorBox.textContent = "";
    errorBox.style.display = "none";
    user.classList.remove("incorrect");
    user.classList.add("correct");
};

const showCheckboxError = (input, message) => {
    const check = input.parentElement
    errorBox.textContent = message;
    errorBox.style.display = "block";
    check.classList.remove("correct-check")
    check.classList.add("incorrect-check")
}

const showCheckboxSuccess = (input) => {
    const check = input.parentElement
    errorBox.textContent = "";
    errorBox.style.display = "none";
    check.classList.remove("incorrect-check")
    check.classList.add("correct-check")
}