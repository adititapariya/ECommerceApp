//rnfe

import { View, Text } from 'react-native';
import React from 'react';
import {defaultStyle} from '../styles/styles'
import Header from "../components/Header";

const Home = () => {
  return (
    <View style={defaultStyle}>
      <Header/>
      <View>
        <Text style={{fontSize:25}}>Our</Text>
        <Text style={{fontSize:25, fontWeight:"900"}}>Products</Text>
      </View>
      
    </View>
  )
}

export default Home;