// rnfe -- create react native component
// rafce -- create react component


//safeareaview works in ios ..padding in android
import { View, Text, SafeAreaView, StatusBar,Platform} from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
// const Main = () => {
//   return (
//     <View style={{paddingVertical: Platform.OS==="android"?40:0}}>
//       <SafeAreaView>
//         <Text>Main</Text>
//         </SafeAreaView>  
//     </View>
//   )
// }

const Stack=createNativeStackNavigator()

const Main = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home}/>  
        </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
}


export default Main;