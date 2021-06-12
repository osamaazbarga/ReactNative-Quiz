import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native'
import { getData } from '../components/Utiletis'

import { NavigationContainer } from '@react-navigation/native';
import Quiz from './Quiz';

const QuizPage = ({navigation,route}) => {
    useEffect(() => {
        startQuiz();
    }, [])


    const [quizList, setQuizList] = useState([])
    const [indexQuiz, setIndexQuiz] = useState(0)
    const startQuiz = () => {

        run()
    }

    const run = async () => {
        const data = await getData();
        setQuizList(data)
    }
    return (

        <View style={styles.container}>
            {quizList.length === 0 ? <View><ActivityIndicator size="large" /></View> : <Quiz quiz={quizList[indexQuiz]} setNextQuestion={setIndexQuiz} index={indexQuiz} route={route} navigation={navigation}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});

export default QuizPage
