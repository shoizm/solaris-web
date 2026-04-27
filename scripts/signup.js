console.log("HELLO! The script is working!");

const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

const firstName = document.getElementById('firstname-input').value;
const email = document.getElementById('email-input').value;
const password = document.querySelector('input[name="password"]').value;
const repeatPassword = document.querySelector('input[placeholder="Repeat Password"]').value;

if (password !== repeatPassword) {
    alert("The password does not match.");
    return;
}

if (!firstName || !password ||!repeatPassword) {
    alert('Please fill up the fields.');
    return;
}

const newUser = {
    name: firstName,
    email: email,
    password: password
};

localStorage.setItem('userData', JSON.stringify(newUser));

alert('Account has been created, you can now log in.');

window.location.href = "login.html";



});