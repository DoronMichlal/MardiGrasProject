let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let textArea = document.querySelector('#textArea');

name.addEventListener('input', () => {
    let val = name.value;

    if (val == '') {
        name.style.border = '3px solid red';
    } else {
        name.style.border = '3px solid #8cbf3f';
    }
});

let validateEmail = (emailField) => {
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (reg.test(emailField) == false) {
        return false;
    }

    return true;
};

email.addEventListener('input', () => {
    let val = email.value;
    console.log(email);

    if (val == '' || validateEmail(email.value) === false) {
        email.style.border = '3px solid red';
    } else {
        email.style.border = '3px solid #8cbf3f';
    }
});

phone.addEventListener('input', () => {
    let val = phone.value;

    if (val == '') {
        phone.style.border = '3px solid red';
    } else {
        phone.style.border = '3px solid #8cbf3f';
    }
});

textArea.addEventListener('input', () => {
    let val = textArea.value;

    if (val == '') {
        textArea.style.border = '3px solid red';
    } else {
        textArea.style.border = '3px solid #8cbf3f';
    }
});
