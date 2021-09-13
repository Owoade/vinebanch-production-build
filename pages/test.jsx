import  { useState } from 'react'
import InputEmoji from 'react-input-emoji'
const test =()=>{
  const api= async ()=>{
    try{
      const res= await fetch('https://jsonplaceholdr.typicode.com/comments');
      const data = res.json();
      const feed = await res.ok ? "The fetch went fine " : "There was an error with the fetch";
      console.log(data);
    }catch(error){
      console.log(error)
    }
  
  }
  api();
  return(
   <h1>This is a test page</h1>
  )
   
         

          
        

      
    
}
export default test;