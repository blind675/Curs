import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';

import { Card } from './Card';

const ToDoCard = (props) => {
    return (
        <Card style={{
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }}>
            <Image
                source={
                    props.selected ?
                        require('../../resources/img/check-box.png') :
                        require('../../resources/img/check-box-empty.png')
                }
                style={{
                    width: 30,
                    height: 30,
                    margin: 8,
                    tintColor: props.selected ? '#6F6F6F' : '#0F0F0F'
                }}
            />
            <Text style={
                props.selected ? styles.selectedText : styles.normalText
            }
            >{props.title}</Text>
        </Card>);
}

const styles = StyleSheet.create({
    normalText: {
        color: '#0F0F0F',
        fontSize: 16,
    },
    selectedText: {
        color: '#6F6F6F',
        fontSize: 16
    }
});

export { ToDoCard };
