const router=require('express').Router();
const { MongoClient }=require('mongodb');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { verifytoken }=require('./middleware/verifytoken');
module.exports=router;

// Connect info
const { uri, dbname }=require('./connect.json');
//mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
const client=new MongoClient(uri, {});
client.db(dbname);

// Connect to DB
const connect = async () => {
    try {
        await client.connect();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    }
};
const close = async () => {
    try {
        await client.close();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    }
};
const status = async () => {
    try {
        client.serverStatus();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    }
};
connect();

// Register
router.post('/register', async (req, res) => {
    //client.db().collection('').find({}).toArray();
});

// Login
router.post('/login', async (req, res) => {

});
