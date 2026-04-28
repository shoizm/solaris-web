const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

const emailInput = document.getElementById('email-input').value;
const passwordInput = document.getElementById('password-input').value;
const savedUser = JSON.parse(localStorage.getItem('userData'));

if (savedUser && emailInput === savedUser.email && passwordInput === savedUser.password) {
    
    alert(`You are now logged in, Welcome ${savedUser.name}!`);
    window.location.href = "dashboard.html";

} else {
    alert('You have failed to logged in, check your email/password.')
}





});