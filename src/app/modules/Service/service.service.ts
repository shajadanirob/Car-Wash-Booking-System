import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB =async (payload:TService)=>{
    const result = await Service.create(payload)
    return result
}

const getAllServiceFromDB = async()=>{
    const result = await Service.find();
    return result;
}
const getSingleServiceFromDB = async(id : string)=>{
    const result = await Service.findById(id);
    return result;
}

const updateServiceFromDB = async(id : string, payload:Partial<TService>)=>{
    const result = await Service.findOneAndUpdate(
        {_id :id},
        payload,
        {
            new: true
        }
    )
    return result
}
const deletedServiceFromDB = async (id :string)=>{
    const result = await Service.findByIdAndUpdate(
        id,
        {isDeleted : true},
        {new:true}
    )
    return result
}



export const ServicesServices ={
    createServiceIntoDB,
    getAllServiceFromDB,
    getSingleServiceFromDB,
    updateServiceFromDB,
    deletedServiceFromDB
}