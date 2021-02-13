import * as types from './actionTypes';

export const logInAction = (data) => ({
    type : types.LOG_IN_REQUEST
})

export const signUpAction = (data) => ({
    type : types.SIGN_UP_REQUEST
})

export const loadUserAction = (data) => ({
    type : types.LOAD_USER_INFO_REQUEST
})