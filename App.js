
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from './screen/Quiz';
import { getData } from './components/Utiletis'
import Mystack from './routes/MyStack';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './routes/MyDrawer';


export default function App() {
  // useEffect(() => {
  //   startQuiz();
  // }, [])


  // const [quizList, setQuizList] = useState([])

  // const [loading, setLoading] = useState(false)
  // const [gameOver, setGameOver] = useState(true)
  // const [totalScore, setTotalScore] = useState(0)
  // const [indexQuiz, setIndexQuiz] = useState(0)



  // const startQuiz = () => {
  //   setLoading(true)
  //   setGameOver(false)
  //   run()
  // }

  // async function run() {
  //     const data = await getData();
  //     console.log(data); // will print your data
  // }
  // const run = async () => {
  //   const data = await getData();
  //   setQuizList(data)
  // }
  const [players,setPlayers]=useState([])

  return (
    // <View style={styles.container}>
    //   {quizList.length === 0 ? <Text>Loading</Text>  :<Quiz quiz={quizList[indexQuiz]} setNextQuestion={setIndexQuiz} index={indexQuiz} />}
    // </View>
    <NavigationContainer>

        <MyDrawer/>

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
