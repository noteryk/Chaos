const router=require('express').Router();
module.exports=router;
const { MongoClient }=require('mongodb');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { Server }=require('socket.io');
// Import
const { verifytoken }=require('./middlewares/verifytoken');
const { login, register }=require('./models/user');
const { User, Friendship, Message, Group, Membership }=require('./classes/collections');


// Host
const io=new Server(require('../app'), {});

// Connect info
const { uri, dbname }=require('./connect.json');
const client=new MongoClient(uri, {});
client.db(dbname);

// Connect to DB
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

// Close connection to DB
const close = async () => {
    try {
        await client.close();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    }
};



// Login
router.post('/login', async (req, res) => {
    // UserClass
    const userClass=new User(req.body.name, req.body.password);

    // Validate
    const { error, value }=userClass.validate(login);

    // Is exist

    // Unhash password

    // Create auth token
});

// Register
router.post('/register', async (req, res) => {
    // UserClass
    const userClass=new User(req.body.nick, req.body.login, req.body.password, req.body.email);

    // Validate
    const { error, value }=userClass.validate(register);

    // Is exists

    // Hash password

    // Save to database
    userClass.insert(client, "users");
});
