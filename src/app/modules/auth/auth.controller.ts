import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);
    const { refreshToken, ...others } = result.data;

    const options = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, options);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User login successfully',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.refreshToken(req);
    const { refreshToken, ...others } = result.data;

    const options = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, options);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New refreshToken successfully',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  loginUser,
  refreshToken,
  changePassword
};
