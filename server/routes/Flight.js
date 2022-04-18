const router = require('express').Router()
const flightCtrl = require('../controllers/flightCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/flights')
    .get(flightCtrl.getFlight)
    .post(auth, authAdmin, flightCtrl.createFlight)


router.route('/flights/:id')
    .delete(auth, authAdmin, flightCtrl.deleteFlight)
    .put(auth, authAdmin, flightCtrl.updateFlight)



module.exports = router