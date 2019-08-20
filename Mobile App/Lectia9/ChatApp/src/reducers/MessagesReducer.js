import { 
    MESSAGES_GET_SUCCESS,
    MESSAGE_CREATE_ERROR
} from "../actions/types";

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MESSAGES_GET_SUCCESS:
            return action.payload;
        case MESSAGE_CREATE_ERROR:
            return state;
        default:
            return state;
    }
};