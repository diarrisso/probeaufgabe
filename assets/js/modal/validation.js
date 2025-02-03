
export function contactFormValidation() {
    const firstNameInput = document.getElementById('firstName').value;
    const firstNameFeedback = document.getElementById('firstName_feedback');
    const lastNameInput = document.getElementById('lastName').value;
    const lastNameFeedback = document.getElementById('lastName_feedback');
    const emailInput = document.getElementById('email').value;
    const emailFeedback = document.getElementById('email_feedback');
    const successMessage =  document.getElementById('success_message');

    let isValid = true;

    if (!/^[a-zA-Z]+$/.test(firstNameInput)) {
        firstNameFeedback.textContent = 'First Name should contain only letters.';
        firstNameFeedback.style.display = 'block';
        isValid = false;
    } else if (firstNameInput.length < 3) {
        firstNameFeedback.textContent = 'First Name should be at least 3 characters long.';
        firstNameFeedback.style.display = 'block';
        isValid = false;
    } else {
        firstNameFeedback.textContent = '';
        firstNameFeedback.style.display = 'none';
    }

    if (!/^[a-zA-Z]+$/.test(lastNameInput)) {
        lastNameFeedback.textContent = 'Last Name should contain only letters.';
        lastNameFeedback.style.display = 'block';
        isValid = false;
    } else if (lastNameInput.length < 3) {
        lastNameFeedback.textContent = 'Last Name should be at least 3 characters long.';
        lastNameFeedback.style.display = 'block';
        isValid = false;
    } else {
        lastNameFeedback.textContent = '';
        lastNameFeedback.style.display = 'none';
    }


    if (!/\S+@\S+\.\S+/.test(emailInput)) {
        emailFeedback.textContent = 'Please enter a valid email address.';
        emailFeedback.style.display = 'block';
        isValid = false;
    } else {
        emailFeedback.textContent = '';
        emailFeedback.style.display = 'none';
    }

    if (isValid) {
        successMessage.textContent = "Thank you! Your message has been successfully submitted."
        successMessage.style.visibility = 'visible';
    }

    return isValid;
}



export function inputEmailValidation() {
        const emailInput = document.getElementById('email');
        const emailFeedback = document.getElementById('email_feedback');

    emailInput.addEventListener('input', function() {
            const inputValue = emailInput.value.trim();

            if (!inputValue) {
                emailInput.classList.add('invalid');
                emailFeedback.textContent = 'Please enter your First Name.';
                return false;

            } else {
                emailInput.classList.remove('invalid');
                emailFeedback.textContent = '';
                return false
            }
        });

    return true
}

