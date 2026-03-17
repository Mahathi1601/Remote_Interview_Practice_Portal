document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('interviewPopup');
    const closeBtn = document.getElementById('closePopup');
    const loginBtn = document.getElementById('loginBtn');

    // Show popup automatically on load as per UI requirements [cite: 13]
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000);

    // Close Popup Logic [cite: 31]
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Simple routing simulation
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html'; // Logic for [cite: 46]
    });

    // Close popup if clicking outside the card
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});