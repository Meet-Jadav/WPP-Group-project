// Toggle between login and register forms
function toggleForms() {
    let loginForm = document.getElementById("login-form");
    let registerForm = document.getElementById("register-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// Register user and save to localStorage
function validateRegister() {
    let name = document.getElementById("register-name").value.trim();
    let email = document.getElementById("register-email").value.trim().toLowerCase();
    let password = document.getElementById("register-password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Save user data to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userName", name);

    alert("Registration Successful! You can now log in.");
    toggleForms();
}

// Login validation using stored data
function validateLogin() {
    let email = document.getElementById("login-email").value.trim().toLowerCase();
    let password = document.getElementById("login-password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
    } else {
        alert("Incorrect email or password.");
    }
}

// Go back to homepage
function goBack() {
    window.location.href = "index.html";
}
