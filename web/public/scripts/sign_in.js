const form=document.querySelector('form');
const submit=document.querySelector('#submit');
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
    
    submit.classList.add('activeLoading');
    submit.disabled=true;
    submit.style.cursor='not-allowed';

    request.onloadend=(e) => {
        if(request.status==200) {
            window.location.href='';
        } else {
            submit.classList.remove('activeLoading');
            submit.disabled=false;
            submit.style.cursor='pointer';
            //log for testing
            console.log(request.responseText);
        }
    };
});