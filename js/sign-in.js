const name1 = document.querySelector("#nameu")
const pw = document.querySelector("#pw")
const btnLogin = document.querySelector("#btnSign-in")
const btnRegister = document.querySelector("#btnRegister")


eventSignInListeners()

function eventSignInListeners(){
    btnRegister.addEventListener("click", (e) =>{
        e.preventDefault()
        store()
    });
    
    btnLogin.addEventListener("click", (e) =>{
        e.preventDefault()
        check()
    });
}
// storing input from register-form
function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    const storedName = localStorage.getItem('name1');
    const storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;

    // check if stored data from register-form is equal to data from login form
    if(userName == storedName && userPw == storedPw) {
        alert("You are loged in")
        window.location.href = "./index.html";
       
    }else {
        alert('ERROR');
    }
}
 



