const router=require('express').Router();
const verifytoken=require('../api/middlewares/verifytoken');
module.exports=router;

// Public routes
router.get('/', (req, res) => {
    res.render('landing', {});
});

router.get('/sign_in', (req, res) => {
    res.render('sign_in', {});
});

router.get('/sign_up', (req, res) => {
    res.render('sign_up', {});
});

// Private routes
router.get('/chaos', verifytoken, (req, res) => {
    res.render('dashboard', {});
});

/* Test */
router.get('/test', (req, res) => {res.render('dashboard')});