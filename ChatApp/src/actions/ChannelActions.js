export const getChannels = () => {
    return (dispatch) => {
        firebase.database().ref(`/channels`)
            .on('value', (snapshot) => {
                const channels = snapshot.val();
                if (channels) {
                    // save profile local
                    // saveProfile(profile);
                    console.log('channels: ', channels);
                    dispatch({
                        payload: profile,
                        type: CHANNELS_GET_SUCCESS
                    });
                }
            });
    }
}