const form=document.querySelector('form');
const submit=document.querySelector('#submit');
const error=document.querySelector('#error');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const Email=document.querySelector('#email').value;
    const Password=document.querySelector('#password').value;

    const url='http://localhost:3000/api/login';
    const data={
        password: Password,
        email: Email
    };
    let request=new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
    
    submit.innerHTML='Loading...';
    submit.disabled=true;
    submit.style.cursor='not-allowed';

    request.onloadend=(e) => {
        if(request.status==200) {
            localStorage.setItem('auth-token', request.responseText);
            window.location.href='/chaos';
        } else {
            submit.innerHTML='SIGN IN';
            submit.disabled=false;
            submit.style.cursor='pointer';
            error.innerHTML=request.responseText;
        }
    };
});