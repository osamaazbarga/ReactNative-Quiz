import React,{useState} from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { HomeStack,PlayersTableStack } from './MyStack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const MyTab = ({route}) => {

    const Tab=createBottomTabNavigator()

   
    return (
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon: ({focused,color,size})=>{
                let iconName
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                }
                if (route.name==='Playerstable'){
                    iconName = focused ? 'account-group' : 'account-group-outline';

                }
                return (
                    <MaterialCommunityIcons
                        name={iconName}
                        size={size}
                        color={color}
                    />
                );

            },
        })}
        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray',
        }}>
            {
               
            }
            <Tab.Screen   
               name="Home" 
                component={HomeStack}
                // initialParams={{setPlayers:setPlayers}}
                
            />
            <Tab.Screen name="Playerstable" component={PlayersTableStack}/>

        </Tab.Navigator>
    )
}

