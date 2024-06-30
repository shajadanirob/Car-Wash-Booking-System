import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import { TLoginUser } from './auth.interface';
import config from '../../config';
import { User } from '../User/user.model';
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

  const accessToken = jwt.sign(jwtPayload,  config.jwt_access_secret as string, {
    expiresIn: '30d',
  });
  const refreshToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '365d',
  });

  return {
    accessToken,
    refreshToken,
    user,
  };
};
const refreshToken = async (payload: TLoginUser) => {
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

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '30d',
  });
  

  return {
    accessToken,

  };
};
export const AuthServices = {
  loginUser,
  refreshToken
};
