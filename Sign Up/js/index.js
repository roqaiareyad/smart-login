var signupForm = document.getElementById('registerForm');
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var nameAlert = document.getElementById('nameAlert');
var emailAlert = document.getElementById('emailAlert');
var passwordAlert = document.getElementById('passwordAlert');

var allUser = [];

if (localStorage.getItem('allUser') != null) {
    allUser = JSON.parse(localStorage.getItem('allUser'));
}

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkInputsValidation()) {
        addUser();
    }
});

function addUser() {
    var newUser = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    };

    if (isExist(newUser)) {
        existAlert.classList.remove('d-none');
        successAlert.classList.add('d-none');
        console.log("User with the same email, name, and password already exists");
    } else {
        allUser.push(newUser);
        console.log(allUser);
        localStorage.setItem('allUser', JSON.stringify(allUser));

        successAlert.classList.remove('d-none');
        existAlert.classList.add('d-none');
        setTimeout(function() {
            window.location.href = "Login/index.html";
        }, 2000);

    
        signupForm.reset();
    }
}

function isExist(newUser) {
    for (var i = 0; i < allUser.length; i++) {
       
        if (allUser[i].email.toLowerCase() === newUser.email.toLowerCase()) {

            return true;
        }
    }
    return false;
}

function validateInput(regex, elem, alertmsg) {
    var pattern = regex;
    if (pattern.test(elem.value)) {
        alertmsg.classList.replace('d-block', 'd-none');
        elem.classList.remove('is-invalid');
        elem.classList.add('is-valid');
        return true;
    } else {
        alertmsg.classList.replace('d-none', 'd-block');
        elem.classList.add('is-invalid');
        return false;
    }
}

function checkInputsValidation() {
    var isNameValid = validateInput(/^[a-zA-Z0-9$_]{2,}$/, signupName, nameAlert);
    var isEmailValid = validateInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signupEmail, emailAlert);
    var isPasswordValid = validateInput(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, signupPassword, passwordAlert);

    return isNameValid && isEmailValid && isPasswordValid;
}
