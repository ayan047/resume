// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === 'a2000' && password === 'Swa23') {
        window.location.href = 'page2.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid ID or Password. Try again.';
    }
});

// Navigate to Page 3
function goToPage3() {
    window.location.href = 'page3.html';
}
