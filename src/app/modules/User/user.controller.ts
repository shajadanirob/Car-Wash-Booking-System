import { Request, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = async (req: Request, res: Response) => {
  const result = await userServices.createStudentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
    
  });
};

export const UserControllers = {
  createUser,
};
