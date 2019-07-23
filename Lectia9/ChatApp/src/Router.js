import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import ChatScreen from './components/ChatScreen';
import LoadingScreen from './components/LoadingScreen';

const StackNavigator = createStackNavigator({
    ChannelPage: MainScreen,
    ChatPage: ChatScreen,
});

const SwitchNavigator = createSwitchNavigator({
    Loading: LoadingScreen,
    Login: LoginScreen,
    Main:  StackNavigator,
});

export const Router = createAppContainer(SwitchNavigator);