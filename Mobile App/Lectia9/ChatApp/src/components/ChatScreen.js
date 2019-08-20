import React, { Component } from 'react';
import { View, FlatList, Text, TextInput, KeyboardAvoidingView, Image, Keyboard } from 'react-native';

import { connect } from 'react-redux';

import * as actions from '../actions';
import { Button } from './common/Button';
import { Card } from './common/Card';

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: props.navigation.getParam('channel', {}),
            newMessage: '',
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('header', '#')
    });

    newMessageButtonPressed() {
        Keyboard.dismiss()

        this.props.addMessageInChannel(this.state.channel, this.state.newMessage);
        this.setState({newMessage: ''});
    }

    componentWillMount() {
        this.props.getMessages(this.state.channel)
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}
            >
                <FlatList
                    style={{
                        flex: 1,
                    }}
                    data={this.props.messages}
                    keyExtractor={(item) => `${item.uid}`}
                    renderItem={({ item }) =>
                        <Card
                            style={{
                                flex: 1,
                                padding: 16,
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'stretch',
                            }}>
                                <Image
                                    style={{
                                        height: 30,
                                        width: 30,
                                        borderColor: '#0F0F0F',
                                        borderWidth: 1
                                    }}
                                    source={{ uri: `https://api.adorable.io/avatars/30/${item.author.email}` }}
                                />
                                <Text style={{
                                    fontSize: 14,
                                    margin: 4
                                }} > {item.author.email} </Text>
                            </View>
                            <Text style={{
                                marginTop: 4,
                                alignSelf: 'stretch',
                                fontSize: 16
                            }}> {item.message}</Text>
                        </Card>
                    }
                />
                <KeyboardAvoidingView
                    behavior='padding'
                    enabled={true}
                    keyboardVerticalOffset={10}
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 16,
                        marginBottom: 40,
                        marginTop: 16
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            borderBottomColor: '#0F0F0F',
                            borderBottomWidth: 0.5,
                            marginRight: 8
                        }}
                        editable={true}
                        maxLength={40}
                        placeholder={'Mesajul tau'}
                        onChangeText={(text) => this.setState({ newMessage: text })}
                        value={this.state.newMessage}
                    />
                    <Button
                        style={{ width: 80 }}
                        title={'Trimite'}
                        onPress={this.newMessageButtonPressed.bind(this)}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps, actions)(ChatScreen);
