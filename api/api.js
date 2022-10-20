const router=require('express').Router();
module.exports=router;
const { MongoClient }=require('mongodb');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { Server }=require('socket.io');
// Import
const verifytoken=require('./middlewares/verifytoken');
const { login, register }=require('./models/user');
const generateTag=require('./models/tag');


// *Host*
const io=new Server(require('../app'), {});

// *Connect info*
const { uri, dbname }=require('./connect.json');
const app = require('../app');
const client=new MongoClient(uri, {});

// *Connect to DB*
const connect = async () => {
    try {
        await client.connect();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    } finally {
        console.log('\x1b[32m','Server connected','\x1b[0m',`(on uri ${uri})...`);
    }
};
connect();

// *Close connection to DB*
const close = async () => {
    try {
        await client.close();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    } finally {
        console.log('\x1b[31m','Server disconnected','\x1b[0m');
    }
};


// ! *Login*
router.post('/login', async (req, res) => {
    // Validate
    const { error, value }=login.validate({
        email: req.body.email,
        password: req.body.password
    });
    if(error) return res.status(400).send(error.details[0].message);

    // Is exist
    const user=await client.db(dbname).collection('users').findOne({
        email: value.email
    });
    if(!user) return res.status(400).send('Email or password is wrong');

    // Unhash password
    const validPassword=await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Email or password is wrong');

    // Create auth token
    const token=jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    return res.status(200).header('auth-token', token).send(token);
});

// ! *Register*
router.post('/register', async (req, res) => {
    // Validate
    const { error, value }=register.validate({
        nick: req.body.nick,
        tag: generateTag(client, dbname, 'users', req.body.nick),
        password: req.body.password,
        email: req.body.email,
        aboutme: req.body.aboutme,
        status: req.body.status,
        date: new Date()
    });
    if(error) return res.status(400).send(error.details[0].message);

    // Is exists
    const user=await client.db(dbname).collection('users').findOne({
        email: value.email
    });
    if(user) return res.status(400).send('User with this email already exist');

    // Hash password
    const hashedPassword=await bcrypt.hash(value.password, 16);
    value.password=hashedPassword;

    // Save to database
    await client.db(dbname).collection('users').insertOne(value);
    return res.status(200).send('User created');
});



/*
// ! *Profile*
// Get your profile by token
router.get('/profile', verifytoken, async (req, res) => {
    // ? const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // ? return decoded._id;

    // ? tu będzie funkcja która uruchomi się po update bazy profilu io.emit("example_name",nowe_date);
    // ? a w skrypcie strony będzie (const socket=io();) socket.on("example_name", funckja); (funkcja która dodaje nowe wiadomości(tymczasowo) bo po realodzie strony będzie się ładowało z bazy danych a to będzie znikać) w ten sposób można zrobić powiadomienia o nowych wiadomościach
});

// Update your profile
router.put('/profile', verifytoken, async (req, res) => {
    //remember to use generateTag()
});

// Delete your profile
router.delete('/profile', verifytoken, async (req, res) => {

});


// ! *Groups*
// Create group
router.post('/groups', verifytoken, async (req, res) => {

});

// Get groupslist by (your)token
router.get('/groups', verifytoken, async (req, res) => {
    
});

// Update group (check by token if you are admin)
router.put('/group', verifytoken, async (req, res) => {

});

// Delete group (check by token if you are admin)
router.delete('/group', verifytoken, async (req, res) => {

});


// ! *Friends*
// Add friend (wsing your token)
router.post('/friends', verifytoken, async (req, res) => {

});

// Accept friend (using your token)
router.put('/friends', verifytoken, async (req, res) => {

});

// Get friendslist by (your)token
router.get('/friends', verifytoken, async (req, res) => {

});

// Delete friend (using your token)
router.delete('/friends', verifytoken, async (req, res) => {

});


// ! *Memberships*
// Add member (using your token)
router.post('/memberships', verifytoken, async (req, res) => {

});

// Get memberships by (group)id
router.get('/memberships', verifytoken, async (req, res) => {

});

// Update member (permission)
router.put('/memberships', verifytoken, async (req, res) => {

});

// Delete member (check by token if you are admin)
router.delete('membership', verifytoken, async (req, res) => {

});


// ! *Messages*
// Send message (using your token)
router.post('/messages', verifytoken, async (req, res) => {

});

// Get messages with someone by token and another user id
router.get('/messages', verifytoken, async (req, res) => {
    
});

// Update message (using your token)
router.put('/messages', verifytoken, async (req, res) => {

});

// Delete message (using your token)
router.delete('/messages', verifytoken, async (req, res) => {

});
*/

// *Error handler for api*
router.use(function fourOhFourHandler (req, res) {
    res.status(404).send('404: Data not found');
});