const router=require('express').Router();
module.exports=router;

router.get('/', (req, res) => {
    res.render('landing', {});
});

router.get('/signin', (req, res) => {
    res.render('sign_in', {});
});

router.get('/signup', (req, res) => {
    res.render('sign_up', {});
});