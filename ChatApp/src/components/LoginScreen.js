import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from '../actions';
import { Button } from './common/Button';

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAvatar: 'https://api.adorable.io/avatars/180',
            userEmail: null,
            userPassword: null,
            loading: false
        }
    }

    pressOnLoginButton() {
        if (this.state.userEmail !== null && this.state.userPassword !== null) {
            const userObject = {
                userAvatar: `https://api.adorable.io/avatars/180/${this.state.userEmail}`,
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword,
            }

            this.setState({
                loading: true
            })

            firebase.auth().createUserWithEmailAndPassword(userObject.userEmail, userObject.userPassword)
                .then((newUser) => {
                    const newProfileUid = newUser.user.uid;
                    console.log('- Creating auth user found with ID: ', newProfileUid);

                    this.props.saveUser(newProfileUid, this.state.userEmail);
                    
                    this.setState({
                        loading: false
                    })
                })
                .catch((createError) => {
                    console.log('error:', createError);

                    this.setState({
                        loading: false
                    })
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.channels) {
            this.props.navigation.navigate('Main');
        } else if (nextProps.user) {
            // we have a user
            if (nextProps.user.email) {
                this.props.getChannels();
            } else {
                this.props.navigation.navigate('Login');
            }
        }
    }

    renderButton() {
        if (this.state.loading === false) {
            return (
                <Button
                    style={{ marginTop: 32 }}
                    title={'Login'}
                    onPress={this.pressOnLoginButton.bind(this)} />
            );
        }

        return (<View style={{ marginTop: 32 }} />);
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
                    source={{ uri: this.state.userAvatar }}
                />
                <TextInput
                    style={styles.textInputStyle}
                    editable={true}
                    autoCorrect={false}
                    maxLength={40}
                    placeholder={'User Email'}
                    onChangeText={(text) => this.setState({
                        userAvatar: `https://api.adorable.io/avatars/180/${text}`,
                        userEmail: text
                    })}
                    value={this.state.userEmail}
                />
                <TextInput
                    style={styles.textInputStyle}
                    editable={true}
                    autoCorrect={false}
                    maxLength={40}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ userPassword: text })}
                    value={this.state.userPassword}
                />
                {/* render button only if this.state.loading === false */}
                {this.renderButton()}
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

const mapStateToProps = state => {
    return {
        user: state.user,
        channels: state.channels,
    };
};

export default connect(mapStateToProps, actions)(LoginScreen);
