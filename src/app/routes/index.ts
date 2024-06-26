import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { ServiceRoute } from '../modules/Service/service.route';
import { slotsRoutes } from '../modules/Slots/slots.route';
import { bookingRoute } from '../modules/Booking/booking.route';
import { AuthRoutes } from '../modules/Auth/auth.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/',
    route: ServiceRoute,
  },

  {
    path: '/',
    route: slotsRoutes,
  },
  {
    path: '/bookings',
    route: bookingRoute,
  },
  {
    path: '/my-bookings',
    route: bookingRoute,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
