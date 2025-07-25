const signup_form = document.querySelector(".sign-up-form");
const firstname = document.querySelector(".firstname input");
const lastname = document.querySelector(".lastname input");
const username = document.querySelector(".username input");
const email = document.querySelector(".email input");
const password = document.querySelector(".password input");
const confirmPassword = document.querySelector(".confirm input");
const terms = document.querySelector(".terms");
const errorBox = document.querySelector(".form-error");
// variables for login page
const signin_form = document.querySelector(".sign-in-form")
const errorBox2 = document.querySelector(".error2")
const login_name = document.querySelector(".login-name input");
const login_code = document.querySelector(".login-code input")


// Only run if Sign up form exists
if (signup_form) {
    signup_form.addEventListener("submit", (e) => {
        e.preventDefault();
        signupValidation()
    });
}

if (signin_form) {
    signin_form.addEventListener("submit", (e) => {
        e.preventDefault();
        loginValidation()
    });
}

// Signup validation code
const signupValidation = () => {
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
    } else if (!isEmail(emailValue)) {
        showFormError(email, "Email is invalid!")
        return
    } else {
        showFormSuccess(email)
    }

    if (passwordValue === "") {
        showFormError(password, "Password cannot be empty.")
        confirmPassword.parentElement.classList.remove("correct");
        confirmPassword.parentElement.classList.add("incorrect");
        return;
    } else if (!validPassword(passwordValue)) {
        showFormError(password, "Password should contain an uppercase letter, a lowercase letter, a number and a special character")
        confirmPassword.parentElement.classList.remove("correct");
        confirmPassword.parentElement.classList.add("incorrect");
        return;
    } else {
        showFormSuccess(password)
    }

    if (confirmPasswordValue === "") {
        showFormError(confirmPassword, "Please confirm your password.")
        return;
    } else if (passwordValue !== confirmPasswordValue) {
        showFormError(password, "Passwords do not match.");
        confirmPassword.parentElement.classList.remove("correct");
        confirmPassword.parentElement.classList.add("incorrect");
        return;
    }
    else {
        showFormSuccess(confirmPassword)
    }

    if (!terms.checked) {
        showCheckboxError(terms);
        return;
    } else {
        showCheckboxSuccess(terms)
    }

    signup_form.classList.add("submitted")

    console.log("Signup form is valid")
};

// Login form validation code
const loginValidation = () => {
    const login_nameValue = login_name.value.trim();
    const login_codeValue = login_code.value.trim();

    if (login_nameValue === "") {
        showLoginError(login_name, "Username cannot be blank")
    }
    else {
        showLoginSuccess(login_name)
    }

    if (login_codeValue === "") {
        showLoginError(login_code, "Password cannot be blank")
    } else {
        showLoginSuccess(login_code)
    }

    signin_form.classList.add("submitted")

    console.log("Login form validated ✅");
}


// HELPER FUNCTIONS
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
    // errorBox.textContent = message;
    // errorBox.style.display = "block";
    check.classList.remove("correct-check")
    check.classList.add("incorrect-check")
}

const showCheckboxSuccess = (input) => {
    const check = input.parentElement
    // errorBox.textContent = "";
    // errorBox.style.display = "none";
    check.classList.remove("incorrect-check")
    check.classList.add("correct-check")
}

const showLoginError = (input, message) => {
    const user = input.parentElement;
    errorBox2.textContent = message;
    errorBox2.style.display = "block";
    user.classList.remove("correct");
    user.classList.add("incorrect");
}

const showLoginSuccess = (input) => {
    const user = input.parentElement; // .user
    errorBox2.textContent = "";
    errorBox2.style.display = "none";
    user.classList.remove("incorrect");
    user.classList.add("correct");
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const validPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(password);
}