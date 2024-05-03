//rnfe

import {View, Text, TouchableOpacity,ScrollView, useAnimatedValue } from 'react-native';
import React, { useState } from 'react';
import {defaultStyle,colors} from '../styles/styles'
import Header from "../components/Header";
import {Avatar} from "react-native-paper";
import { Button } from 'react-native-paper';

const Home = () => {

const categories=[{category:"Nice", _id:"sdnjskad"},
{category:"Nice2", _id:"ksjdbhsb"},
{category:"Nice3", _id:"jhsdbhsb"},
{category:"Nice4", _id:"jdbhsb"},
{category:"Nice5", _id:"sjjb"},
{category:"Nice6", _id:"bhsb"},
{category:"Nice7", _id:"jjsbdjkkbjs"}
];

const[category,setCategory]=useState("")
const categoryButtonHandler=(id)=>{
  setCategory(id);
};
  console.log(category);
  return (
    // <View style={{...defaultStyle, flex:0}}>
    <View style={defaultStyle}>
      <Header/>

      {/* Heading Row */}
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

      {/*Categories*/}
      <View style={{
        flexDirection: "row",
        height: 80,
      }}
      >
      <ScrollView horizontal contentContainerStyle={{
        alignItems:"center",
      }} showsHorizontalScrollIndicator={false} >
      {
          categories.map((item,index)=>(
          <Button
            key={item._id}
            style={{
            backgroundColor:category===item._id?colors.color1 :colors.color5,
            borderRadius: 100,
            margin: 5,
          }}
          onPress={()=>categoryButtonHandler(item._id)}
          >
            <Text style={{
              fontSize: 12,
              color:category===item._id ?colors.color2:"gray",
            }}
            >
              {item.category}</Text>
          </Button>))
        }
      </ScrollView>
      </View>
        {/*Products*/}
  
      
    </View>
  )
}

export default Home;