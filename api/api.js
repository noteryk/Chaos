const router=require('express').Router();
const { MongoClient }=require('mongodb');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { verifytoken }=require('./middleware/verifytoken');
module.exports=router;

// Connect info
const { uri, dbname }=require('./connect.json');
//mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

// Connect to DB
const client=new MongoClient(uri, {});
const connect = async () => {
    client.db(dbname);
    try {
        await client.connect();
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    } finally {
        console.log('\x1b[32m','Server connected','\x1b[0m',`(on url ${uri})...`);
        await client.close();
    }
};
connect();

// Register
router.post('/register', async (req, res) => {
    
});

// Login
router.post('/login', async (req, res) => {

});