/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSlots } from './slots.interface';
import { Slots } from './slots.model';

const createSlotsIntoDB = async (payload: TSlots) => {
  const result = await Slots.create(payload);
  return result;
};
const findAvailableSlots = async (date?: string, serviceId?: string) => {
  const query: any = {
    isBooked: 'available',
  };

  if (date) {
    query.date = date;
  }

  if (serviceId) {
    query.service = serviceId;
  }

  const slots = await Slots.find(query).populate('service');

  return slots;
};

export const slotsService = {
  createSlotsIntoDB,
  findAvailableSlots,
};
