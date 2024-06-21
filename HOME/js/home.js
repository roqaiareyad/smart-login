 var userName = localStorage.getItem("userName");
 var logBtn = document.getElementById('logBtn');

 userNameholder.innerHTML = userName;


 logBtn.addEventListener('click',function(){
    localStorage.removeItem('userName');
 })