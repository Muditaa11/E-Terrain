document.addEventListener("DOMContentLoaded", function () {
    const authForm = document.getElementById("authForm");
    const authButton = document.getElementById("authButton");
    const toggleAuth = document.getElementById("toggleAuth");
    const toggleLink = document.getElementById("toggleLink");
    const formTitle = document.getElementById("formTitle");

    let isLoginMode = false;

    toggleLink.addEventListener("click", function (e) {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        formTitle.textContent = isLoginMode ? "Login" : "Sign Up";
        authButton.textContent = isLoginMode ? "Login" : "Sign Up";
        toggleAuth.innerHTML = isLoginMode 
            ? "Don't have an account? <a href='#' id='toggleLink'>Sign Up</a>" 
            : "Already have an account? <a href='#' id='toggleLink'>Login</a>";
    });

    authForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (isLoginMode) {
            if (users[username] && users[username] === password) {
                localStorage.setItem("loggedInUser", username);
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password.");
            }
        } else {
            if (users[username]) {
                alert("Username already taken. Try another.");
            } else {
                users[username] = password;
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("loggedInUser", username);
                alert("Signup successful! Redirecting...");
                window.location.href = "index.html";
            }
        }
    });

    // Auto-login redirect
    if (localStorage.getItem("loggedInUser")) {
        window.location.href = "index.html";
    }
});
