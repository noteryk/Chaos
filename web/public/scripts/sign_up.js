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
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
        submit.innerHTML = 'Loading...';
        submit.disabled = true;
        submit.style.cursor = 'not-allowed';
        request.onloadend = (event) => {
            event.preventDefault();
            if (request.status == 200) {
                window.location.href = '/sign_in';
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
