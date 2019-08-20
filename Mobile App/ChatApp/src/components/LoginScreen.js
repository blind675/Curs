import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from '../actions';
import { Button } from './common/Button';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: 'https://api.adorable.io/avatars/180',
            userEmail: null,
            userPassword: null,
            loading: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user && nextProps.user.email) {
            this.props.navigation.navigate('Main');
        }
    }

    pressOnLoginButton() {
        if (this.state.userEmail !== null && this.state.userPassword !== null) {
            const userObject = {
                userAvatar: `https://api.adorable.io/avatars/180/${this.state.userEmail}`,
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword,
            };

            this.setState({
                loading: true
            });

            firebase.auth()
                .signInWithEmailAndPassword(userObject.userEmail, userObject.userPassword)
                .then((user) => {
                    const newProfileUid = user.user.uid;
                    console.log('- Found user With ID: ', newProfileUid);

                    this.props.saveUser(newProfileUid, this.state.userEmail);

                    this.setState({
                        loading: false
                    });
                })
                .catch((loginError) => {
                    console.log('error:', loginError);

                    firebase.auth()
                        .createUserWithEmailAndPassword(userObject.userEmail, userObject.userPassword)
                        .then((newUser) => {
                            const newProfileUid = newUser.user.uid;
                            console.log('- Creating auth user found with ID: ', newProfileUid);

                            this.props.saveUser(newProfileUid, this.state.userEmail);

                            this.setState({
                                loading: false
                            });
                        })
                        .catch((createError) => {
                            console.log('error:', createError);

                            this.setState({
                                loading: false
                            });
                        });
                });
        }
    }

    renderButton() {
        if (this.state.loading === false) {
            return (
                <Button
                    style={{ marginTop: 32 }}
                    title={'Login'}
                    onPress={this.pressOnLoginButton.bind(this)}
                />
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
                    editable
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
                    editable
                    autoCorrect={false}
                    maxLength={40}
                    placeholder={'Password'}
                    secureTextEntry
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

const mapStateToProps = state => ({
    user: state.user,
    channels: state.channels,
});

export default connect(mapStateToProps, actions)(LoginScreen);
