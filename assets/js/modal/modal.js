import {inputEmailValidation, contactFormValidation} from "./validation.js";

document.addEventListener('DOMContentLoaded', ()=> {
    const contactButton = document.getElementById("contactButton");
    const closeModal = document.getElementById("closeModal");
    const contactForm = document.getElementById("contactForm");
    const modalOverlay= document.getElementById('modalOverlay');

    const feedbackElementsValueReset = {
        emailFeedbackInput: document.getElementById('email_feedback'),
        firstFeedbackInput: document.getElementById('firstName_feedback'),
        lastFeedbackInput: document.getElementById('lastName_feedback')
    };

    const inputElementsValueReset =  {
        emailInput:  document.getElementById('email'),
        lastNameInput: document.getElementById('lastName'),
        firstNameInput: document.getElementById('firstName')
    }

    console.log(inputElementsValueReset);
    const openModal = (e) => {
        modalOverlay.classList.add('active');
    }

    const closeModalHandler= () => {
        modalOverlay.classList.remove('active');
        document.getElementById('contactForm').reset();
        console.log(inputElementsValueReset);
        Object.values(feedbackElementsValueReset).forEach(elements => elements.textContent = '');
    }

    const validateForm = (e) => {
        e.preventDefault();

        const formData = new FormData(document.getElementById("contactForm"));

        const isEmailValid = inputEmailValidation();
        const isFormValid = contactFormValidation();


        if (!isEmailValid || !isFormValid) {
            return;
        }

        fetch("pages/ajax.php", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    document.getElementById("contactForm").reset();
                    window.location.href = "http://localhost:9880/#contact";

                    setTimeout(() => {
                        document.getElementById('success_message').style.visibility = 'hidden';
                        modalOverlay.classList.remove('active');
                        location.reload();
                    }, 10000);
                } else {
                    console.error("somethings wrongs.");

                }
            })
            .catch(error => {
                console.error("Network error:", error);
            });
    };


    contactButton.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    contactForm.addEventListener('submit', validateForm);
});