import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Transaction extends React.Component{
  render(){
    return(
      <View style={{ backgroundColor:'teal',flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>transaction screen </Text>
      </View>
    )
  }
}