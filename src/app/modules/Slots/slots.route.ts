import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { slotsValidationSchema } from './slots.validation';
import { slotsControllers } from './slots.controller';
const router = express.Router();

router.post(
    '/slots',
    validateRequest(slotsValidationSchema),
    slotsControllers.createSlots
  );

router.get(
    '/slots/availability',
    slotsControllers.getAvailableSlots
  );
  export const slotsRoutes = router; 