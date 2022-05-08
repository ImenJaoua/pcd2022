const router = require('express').Router()
const bookingCtrl = require('../controllers/BookingCtrl')
const auth = require('../middleware/auth')


router.route('/booking')
    .get(bookingCtrl.getBooking)
    .post(auth, bookingCtrl.createBooking)


router.route('/booking/:id')
    .delete(auth, bookingCtrl.deleteBooking)
    .put(auth, bookingCtrl.updateBooking)



module.exports = router