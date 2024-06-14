import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { slotsValidationSchema } from './slots.validation';
import { slotsControllers } from './slots.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.const';
const router = express.Router();

router.post(
    '/slots',
    validateRequest(slotsValidationSchema),
    auth(USER_ROLE.admin),
    slotsControllers.createSlots
  );

router.get(
    '/slots/availability',
    auth(USER_ROLE.admin , USER_ROLE.user),
    slotsControllers.getAvailableSlots
  );
  export const slotsRoutes = router; 