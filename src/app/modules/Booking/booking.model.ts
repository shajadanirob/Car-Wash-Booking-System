import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";
const BookingSchema = new Schema<TBooking>({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service', // Reference to Service model
    required: true
  },
  slot: {
    type: Schema.Types.ObjectId,
    ref: 'Slots', // Reference to Slot model
    required: true
  },
  vehicleType: {
    type: String,
    enum: ['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor'],
    required: true
  },
  vehicleBrand: {
    type: String,
    required: true
  },
  vehicleModel: {
    type: String,
    required: true
  },
  manufacturingYear: {
    type: Number,
    required: true
  },
  registrationPlate: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const Booking = model<TBooking>('Booking', BookingSchema);
