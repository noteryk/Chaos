const router=require('express').Router();
const mongodb=require('mongodb').MongoClient;
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const verify=require('./middleware/verifytoken');
module.exports=router;