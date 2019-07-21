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
        }
    }

    pressOnLoginButton() {
        if (this.state.userEmail !== null && this.state.userPassword !== null) {
            const userObject = {
                userAvatar: `https://api.adorable.io/avatars/180/${this.state.userEmail}`,
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword,
            }

            firebase.auth().signInWithEmailAndPassword(userObject.userEmail, userObject.userPassword)
                .then((existingUser) => {
                    const profileUid = existingUser.user.uid;
                    console.log('- Auth user found with ID: ', profileUid);
                    // TODO: save userId and email to user defaults

                    this.props.getProfile(profileUid);
                })
                .catch((error) => {
                    console.log('- Login error: ', error);
                    firebase.auth().createUserWithEmailAndPassword(userObject.userEmail, userObject.userPassword)
                        .then((newUser) => {
                            // TODO: save userId and email to user defaults
                            // make a method for this

                            console.log(' Current user: ', firebase.auth().currentUser);

                            const newProfileUid = newUser.user.uid;
                            console.log('- Creating auth user found with ID: ', newProfileUid);
                            this.props.createProfile(newProfileUid, this.state.userEmail);


                        })
                        .catch((createError) => {
                            console.log('error:', createError);
                        });
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.props.navigation.navigate('Main');
        }
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

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, actions)(LoginScreen);
