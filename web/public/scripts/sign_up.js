window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const submit = document.querySelector('#submit');
    const error = document.querySelector('#error');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const Nick = document.querySelector('#nick');
        const Email = document.querySelector('#email');
        const Password = document.querySelector('#password');
        const url = 'http://localhost:3000/api/register';
        const data = {
            nick: Nick.value,
            password: Password.value,
            email: Email.value,
        };
        let request = new XMLHttpRequest();
        request.open('POST', url, false);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
        submit.innerHTML = 'Loading...';
        submit.disabled = true;
        submit.style.cursor = 'not-allowed';
        request.onloadend = (event) => {
            event.preventDefault();
            if (request.status == 200) {
                const url = 'http://localhost:3000/api/login';
                const data = {
                    password: Password.value,
                    email: Email.value,
                };
                let login_request = new XMLHttpRequest();
                login_request.open('POST', url, false);
                login_request.setRequestHeader('Content-Type', 'application/json');
                login_request.send(JSON.stringify(data));
                login_request.onloadend = (event) => {
                    event.preventDefault();
                    if (login_request.status == 200) {
                        localStorage.setItem('auth-token', login_request.responseText);
                        window.location.href = '/chaos';
                    }
                    else {
                        submit.innerHTML = 'SIGN UP';
                        submit.disabled = false;
                        submit.style.cursor = 'pointer';
                        error.innerHTML = login_request.responseText;
                    }
                };
            }
            else {
                submit.innerHTML = 'SIGN UP';
                submit.disabled = false;
                submit.style.cursor = 'pointer';
                error.innerHTML = request.responseText;
            }
        };
    });
});
