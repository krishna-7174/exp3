document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    document.querySelectorAll(".error-message").forEach(error => error.textContent = "");
    let isValid = true;

    if (username.length < 3) {
        document.getElementById("usernameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must have 8+ chars, 1 uppercase, 1 number, and 1 special char.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});
