'use strict'
const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const path=require('path');
app.set('view engine','hbs'); //?(ejs)
app.set('views', path.join(__dirname, 'web/private/views'));

//Public folder
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '/web/public')));

// Host Web Server
const port=process.env.PORT;
module.exports=app.listen(port, (err)=>{
    if(err) {
        return console.error('\x1b[31m','Can not start the host:','\x1b[0m',err);
    }
    else {
        return console.log('\x1b[32m','Host listening','\x1b[0m',`(on port ${port})...`,'\x1b[0m');
    }
});

// Import API
const api=require('./api/api');
app.use('/api', api);

// Import Web
const web=require('./web/web');
app.use('/', web);

// Error handlers
// 404
app.use(function fourOhFourHandler (req, res) {
    res.status(404).render('404', {});
});
// 500
app.use(function fiveHundredHandler (err, req, res, next) {
    console.error(err)
    res.status(500).send()
});