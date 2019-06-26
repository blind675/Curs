import { 
    USER_CREATE_LOGIN_SUCCESS, 
    USER_CREATE_LOGIN_FAIL 
} from "../actions/types";

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CREATE_LOGIN_SUCCESS:
            return {
                userName: action.payload.userName,
            };
        case USER_CREATE_LOGIN_FAIL:
            return null;
        default:
            return state;
    }
};
