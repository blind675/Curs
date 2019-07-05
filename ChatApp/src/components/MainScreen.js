import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common/Button';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newChannelName: '',
            channelsList: [{
                id: 0,
                name: '#random',
            },
            {
                id: 1,
                name: '#general',
            }]
        }
    }

    addButtonPressed() {
        Keyboard.dismiss()

        const newChannel = {
            id: this.state.channelsList.length,
            name: `#${this.state.newChannelName}`
        }

        this.setState(
            {
                channelsList: [...this.state.channelsList, newChannel],
                newChannelName: ''
            }
        );
    }

    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 16,
                        paddingBottom: 16,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1
                    }}
                >
                    <Image
                        style={{
                            height: 80,
                            width: 80,
                            marginHorizontal: 16,
                            borderWidth: 1,
                        }}
                        source={{uri: `https://api.adorable.io/avatars/80/${this.props.user.userEmail }`}}
                    />
                    <Text
                        style={{
                            marginVertical: 8,
                            fontSize: 20,
                            color: '#0F0F0F'
                        }}> {this.props.user.userEmail} </Text>
                </View>
                <FlatList
                    style={{
                        flex: 1,
                    }}
                    data={this.state.channelsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) =>
                        < TouchableOpacity
                            style={{
                                height: 45,
                                marginHorizontal: 16,
                                flex: 1,
                                justifyContent: 'center',
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('ChatPage');
                            }}
                        >
                            <Text style={{ fontSize: 16 }}> {item.name}</Text>
                        </TouchableOpacity>
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
                        placeholder={'Adauga un canal'}
                        onChangeText={(text) => this.setState({ newChannelName: text })}
                        value={this.state.newChannelName}
                    />
                    <Button
                        style={{ width: 80 }}
                        title={'Adauga'}
                        onPress={this.addButtonPressed.bind(this)}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(MainScreen);
