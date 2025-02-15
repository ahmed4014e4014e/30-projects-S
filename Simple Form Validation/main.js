// DOM elements
const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("loginForm");
const loginUserName = document.getElementById("loginUserName");
const loginPassword = document.getElementById("loginPassword");
const showPasswordIcon = document.querySelector("i.fa-eye");

showPasswordIcon.addEventListener("click", showPassword)


// *Show Hide Password
function showPassword() {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        showPasswordIcon.style.color = "red";
    } else {
        loginPassword.type = "password";
        showPasswordIcon.style.color = "#ddd";

    }
}

// *Simple Validation

loginForm.addEventListener("submit", submitValidation);

function submitValidation(event) {
    event.preventDefault();
    // User name validation 
    if (loginUserName.value === "" || loginUserName.value.length < 3){
        showError(loginUserName, "User name should not be empty and has to be > 3");
    }else {
        showSuccess(loginUserName);
    }


    // Password validation
    if (loginPassword.value === "" || loginPassword.value.length < 6){
        showError(loginPassword, "Password can not empty or less than 6");
    }else {
        showSuccess(loginPassword);
    }
}

// Show error Message
function showError(input, message){
    const formField = input.parentElement;
    
    formField.className = "form-field error";
    if (formField.className === "form-field error") {
        const alert_message = formField.querySelector(".alert-message");
        
        alert_message.style.visibility = "visible";
        alert_message.style.color = "red";
        alert_message.innerText = message;
    }
}

function showSuccess(input){
    const formField = input.parentElement;
    formField.className = 'form-field success';
    if(formField.className === "form-field success"){
        const alert_message = formField.querySelector(".alert-message");
        alert_message.style.visibility = "hidden";
    }
}

// Request Form 

const requestForm = document.querySelector(".form-request");

requestForm.style.display = "none";

const showRequestForm = document.querySelector(".reset-password");

showRequestForm.addEventListener("click", function(e) {
    e.preventDefault();
    if (requestForm.style.display !== "block"){
        loginContainer.style.minHeight = "650px";
        requestForm.style.display = "block";
    }else {
        requestForm.style.display = "none";
        loginContainer.style.minHeight = "initial";
    }
});

requestForm.addEventListener("submit", request);

function request(e) {
    e.preventDefault();

    if (requestForm.style.display === "block") {
        const requestEmail = document.getElementById("requestEmail");
        if(requestEmail.value === "") {
            showError(requestEmail, "Email can not be empty");
        } else {
            showSuccess(requestEmail);
        }
    }

}