import React, { Component } from 'react';
import { View, FlatList, Text, TextInput, KeyboardAvoidingView, Image } from 'react-native';

import { Button } from './common/Button';
import { Card } from './common/Card';

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                id: 0,
                message: 'Pimul mesaj de test, Lorem ipsul, lorem ipsum, text cat mai lung',
                author: {
                    id: 12,
                    userEmail: 'Bob',
                    userAvatar: 'https://api.adorable.io/avatars/30/Bob'
                }
            },
            {
                id: 1,
                message: 'Mesaj nr.2, scurt',
                author: {
                    id: 2,
                    userEmail: 'Gaby',
                    userAvatar: 'https://api.adorable.io/avatars/30/Gaby'
                }
            }],
            newMessage: '',
        }
    }

    static navigationOptions = ({navigations}) =>({
        title: '#random'
    });

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
                    data={this.state.messages}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) =>
                        <Card
                            style={{
                                flex:1,
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
                                    source={{ uri: item.author.userAvatar }}
                                />
                                <Text style={{
                                    fontSize: 14,
                                    margin: 4
                                }} > {item.author.userEmail} </Text>
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
                    // onChangeText={(text) => this.setState({ newChannelName: text })}
                    // value={this.state.newChannelName}
                    />
                    <Button
                        style={{ width: 80 }}
                        title={'Adauga'}
                    // onPress={this.adaugaButtonPressed.bind(this)}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default ChatScreen;
