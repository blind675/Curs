import { 
    USER_CREATE_GET_SUCCESS, 
    USER_CREATE_GET_FAIL 
} from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CREATE_GET_SUCCESS:
            return action.payload;
        case USER_CREATE_GET_FAIL:
            return {};
        default:
            return state;
    }
};
