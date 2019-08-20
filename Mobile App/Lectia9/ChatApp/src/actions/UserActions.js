import AsyncStorage from '@react-native-community/async-storage';

import {
    USER_CREATE_GET_SUCCESS,
    USER_CREATE_GET_FAIL
} from "./types";

export const saveUser = (profileId, email) => {
    return (dispatch) => {

        AsyncStorage.setItem('@user_storage_Key', JSON.stringify({
            email,
            uid: profileId
        }))
            .then(() => {
                dispatch({
                    type: USER_CREATE_GET_SUCCESS,
                    payload: {
                        email,
                        uid: profileId
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: USER_CREATE_GET_FAIL,
                });
            });
    }
};

export const getUser = () => {
    return (dispatch) => {
        AsyncStorage.getItem('@user_storage_Key')
            .then((user) => {
                if (user !== null) {
                    var userObject = JSON.parse(user);
                    dispatch({
                        type: USER_CREATE_GET_SUCCESS,
                        payload: userObject
                    });
                } else {
                    dispatch({
                        type: USER_CREATE_GET_FAIL,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: USER_CREATE_GET_FAIL,
                });
            });
    }
};
