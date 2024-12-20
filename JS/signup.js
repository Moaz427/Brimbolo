document.getElementById("signUpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.style.display = "none";

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    if (password.length < 6) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Password must be at least 6 characters long!";
        return;
    }

    let data = JSON.parse(localStorage.getItem("data")) || [];

    data.push({
        username: username,
        email: email,
        password: password
    });

    localStorage.setItem("data", JSON.stringify(data));

    window.location.href = "../html/login.html";
});
localStorage.clear()
