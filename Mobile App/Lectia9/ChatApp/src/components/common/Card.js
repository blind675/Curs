import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={[styles.cardStyle , props.style]} >
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 0.1,
        borderRadius: 8,
        borderColor: '#A8A8A8',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: 6,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { Card };
