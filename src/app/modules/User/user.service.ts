import { TUser } from "./User.interface";
import { User } from "./user.model";

const createStudentIntoDB =async (payload: TUser)=>{
    const result = await User.create(payload)
    return result

}

export const userServices ={
    createStudentIntoDB
}