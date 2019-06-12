import React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from './src/components/common/Card';
import { ToDoCard } from './src/components/common/ToDoCard';

const App = () => {
  return (
    <View style={{
      flex: 1,
      marginVertical: 30,
      marginTop: 60
    }}>
      <ToDoCard title={'Invata React Native'} selected={true}/>
      <ToDoCard title={'Plimba cainele'} selected={false}/>
      <ToDoCard title={'Fa curat in camera'} />
      <ToDoCard title={'Cumparaturi'} selected={true}/>
      <ToDoCard title={'Fa curat in carduri'} />
    </View>
  );
};

export default App;
