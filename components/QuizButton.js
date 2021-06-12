import React from 'react'
import { View, Text,Button,rect } from 'react-native'
import {rectButton} from 'react-native-gesture-handler'

const QuizButton = ({answer}) => {
    // onClick=(e)=>{
    //     console.log("target"+e.target.innerText);
    //     onClick(e.target.innerText);
    // }
    return (
        <View>
            {/* <Text></Text> */}
            <Button title={answer}/>
        </View>
    )
}

export default QuizButton
