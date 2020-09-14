const form = document.getElementById('my-form');
const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpwd = document.getElementById('confirmpwd');


form.addEventListener('submit', e => {
    // e.preventDefault();
    fieldsCheck([name, email, password, confirmpwd]);
    emailCheck(email);
    lengthCheck(name, 3, 15);
    lengthCheck(password, 3, 15);
    matchPassword(password, confirmpwd);
});

//Input error
showError = (input, msg) => {
    const myForm = input.parentElement;
    myForm.className = 'form error';
    const small = myForm.querySelector('small');
    small.innerText = msg;
}

//Success message
showSuccess = (input) => {
    const myForm = input.parentElement;
    myForm.className = 'form success';
}

// Check the fields empty
fieldsCheck = (inputVal) => {
    inputVal.forEach(input => {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required!`)
        } else {
            showSuccess(input);
        }
    });
}

//check email is valid
emailCheck = (input) => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(pattern.test(String(email.value.trim()))) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid!')
    }
}

//Input length check
checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Password match
matchPassword = (password, confirmpwd) => {
    if(password.value !== confirmpwd) {
        showError(confirmpwd, "Password doesn't match");
    }
}