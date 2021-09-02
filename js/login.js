//login form check

document.getElementById('login-btn').addEventListener('click',function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    if(email == 'admin@gmail.com' && password == '12345678'){
        window.location.href = "banking.html";
    }
})