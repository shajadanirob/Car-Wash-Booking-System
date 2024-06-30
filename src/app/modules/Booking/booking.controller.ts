import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingService } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBookingIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully',
    data: result,
   
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const result = await bookingService.getAllBookingFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
   
  });
});
const getUserBooking = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await bookingService.getUserBookingFromDB(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User bookings retrieved successfully',
    data: result,
  
  });
});

export const bookingController = {
  createBooking,
  getAllBooking,
  getUserBooking,
};
