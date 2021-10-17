// form validation
//variables
const validateUserName = document.querySelector('#user-validate')
const validateEmail = document.querySelector('#email-validate')
const validatePhone = document.querySelector('#phone-validate')
const validateSubject = document.querySelector('#subject-validate')


function validate() {
    if (document.contactForm.name.value === "") {
        validateUserName.innerHTML = "Please provide your fullname!"
        validateUserName.style.color = "red"
        document.contactForm.name.focus()
        document.contactForm.name.classList.add('invalid-focus')
        return false;
    } else {
        validateUserName.innerHTML = "Looks good!"
        validateUserName.style.color = "green"
        document.contactForm.name.classList.remove('invalid-focus')
        document.contactForm.name.classList.add('valid-focus')
    }

    if (document.contactForm.email.value === "") {
        validateEmail.innerHTML = "Please provide a valid email!"
        validateEmail.style.color = "red"
        document.contactForm.email.focus()
        document.contactForm.email.classList.add('invalid-focus')
        return false;
    } else {
        validateEmail.innerHTML = "Looks good!"
        validateEmail.style.color = "green"
        document.contactForm.email.classList.remove('invalid-focus')
        document.contactForm.email.classList.add('valid-focus')
    }

    if (document.contactForm.phone.value === "") {
        validatePhone.innerHTML = "Please provide your phone number!"
        validatePhone.style.color = "red"
        document.contactForm.phone.focus()
        document.contactForm.phone.classList.add('invalid-focus')
        return false;
    } else {
        validatePhone.innerHTML = "Looks good!"
        validatePhone.style.color = "green"
        document.contactForm.phone.classList.remove('invalid-focus')
        document.contactForm.phone.classList.add('valid-focus')
    }

    if (document.contactForm.subject.value === "") {
        validateSubject.innerHTML = "Please state your subject!"
        validateSubject.style.color = "red"
        document.contactForm.subject.focus()
        document.contactForm.subject.classList.add('invalid-focus')
        return false;
    } else {
        validateSubject.innerHTML = "Looks good!"
        validateSubject.style.color = "green"
        document.contactForm.phone.classList.add('invalid-focus')
        document.contactForm.subject.classList.remove('invalid-focus')
        document.contactForm.subject.classList.add('valid-focus')
    }
}