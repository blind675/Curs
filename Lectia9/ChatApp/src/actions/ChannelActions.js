import firebase from 'firebase';
import _ from 'lodash';

import {
    CHANNELS_GET_SUCCESS,
    CHANNEL_CREATE_ERROR,
} from "./types";

export const addChannel = (channelName) => {
    return (dispatch) => {
        firebase.database().ref('channels').push({
            name: channelName,
            messages: [],
            createdDate: Date.now()
        }).then((newPayload) => {
            // console.log('create channel ok: ', newPayload);
            // this will trigger the get channels so no dispatch needed
        }).catch((error) => {
            console.log('create channel error: ', error);
            dispatch({
                payload: [],
                type: CHANNEL_CREATE_ERROR
            });
        });
    }
};

export const getChannels = () => {
    return (dispatch) => {
        firebase.database().ref('channels').on('value', (snapshot) => {
            const channels = snapshot.val();
            if (channels) {

                const channelsList = _.map(channels, (val, uid) => {
                    return { ...val, uid };
                });
                dispatch({
                    payload: channelsList,
                    type: CHANNELS_GET_SUCCESS
                });
            } else {
                dispatch({
                    payload: [],
                    type: CHANNELS_GET_SUCCESS
                });
            }
        });
    }
}
