const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/signup', userCtrl.register)

router.post('/signin', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)

//router.get('/history', auth, userCtrl.history)


module.exports = router