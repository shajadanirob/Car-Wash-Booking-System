import { z } from "zod";

export const slotsValidationSchema = z.object({
   body: z.object({
    service : z.string(),
    date : z.string(),
    startTime: z.string(),
    endTime : z.string(),
    isBooked : z.enum(['available','booked','canceled']).optional()
   })
})
