import React, { useEffect, useRef, useState } from 'react';
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { generateToken, getRandomName, randomId } from './util';


const App = () => {
  const myMeet=useRef("");
  const[token,setToken]=useState("");
  useEffect(()=>{
    const fetchData=async()=>{
      const {token}=await generateToken(randomId(5),"3423",getRandomName())
      setToken(token)
    }
    fetchData();
  },[])
  useEffect(()=>{
    if(token,myMeet.current){
      const initiate=ZegoUIKitPrebuilt.create(token);
      initiate.joinRoom({
        container:myMeet.current
        

      })
    }
  },[token,myMeet.current])
  return (
    <div>
      <div ref={myMeet} id="meet">
        <h1>sd</h1>
      </div>
    </div>
  )
}

export default App