// Function to switch between Login and Register forms
function toggleForms() {
    let loginForm = document.getElementById("login-form");
    let registerForm = document.getElementById("register-form");

    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
}

// Function to validate login
function validateLogin() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }
    alert("Login Successful!");
}

// Function to validate registration
function validateRegister() {
    let name = document.getElementById("register-name").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Registration Successful!");
}

// Function to go back to homepage
function goBack() {
    window.location.href = "index.html"; // Make sure your homepage file is named index.html
}
