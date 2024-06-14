import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import { TLoginUser } from './auth.interface';
import { User } from '../User/user.model';
import config from '../../config';
// import bcrypt from 'bcrypt';
const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload?.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

//   const isPasswordMatched = await bcrypt.compare(payload?.password ,user.password )
// console.log(isPasswordMatched);

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn:'30d'});

  return {
    accessToken,
    user
  };
};
export const AuthServices = {
  loginUser,
  
};
