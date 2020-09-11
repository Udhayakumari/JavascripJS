const form = document.getElementById('form-validation');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const error = document.getElementById('errors');
const sname = document.getElementById('sname');
const semail = document.getElementById('semail');
const spassword = document.getElementById('spassword');
const sconfirm = document.getElementById('sconfirm');

form.addEventListener('submit', e => {
    e.preventDefault();
    validCheck();
    nameCheck();
    emailCheck()
    passwordCheck();
    confirmCheck();
});

//Check empty fields
function validCheck() {
    if (name.value === '' || email.value == '' || password.value === '' || confirm.value === '') {
        error.innerHTML = "Please fill all the fields!";
        // alert("Please fill all the fields!");
    }
}

//check username
function nameCheck() {
    if(name.value.length <= 3) {
        sname.innerHTML = "Name must be at least 3 characters!";
        // alert("Name must be at least 3 characters");
    }
}

//check email
function emailCheck() {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const val = pattern.test(String(email.value));
    if(val !== true) {
        semail.innerHTML = "Your Email is invalid!";
    }
}

// check password
function passwordCheck() {
    if(password.value.length <= 3) {
        spassword.innerHTML = "Password must be at least 3 characters!";
    }
}

// check confirm password
function confirmCheck() {
    if(password.value !== confirm.value) {
        sconfirm.innerHTML = "Confirm password must be same as password!";
    }
}