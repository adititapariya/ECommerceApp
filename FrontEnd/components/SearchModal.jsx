import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles'

const SearchModal = ({
    searchQuery,
    setActiveSearch,
    setSearchQuery,
    products=[],
    }) => {

const navigate =useNavigation()

  return (
    <View style={
        {
            width:"100%",
            height:"100%",
            position:"absolute",
            top:0,
            zIndex: 100,
            backgroundColor: colors.color2,
            padding:35,
            paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0
        }
    }>
      <Text>SearchModal</Text>
    </View>
  )
}

export default SearchModal;