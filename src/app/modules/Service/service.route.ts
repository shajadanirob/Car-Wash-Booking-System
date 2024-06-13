import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
import { serviceControllers } from './service.controller';
const router = express.Router();
router.post(
    '/services',
    validateRequest(ServiceValidation.createServiceValidationSchema),
     serviceControllers.createService
  );
  router.get(
    '/services/:id',
     serviceControllers.getSingleService
  );

router.get(
    '/services',
     serviceControllers.getAllService
  );
router.patch(
    '/services/:id',
    validateRequest(ServiceValidation.updateServiceValidationSchema),
     serviceControllers.updateService
  );
router.delete(
    '/services/:id',
     serviceControllers.deleteService
  );

  export const ServiceRoute = router