import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createBookingValidationSchema } from './booking.validation';
import { bookingController } from './booking.controller';
const router = express.Router();

router.post(
    '/',
    validateRequest(createBookingValidationSchema),
    bookingController.createBooking
  );
router.get(
    '/',
    bookingController.getAllBooking
  );
  router.get('/', bookingController.getUserBooking);

 export const bookingRoute = router
