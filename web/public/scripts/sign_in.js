const form = document.querySelector('form');
const submit = document.querySelector('#submit');
const error = document.querySelector('#error');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const Email = document.querySelector('#email');
    const Password = document.querySelector('#password');
    const url = 'http://localhost:3000/api/login';
    const data = {
        password: Password.value,
        email: Email.value,
    };
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
    submit.innerHTML = 'Loading...';
    submit.disabled = true;
    submit.style.cursor = 'not-allowed';
    request.onloadend = (event) => {
        event.preventDefault();
        if (request.status == 200) {
            localStorage.setItem('auth-token', request.responseText);
            window.location.href = '/chaos';
        }
        else {
            submit.innerHTML = 'SIGN IN';
            submit.disabled = false;
            submit.style.cursor = 'pointer';
            error.innerHTML = request.responseText;
        }
    };
});
