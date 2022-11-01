# Chaos
"Chaos" - is ***free*** app based on communication (messaging) which is available across a range of desktop and mobile platforms.<br>
Our platform is available at almost ***every*** type of browser, mobile devices and soon even more.<br>

*"Talk is cheap, show me the code"<br>
~ Linus Torvalds*

# ***ChaosAPP***:
***ChaosAPP*** is a mobile based version of our website<br>
Click<a href="">here</a> to track our progress and download the newest version of our app.

# ***ChaosAPI*** Docs:
***ChaosAPI*** u can create your own website/app and still be anonymous while writing with your friends.<br><br>
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

#
### Login:
`http://Chaos.pl/api/login`<br> 
**method:**<br> Post<br><br>
**Body:**<br>
email(string, validemail, required), password(string, required)<br><br>
**Header:**<br>
*none*<br><br>
**Return:**<br>
auth-token<br>
