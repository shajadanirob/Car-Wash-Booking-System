/* eslint-disable no-undef */
import { Types } from "mongoose"
import { TBooking } from "./booking.interface"
import { Booking } from "./booking.model"

const createBookingIntoDB =async (payload: TBooking)=>{
    const result = await Booking.create(payload)
    return result

}
const getAllBookingFromDB = async()=>{
    const result = await Booking.find().populate('customer').populate('service').populate('slot');
    return result;
}
const getUserBookingFromDB = async(userId : Types.ObjectId)=>{
    const result = await Booking.find({customer : userId}).populate('customer').populate('service').populate('slot');
    return result;
}

export const bookingService = {
    createBookingIntoDB,
    getAllBookingFromDB,
    getUserBookingFromDB
}