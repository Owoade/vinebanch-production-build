
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'

const devotional = () => {
  const router = useRouter();
 const [verse_first,setFirstVerse]=useState();
 const [verse_two,setSecVerse]=useState();
const [paragraph_1,setPar_1]=useState();
const [paragraph_2,setPar_2]=useState();
const [title,setTitle]=useState();
const [image,setImage]=useState();
const [prayer,setPrayer]=useState();
const  dev_details={
  title,
  verse_first,
  paragraph_1,
  verse_two,
  paragraph_2,
  prayer,
  image,
  date:`${new Date().toDateString()}`
       
}
const sendBlog=()=>{
  if(paragraph_1 !='' && title !='' ){
    fetch(`http://my-json-server.typicode.com/Owoade/vinebranch/devotions/`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(dev_details)
  }).then(router.push('/admin/panel'))
  }else alert('Add a title and paragraph')
 
}

    return ( 
         <div className="edittor-container">
      <div className="edittor-wrapper">
      <div className="control-container">
       <span ><i className="ri-add-circle-line"></i> Add new paragraph</span>
       <span onClick={sendBlog}><i className="ri-send-plane-2-fill"></i> Post Devotion</span>
      </div>
      <div className="dev-edittor">
        <textarea placeholder="Devotion Title" className="title" onChange={(e)=>{setTitle(e.target.value)}} value={title}></textarea>
        <input type="text"  placeholder="Image link" onChange={(e)=>{setImage(e.target.value)}} value={image}  />
        <img src={image} alt=""/>
        <input type="text" placeholder="Morning verse" onChange={(e)=>{setFirstVerse(e.target.value)}} value={verse_first}  />
        <textarea placeholder="Write Something  cool..." className="paragraph" onChange={(e)=>{setPar_1(e.target.value)}} value={paragraph_1}></textarea>
        <input type="text" placeholder="Evening verse" onChange={(e)=>{setSecVerse(e.target.value)}} value={verse_two}  />
        <textarea placeholder="Write Something  cool..." className="paragraph" onChange={(e)=>{setPar_2(e.target.value)}} value={paragraph_2}></textarea>
        <input type="text" placeholder="Prayer" onChange={(e)=>{setPrayer(e.target.value)}} value={prayer}  />

      </div>
      </div>
     


    </div>
     );
}
 
export default devotional;