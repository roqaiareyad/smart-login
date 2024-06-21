var allUser =[];
var loginForm =document.getElementById('loginForm');
var signinEmail =document.getElementById('signinEmail');
var signinPassword =document.getElementById('signinPassword');



if (localStorage.getItem('allUser') != null) {
    allUser = JSON.parse(localStorage.getItem('allUser'));
}

loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    login();
})

function login(){
    var userData = {
        email: signinEmail.value,
        password: signinPassword.value
    }
    if(loginVaild(userData) == true){
        alertLogin.classList.replace('d-block', 'd-none');
        window.location.href="../HOME/index.html";
    }else{
        alertLogin.classList.replace('d-none', 'd-block');
    }
}

function loginVaild(userData){
    for (var i = 0; i < allUser.length; i++) {
       
        if (allUser[i].email.toLowerCase() === userData.email.toLowerCase() && allUser[i].password === userData.password) {
            localStorage.setItem('userName',allUser[i].name)
            return true;
        }
    }
}