import React, { Component } from 'react';
import { View, TextInput, Button, TouchableOpacity, FlatList, KeyboardAvoidingView, Keyboard } from 'react-native';

import { ToDoCard } from './common/ToDoCard';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textImputValue: '',
            toDoList: [
                { id: 1, title: 'Invata React Native', done: true },
                { id: 2, title: 'Plimba cainele', done: true },
                { id: 3, title: 'Fa curat in camera', done: false },
            ],
        };
    }

    renderToDoList() {
        let theList = [];
        theList = this.state.toDoList.map((toDoElement) => {
            return (
                < TouchableOpacity
                    key={toDoElement.id}
                    onPress={() => {
                        let index = this.state.toDoList.findIndex(element => element.id === toDoElement.id);

                        this.state.toDoList[index] = {
                            id: this.state.toDoList[index].id,
                            title: this.state.toDoList[index].title,
                            done: !this.state.toDoList[index].done
                        };

                        this.forceUpdate()
                        // this.setState({ toDoList: this.state.toDoList,});
                    }}
                >
                    <ToDoCard title={toDoElement.title} done={toDoElement.done} />
                </TouchableOpacity>
            );
        });

        return (theList);
    }

    adaugaButtonPressed() {
        Keyboard.dismiss()

        let newTask = {
            id: this.state.toDoList.length + 1,
            title: this.state.textImputValue,
            done: false
        }

        this.setState(
            {
                toDoList: [...this.state.toDoList, newTask],
                textImputValue: ''
            }
        );
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginVertical: 30,
                marginTop: 60
            }}>
                <FlatList
                    data={this.state.toDoList}
                    extraData={this.state}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) =>
                        < TouchableOpacity
                            onPress={() => {
                                let index = this.state.toDoList.findIndex(element => element.id === item.id);

                                this.state.toDoList[index] = {
                                    id: this.state.toDoList[index].id,
                                    title: this.state.toDoList[index].title,
                                    done: !this.state.toDoList[index].done
                                };

                                this.setState({ toDoList: this.state.toDoList,});
                            }}
                        >
                            <ToDoCard title={item.title} done={item.done} />
                        </TouchableOpacity>
                    }
                />
                <View style={{ flex: 1 }} />
                <KeyboardAvoidingView
                    behavior='padding'
                    enabled={true}
                    keyboardVerticalOffset={30}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginHorizontal: 16,
                            marginBottom: 32
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
                            placeholder={'Adauga un task'}
                            onChangeText={(text) => this.setState({ textImputValue: text })}
                            value={this.state.textImputValue}
                        />
                        <Button
                            //TODO: componenta de buton
                            title={'Adauga'}
                            onPress={this.adaugaButtonPressed.bind(this)} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default MainScreen;
