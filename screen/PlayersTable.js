import React from 'react'
import { View, Text,FlatList,TouchableOpacity,StyleSheet } from 'react-native'
import { getPlayerList } from '../components/Utiletis'

const PlayersTable = () => {
    return (
        <View>
            <FlatList
                data={getPlayerList()}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.item}>
                        <Text>UserName : {item.username}</Text>
                        <Text>Score : {item.score}</Text>
                    </TouchableOpacity>
                    
                )}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        padding:30
    },
    item:{
        padding:15,
        borderColor:'black',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
        borderStyle:'dashed',
        flex:1,
        justifyContent:'space-between'
    }
})

export default PlayersTable
