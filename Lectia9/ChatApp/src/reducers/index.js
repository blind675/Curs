import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import ChannelsReducer from './ChannelsReducer';
import MessagesReducer from './MessagesReducer';

export default combineReducers({
    user: UserReducer,
    channels: ChannelsReducer,
    messages: MessagesReducer
});
