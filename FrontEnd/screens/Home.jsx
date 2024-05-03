//rnfe

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {defaultStyle,colors} from '../styles/styles'
import Header from "../components/Header";
import {Avatar} from "react-native-paper";

const Home = () => {
  return (
    // <View style={{...defaultStyle, flex:0}}>
    <View style={defaultStyle}>
      <Header/>
      <View style={{
        paddingTop:70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
          {/*Heading */}
        <View>
          <Text style={{fontSize:25}}>Our</Text>
          <Text style={{fontSize:25, fontWeight:"900"}}>Products</Text>
        </View>
        {/*Search Bar*/}
        <View>
          <TouchableOpacity>
            <Avatar.Icon 
            icon={"magnify"}
            size={50} 
            color={"gray"} 
            style={{backgroundColor:colors.color2, elevation: 12}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Home;