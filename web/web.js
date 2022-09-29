const router=require('express').Router();
module.exports=router;

router.get('/', (req, res) => {
    res.render('landing', {});
});

router.get('/sign_in', (req, res) => {
    res.render('sign_in', {});
});

router.get('/sign_up', (req, res) => {
    res.render('sign_up', {});
});