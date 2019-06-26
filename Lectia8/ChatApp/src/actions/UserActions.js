import { USER_CREATE_LOGIN_SUCCESS } from "./types";

export const userLogin = (userObject) => {
    return (dispatch) => {
        dispatch({
            type: USER_CREATE_LOGIN_SUCCESS,
            payload: userObject
        });
    }
};
