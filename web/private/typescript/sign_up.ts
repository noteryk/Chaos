window.addEventListener('load', () => {
    const form: HTMLFormElement=document.querySelector('form');
    const submit: HTMLButtonElement=document.querySelector('#submit');
    const error: HTMLDivElement=document.querySelector('#error');
    
    form.addEventListener('submit', async (event: Event) => {
        event.preventDefault();
        
        const Nick: HTMLInputElement=document.querySelector('#nick');
        const Email: HTMLInputElement=document.querySelector('#email');
        const Password: HTMLInputElement=document.querySelector('#password');
    
        const url: string='http://localhost:3000/api/register';
        const data={
            nick: Nick.value,
            password: Password.value,
            email: Email.value,
        };
        let request: XMLHttpRequest=new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    
        submit.innerHTML='Loading...';
        submit.disabled=true;
        submit.style.cursor='not-allowed';
    
        request.onloadend=(event: Event) => {
            event.preventDefault();
            if(request.status==200) {
                window.location.href='/sign_in';
            } else {
                submit.innerHTML='SIGN UP';
                submit.disabled=false;
                submit.style.cursor='pointer';
                error.innerHTML=request.responseText;
            }
        }
    });
});