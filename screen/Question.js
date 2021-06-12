import React,{useState} from 'react'
import { View, Text ,Button} from 'react-native'
import Questionbtn from '../components/QuizButton'

const Question = ({question,next}) => {
    const [quiz,setQuiz]=useState(question)
    const [answer,setAnswer]=useState([])

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
    const onClick=(ans)=>{
        console.log("qustion check"+ans)
        if(ans===quiz.correct_answer)
            next(true)
        else next(false)
    }



    return (
        <View>
            {
                // console.log(onClick)
            }
            {
                <Text>{quiz.question}</Text>
                
            }
            {
                randomanswer().map((btn,i)=>{
                    // console.log(btn)
                    return <Button key={i} title={btn} onPress={()=>onClick(btn)}/>
                    // onPress={()=>onClick(btn)}
                    // return <Questionbtn key={i} answer={btn} onPress={()=>console.log()}/>
                })
            }
        </View>
    )
}

export default Question
