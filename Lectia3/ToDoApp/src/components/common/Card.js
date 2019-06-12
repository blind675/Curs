import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = () => {
    return (<View style={styles.cardStyle} />);
};

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        borderWidth: 0.1,
        borderRadius: 8,
        borderColor: '#A8A8A8',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: 6,
        backgroundColor: '#FFFFFF',
    }
})

export { Card };
