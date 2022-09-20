const router=require('express').Router();
const { MongoClient }=require('mongodb');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { verifytoken }=require('./middleware/verifytoken');
module.exports=router;

// Connect to DB
const connect = async () => {
    const uri='mongodb://127.0.0.1:27017';
    const dbname='Chaos';
    //mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
    const client=new MongoClient(uri, {});
    try {
        await client.connect();
        await client.db(dbname).command({ping: 1});
    } catch(e) {
        console.error('\x1b[31m','Database error:','\x1b[0m',e);
    } finally {
        console.log('\x1b[32m','Server connected','\x1b[0m',`(on url ${uri})...`);
        await client.close();
    }
};
connect();