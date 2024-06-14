import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createBookingValidationSchema } from './booking.validation';
import { bookingController } from './booking.controller';
import { USER_ROLE } from '../User/user.const';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
    '/',
    auth(USER_ROLE.user),
    validateRequest(createBookingValidationSchema),
    bookingController.createBooking
  );
router.get(
    '/',
    auth(USER_ROLE.admin),
    bookingController.getAllBooking
  );
  router.get('/', 
    auth(USER_ROLE.admin),
    bookingController.getUserBooking);

 export const bookingRoute = router
