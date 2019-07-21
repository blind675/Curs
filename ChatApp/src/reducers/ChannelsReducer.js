import { 
    CHANNEL_CREATE_SUCCESS, 
    CHANNELS_GET_SUCCESS,
    CHANNEL_FAIL 
} from "../actions/types";

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANNEL_CREATE_SUCCESS:
            return action.payload;
        case CHANNELS_GET_SUCCESS:
            return action.payload;
        case CHANNEL_FAIL:
            return null;
        default:
            return state;
    }
};