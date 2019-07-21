import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import ChannelsReducer from './ChannelsReducer';

export default combineReducers({
    user: UserReducer,
    channels: ChannelsReducer,
    // messages: null,
});
