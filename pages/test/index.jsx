import {useState,useEffect} from 'react'
const test =()=>{

const [feedback, setFeed]=useState(false);
    const post = async ()=>{
        // const post =await fetch('https://vb-backend.herokuapp.com/add-post',{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify({title:"hello world",body:"This is a test from anu",url:"Great is thy faithfulness"})
        // })
        const res = await fetch('https://vb-backend.herokuapp.com/fetch-stream')
        const data = res.json();

      console.log(data);
    }
    return (
        <>
        <h1>This is a test page</h1>
        <button onClick={post}>post Dvotion</button>
        </>
    )
}
export default test;