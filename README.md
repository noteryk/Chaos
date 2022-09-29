# Chaos
"Chaos" it's new best community secured communicator.<br>
With website, desktop app and mobile app(in progress).<br>
"Best private communicator. Made for **you**."<br>
***ChaosAPI*** u can create your own website/app and still be anonymous while writing with your friends.<br><br>
*"Talk is cheap, show me the code"<br>
~Linus Torvalds*



# ***ChaosAPI*** Docs:
Rest API
### Register:
`http://Chaos.pl/api/register`<br> 
**method:**<br> Post<br><br>
Body takes values:<br>
nick(string, 3-64, required),  password(string, 6-64, required), email(string, validemail, 3-64, required)<br><br>
Header takes:<br>
*none*<br><br>
Return:<br>
'User created'<br>

### Login:
`http://Chaos.pl/api/login`<br> 
**method:**<br> Post<br><br>
**Body:**<br>
email(string, validemail, required), password(string, required)<br><br>
**Header:**<br>
*none*<br><br>
**Return:**<br>
auth-token<br>
