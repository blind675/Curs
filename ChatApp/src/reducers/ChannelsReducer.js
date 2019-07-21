import { 
    CHANNELS_GET_SUCCESS,
    CHANNEL_CREATE_ERROR
} from "../actions/types";

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANNELS_GET_SUCCESS:
            return action.payload;
        case CHANNEL_CREATE_ERROR:
            return state;
        default:
            return state;
    }
};