import React,{useState} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { PlayersTableStack } from './MyStack'
import { MyTab } from './MyTab'

const MyDrawer = () => {
    const Drawer=createDrawerNavigator()

    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={MyTab}/>
            <Drawer.Screen name="Playerstable" component={PlayersTableStack}/>
        </Drawer.Navigator>
    )
}

export default MyDrawer
