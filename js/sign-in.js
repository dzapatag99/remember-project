const name1 = document.querySelector("#nameu")
const pw = document.querySelector("#pw")
const btnLogin = document.querySelector("#btnSign-in")
const btnRegister = document.querySelector("#btnRegister")
const btnLogOut = document.querySelector("#btnLogOut")

eventSignInListeners()

function eventSignInListeners(){
    btnRegister.addEventListener("click", (e) =>{
        e.preventDefault()
        alert(`You are registered like ${name1.value} and your password is ${pw.value}, now you can login`);
        store()
    });
    
    btnLogin.addEventListener("click", (e) =>{
        e.preventDefault()
        check()
    });
}
function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
}

function check() {

    const storedName = localStorage.getItem('name1');
    const storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;

    if(userName == storedName && userPw == storedPw) {
        alert("You are loged in")
        window.location.href = "./index.html";
       
    }else {
        alert('ERROR');
    }
}

function logOut(){
    localStorage.removeItem('name1'); 
    localStorage.removeItem('pw'); 
    location.reload();
    window.location.href = "./sign-in.html";
}

 



