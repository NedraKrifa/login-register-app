let register = document.querySelector('.register');
let login = document.querySelector('.login');
let account = document.querySelector('.account');

let loginBtn = document.querySelector('.btn-login');
let registerBtn = document.querySelector('.btn-register');
let signIn = document.querySelector('.in');
let signUp = document.querySelector('.up');
let toggler = document.getElementsByClassName('toggler');

/*register*/
let firstName=document.getElementById('first-name');
let lastName=document.getElementById('last-name');
let emailRegister=document.getElementById('email-register');
let passwordRegister=document.getElementById('pwd-register');
let confirmPassword=document.getElementById('confirm-pwd');
/*login*/
let email=document.getElementById('email');
let password=document.getElementById('pwd');



loginBtn.addEventListener('click',loginActive);
registerBtn.addEventListener('click',registerActive);
signIn.addEventListener('click',loginActive);
signUp.addEventListener('click',registerActive);
for(let i=0;i<toggler.length;i++){
    toggler[i].addEventListener('click',showHidePassword);
}
register.addEventListener('submit',checkRegister);
login.addEventListener('submit',checkLogin);

function loginActive(){
    displayPages("none","block","none");
}
function registerActive(){
    displayPages('block','none','none');
}

function displayPages(param1,param2,param3){
    register.style.display=param1;
    login.style.display=param2;
    account.style.display=param3;
}
function showHidePassword(e){
    let password=e.target.parentElement.parentElement.querySelector('.password');
    let togglerEye=e.target.parentElement.querySelector('i');
    console.log(togglerEye);
    if(password.type == 'password'){
        password.setAttribute('type','text');
        togglerEye.classList.add('fa-eye-slash');
    }
    else{
        password.setAttribute('type','password');
        togglerEye.classList.remove('fa-eye-slash')
    }
}
function checkRegister(e){
    e.preventDefault();
    checkInputs();
}

function checkInputs(){
    let firstNameValue=firstName.value.trim();
    let lastNameValue=lastName.value.trim();
    let emailRegisterValue=emailRegister.value.trim();
    let passwordRegisterValue=passwordRegister.value.trim();
    let confirmPasswordValue=confirmPassword.value.trim();

    checkFirstName(firstNameValue);
    checkLastName(lastNameValue);
    checkEmailRegister(emailRegisterValue);
    checkPasswordRegister(passwordRegisterValue);
    checkConfirmPassword(confirmPasswordValue,passwordRegisterValue);
    if(checkFirstName(firstNameValue)&&checkLastName(lastNameValue)&&checkEmailRegister(emailRegisterValue)&&checkPasswordRegister(passwordRegisterValue)&&checkConfirmPassword(confirmPasswordValue,passwordRegisterValue)){
        alert('Thanks for registration. \nTry to login Now');
        document.getElementById('first-name').value='';
        document.getElementById('last-name').value='';
        document.getElementById('email-register').value='';
        document.getElementById('pwd-register').value='';
        document.getElementById('confirm-pwd').value='';
        document.getElementById('first-name').className='';
        document.getElementById('last-name').className='';
        document.getElementById('email-register').className='';
        document.getElementById('pwd-register').className='';
        document.getElementById('confirm-pwd').className='';
        let newpeople=new objPeople(emailRegisterValue,passwordRegisterValue);
        peoples.push(newpeople);
        console.log(peoples);
    }
}

function checkFirstName(input){
    if(input === '') {
        setErrorFor(firstName,'First Name cannot be blank');
        return false;
	} else {
        setSuccessFor(firstName);
        return true;
	}
}
function checkLastName(input){
    if(input === '') {
        setErrorFor(lastName,'Last Name cannot be blank');
        return false;
	} else {
        setSuccessFor(lastName);
        return true;
	}
}

function checkEmailRegister(input){
	if(input === '') {
        setErrorFor(emailRegister, 'Email cannot be blank');
        return false;
	} else if (!isEmail(input)) {
        setErrorFor(emailRegister, 'Not a valid email');
        return false;
	} else {
        setSuccessFor(emailRegister);
        return true;
	}
}

function checkPasswordRegister(input){
    if(input === '') {
        setErrorFor(passwordRegister, 'Password cannot be blank');
        return false;
    }else if(input.length<8){
        setErrorFor(passwordRegister, 'Not a valid Password');
        return false;
    } 
    else {
        setSuccessFor(passwordRegister);
        return true;
	}
}

function checkConfirmPassword(confirmPwd,pwd){
    if(confirmPwd === '') {
        setErrorFor(confirmPassword, 'confirm Password cannot be blank');
        return false;
	} else if(confirmPwd !== pwd) {
        setErrorFor(confirmPassword, 'Passwords does not match');
        return false;
	} else{
        setSuccessFor(confirmPassword);
        return true;
	}

}

function setErrorFor(input,message){
    input.className = 'error';
    alert(message);
}
function setSuccessFor(input){
    input.className = 'success';
}

function isEmail(input){
    let regexCourriel = /.+@.+\..+/;
    return regexCourriel.test(input);
}

function checkLogin(e){
    e.preventDefault();
    verifyAccount();
}

function verifyAccount(){
    let emailValue=email.value;
    let passwordValue=password.value;

    for(let i = 0; i < peoples.length; i++) {
		if(emailValue == peoples[i].email && passwordValue == peoples[i].password) {
            alert(" yor are login Now \n welcome to your account.")
            document.getElementById('email').value='';
            document.getElementById('pwd').value='';
            accountActive();
			return;
		}
    }
    email.className = 'error';
    password.className='error';
	alert("incorrect email or password");
}

function accountActive(){
    displayPages('none','none','block');
}