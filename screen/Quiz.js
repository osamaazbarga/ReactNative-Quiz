import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { getPlayerList, setPlayerInList } from '../components/Utiletis'



const Quiz = ({navigation,quiz, setNextQuestion, index,route}) => {
    
    const [totalScore, setTotalScore] = useState(0)
    const goToHome=()=>{
        navigation.pop()
    }
    
    const nextquestion = (answer) => {
        if(answer===quiz.correct_answer)
        {
            setTotalScore(totalScore + 10)
        }

        if (index === quiz.length - 1) {
            console.log(totalScore)
        }
        setNextQuestion(index + 1)
    }
    const randomanswer=()=>{
        let arr=[quiz.correct_answer,quiz.incorrect_answers[0],quiz.incorrect_answers[1],quiz.incorrect_answers[2]]
        for (let i = 0; i < arr.length; i++) {
            let rand=Math.floor(Math.random()*arr.length)
            let temp=arr[i]
            arr[i]=arr[rand]
            arr[rand]=temp
            
        }
        return arr;

    }
    

    const result=()=>{
        setPlayerInList(route.params,totalScore)
        console.log(getPlayerList())
        return (
            <View>
                <Text style={styles.text}>Total Score : {totalScore}</Text>
                <Button title="Home" onPress={goToHome}/>
            </View>
        )
    }





    return (

        <View>

            {
                // console.log(route.params)
            }

            {
                quiz.length === 0 ? <Text>loading</Text> : index == 9 ? result() : (
                    <View>
                        <Text>{quiz.question}</Text>
                        
                        {
                            randomanswer().map((btn,i)=>{
                                return <Button key={i} title={btn} onPress={() => nextquestion(btn)}/>
                            })
                        }

                    </View>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    item: {
        padding: 15,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderStyle: 'dashed',
        
    },
    text: {
        fontSize:25
    }
    
})

export default Quiz
