import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
export async function getData(){
    let res=await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    return await res.data.results
}

// const [players,setPlayers]=useState("osama")
let players=[]

export const getPlayerList=()=>{
    return players
}


export const setPlayerInList=(username,score)=>{
    players.push({username,score})
}





