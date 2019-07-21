import firebase from 'firebase';

import {
    USER_CREATE_LOGIN_SUCCESS,
    USER_CREATE_LOGIN_FAIL
} from "./types";


export const createProfile = (profileId, email) => {
    return (dispatch) => {

        
        console.log('got here: ', profileId, email)
        firebase.database().ref(`/profiles/${profileId}`).set(
            {
                uid: profileId,
                email,
            }).then(() => {
                dispatch({
                    type: USER_CREATE_LOGIN_SUCCESS,
                    payload: {
                        email,
                        uid: profileId
                    }
                });
            })
            .catch((error) => {
                console.log('error:', error);
                dispatch({ type: USER_CREATE_LOGIN_FAIL });
            });
    }
};

export const getProfile = (profileUid) => {
    return (dispatch) => {
        firebase.database().ref(`/profiles/${profileUid}`)
            .once('value', (snapshot) => {
                const profile = { ...snapshot.val(), uid: profileUid };
                if (profile) {
                    // save profile local
                    // saveProfile(profile);
                    console.log('profile: ', profile);
                    dispatch({
                        payload: profile,
                        type: USER_CREATE_LOGIN_SUCCESS
                    });
                }
            });
    }
};
