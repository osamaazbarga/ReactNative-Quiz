import React from 'react'

import Home from '../screen/Home'

import {createStackNavigator} from '@react-navigation/stack'
import QuizPage from '../screen/QuizPage'
import PlayersTable from '../screen/PlayersTable'
const Stack=createStackNavigator();
const screenOptionStyle={
    headerStyle:{
        backgroundColor:'red'
    },
    headerTintColor:'white',
    headerTitleStyle:{
        fontWeight:'bold'
    }
}
const PlayersTableStack=()=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Playerstable"
                component={PlayersTable}         
             />
        </Stack.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Home"
                component={Home}
                
                
             />

            <Stack.Screen
                name="Quizpage"
                component={QuizPage}

             />
        </Stack.Navigator>
    )
}

export {HomeStack,PlayersTableStack}
