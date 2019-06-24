import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

import { Button } from './common/Button';

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAvatar: 'https://api.adorable.io/avatars/180',
            userName: null,
            userPassword: null,
        }

    }

    pressOnLoginButton() {

        // console.log(' userAvatar   : ', this.state.userAvatar);
        // console.log(' userName     : ', this.state.userName);
        // console.log(' userPassword : ', this.state.userPassword);

        alert(' Pressed on Login');
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    style={{
                        height: 180,
                        width: 180,
                        borderColor: '#0F0F0F',
                        borderWidth: 1,
                        marginBottom: 16
                    }}
                    source={{uri: this.state.userAvatar, cache: 'reload'}}
                />
                <TextInput
                    style={styles.textInputStyle}
                    editable={true}
                    autoCorrect={false}
                    maxLength={40}
                    placeholder={'User Name'}
                    onChangeText={(text)=> this.setState({
                        userAvatar: `https://api.adorable.io/avatars/180/${text}`,
                        userName: text
                    })}
                    value={this.state.userName}
                />
                <TextInput
                    style={styles.textInputStyle}
                    editable={true}
                    autoCorrect={false}
                    maxLength={40}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(text)=> this.setState({userPassword: text})}
                    value={this.state.userPassword}
                />
                <Button
                    style={{ marginTop: 32 }}
                    title={'Login'}
                    onPress={this.pressOnLoginButton.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderBottomColor: '#0F0F0F',
        borderBottomWidth: 0.5,
        margin: 16,
        height: 35,
        width: 200,
    }
});

export default LoginScreen;
