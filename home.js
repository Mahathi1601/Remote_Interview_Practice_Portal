// Hero Button
document.querySelector(".primary-btn").addEventListener("click", () => {
    alert("Starting Mock Interview...");
});

// Login
document.querySelector(".login-btn").addEventListener("click", () => {
    alert("Go to Login Page");
});

// Category click
document.querySelectorAll(".category-box button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Selected: " + btn.innerText);
    });
});