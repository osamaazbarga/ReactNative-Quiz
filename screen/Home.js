import React,{useState} from 'react'
import { View, Text,TextInput ,TouchableOpacity,StyleSheet} from 'react-native'
import { getPlayerList } from '../components/Utiletis'



const Home = ({navigation,route}) => {
    const [players,setPlayers]=useState([])
    const [userName,setUserName]=useState('')
    const changeHandler=(val)=>{
        setUserName(val)
    }
    const setPlayerInList=(player)=>{
        if(players==[]){
            setPlayers(player)
        }
        else {
            setPlayers([...players,player])
        }
    }

    return (
        <View style={styles.container}>
            {
               
            }
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={changeHandler}
            />
            
            <TouchableOpacity onPress={()=>navigation.navigate("Quizpage",userName)}><Text style={styles.btn}>START</Text></TouchableOpacity>
            
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        margin:10,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    container:{
        padding:30
    },
    btn:{
        backgroundColor:"#A2B6AE",
        width:100,
        padding:10,
        textAlign:"center",
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'auto',
        marginRight:'auto'
    }
})

export default Home
