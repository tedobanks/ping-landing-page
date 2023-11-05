const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//FORM
const emailInput = document.getElementById('textfield');
const errorText = document.querySelector('#errortext')
const submitButton = document.getElementById('emailsubmit')
//


submitButton.addEventListener('click', () => {
    const emailValue = emailInput.value.trim()
    if (emailValue != null && emailRegex.test(emailValue)) {
        emailInput.setAttribute('data-validated', 'true')
        errorText.setAttribute('data-show', 'false')
    }
    else if (emailValue == "") {
        errorText.textContent = 'Whoops! It looks like you forgot to add your email'
        errorText.setAttribute('data-show', 'true')
    }
    else {
        errorText.textContent = 'Please provide a valid email address'
        emailInput.setAttribute('data-validated', 'false')
        errorText.setAttribute('data-show', 'true')
    }

})