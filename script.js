const inputValue = document.querySelectorAll("input");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("date");
const nationalityInput = document.getElementById("nationality");
const termsInput = document.getElementById("terms-conditions");
const errorMessage = document.querySelectorAll(".errorMesaage");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const emailValue = emailInput.value;
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    const dateValue = dateInput.value;
    const nationalityValue = nationalityInput.value;

    if (emailValue === "") {
        errorMessage[0].classList.add("error");
        inputValue[0].classList.add("error");
    } else {
        errorMessage[0].classList.remove("error");
        inputValue[0].classList.remove("error");
    }
    
    if (usernameValue === "") {
        errorMessage[1].classList.add("error");
        inputValue[1].classList.add("error");
    } else {
        errorMessage[1].classList.remove("error");
        inputValue[1].classList.remove("error");
    }

    if (passwordValue === "") {
        errorMessage[2].classList.add("error");
        inputValue[2].classList.add("error");
    } else {
        errorMessage[2].classList.remove("error");
        inputValue[2].classList.remove("error");
    }

    if (dateValue === "") {
        errorMessage[3].classList.add("error");
        inputValue[3].classList.add("error");
    } else {
        errorMessage[3].classList.remove("error");
        inputValue[3].classList.remove("error");
    }

    if (nationalityValue === "") {
        errorMessage[4].classList.add("error");
        inputValue[4].classList.add("error");
    } else {
        errorMessage[4].classList.remove("error");
        inputValue[4].classList.remove("error");
    }

    if (termsInput.checked) {
        errorMessage[5].classList.remove("error");
        inputValue[5].classList.remove("error");
    } else {        
        errorMessage[5].classList.add("error");
        inputValue[5].classList.add("error");
    }
}
