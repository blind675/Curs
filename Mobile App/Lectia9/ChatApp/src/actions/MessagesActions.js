import firebase from 'firebase';
import _ from 'lodash';

import {
    MESSAGES_GET_SUCCESS,
    MESSAGE_CREATE_ERROR,
} from "./types";

export const addMessageInChannel = (channel, newMessage) => {

    return (dispatch, getState) => {
        const { user } = getState();

        firebase.database().ref(`messages/${channel.name}`).push({
            author: user,
            message: newMessage
        }).then((newPayload) => {
            // console.log('create channel ok: ', newPayload);
            // this will trigger the get channels so no dispatch needed
        }).catch((error) => {
            console.log('create channel error: ', error);
            dispatch({
                payload: [],
                type: MESSAGE_CREATE_ERROR
            });
        });

    }
}

export const getMessages = (channel) => {
    return (dispatch) => {
        firebase.database().ref(`messages/${channel.name}`).on('value', (snapshot) => {
            const messages = snapshot.val();
            if (messages) {

                const messagesList = _.map(messages, (val, uid) => {
                    return { ...val, uid };
                });
                // console.log(' new messages : ', messagesList);

                dispatch({
                    payload: messagesList,
                    type: MESSAGES_GET_SUCCESS
                });
            } else {
                dispatch({
                    payload: [],
                    type: MESSAGES_GET_SUCCESS
                });
            }
        });
    }
}
