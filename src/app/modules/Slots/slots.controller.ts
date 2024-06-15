import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { slotsService } from './slots.service';

const createSlots = catchAsync(async (req, res) => {
  const result = await slotsService.createSlotsIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const { date, serviceId } = req.query;
  const slots = await slotsService.findAvailableSlots(
    date as string,
    serviceId as string,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: slots,
  });
});

export const slotsControllers = {
  createSlots,
  getAvailableSlots,
};
