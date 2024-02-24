var showPasswordIcon = document.getElementById('show-password');
var passwordField = document.getElementById('pass');

showPasswordIcon.addEventListener('click', function () {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
    // Add blinking class to the icon for animation
    showPasswordIcon.classList.add('blinking');

    // Remove blinking class after 1 second (1000 milliseconds)
    setTimeout(function() {
        showPasswordIcon.classList.remove('blinking');
    }, 1000);
});