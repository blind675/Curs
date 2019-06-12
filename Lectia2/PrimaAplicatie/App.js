import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={styles.container}
      >
        <View
          style={[styles.patratel, { backgroundColor: 'red' }]}
        />
        <View
          style={[styles.patratel, { backgroundColor: 'blue' }]}
        />
        <View
          style={[styles.patratel, { backgroundColor: 'yellow' }]}
        />
        <View
          style={[styles.patratel, { backgroundColor: 'green' }]}
        />

      </View>
      <Text style={styles.text}> Prima mea aplicatie cu React Native </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  patratel: {
    width: 99,
    height: 99
  },
  text: {
    marginTop: 32,
    color: '#0F0F0F',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center'
  },  
});

export default App;
