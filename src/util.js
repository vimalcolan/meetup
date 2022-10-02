import axios from 'axios';

export function generateToken(userID,roomID,userName){
return fetch(`https:\\choui-prebuilt.herokuapp.com/access_token?userID=${userID}&userName=${userName}&roomID=${roomID}&expired_ts=7200`).then(res=>res.json())
}

export function randomId(length){
    let result="";
    if(result) return result;
    var chars="1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var maxPos=chars.length;
    length=length||5;
    for(let i=0;i<length;i++){
        result+=chars.charAt(Math.floor(Math.random()*maxPos));
    }
    console.log(result)
    return result;
}

export function getRandomName(){
    var names=["vimal","kamal","arun","karthik"];
    return names[Math.round(Math.random()*names.length)]
}