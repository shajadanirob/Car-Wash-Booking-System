import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
import { serviceControllers } from './service.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.const';
const router = express.Router();
router.post(
  '/services',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.createServiceValidationSchema),
  serviceControllers.createService,
);
router.get(
  '/services/:id',

  serviceControllers.getSingleService,
);

router.get(
  '/services',
 
  serviceControllers.getAllService,
);
router.patch(
  '/services/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.updateServiceValidationSchema),
  serviceControllers.updateService,
);
router.delete(
  '/services/:id',
  auth(USER_ROLE.admin),
  serviceControllers.deleteService,
);

export const ServiceRoute = router;
