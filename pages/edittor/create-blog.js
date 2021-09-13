import {useState,useEffect} from 'react';
import {useRouter} from 'next/router'

const edittor = () => {
  const router = useRouter();
const [image,setImage]=useState();
const [paragraph,setPar]=useState();
const [title,setTitle]=useState();
const  blog_details={
  title,
  paragraph,
  image,
  date:`${new Date().toDateString()}`
       
}
const sendBlog=()=>{
  if(paragraph !='' && title !=''){
    fetch('http://my-json-server.typicode.com/Owoade/vinebranch/blogs',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog_details)
  }).then(router.push('/admin/panel'))
  }else alert('Add a title and paragraph')
 
}

  return (
    <div className="edittor-container">
      <div className="edittor-wrapper">
      <div className="control-container">
       <span onClick={(e)=>{setPar(`${paragraph}** new paragraph **`)}}><i className="ri-add-circle-line"></i> Add new paragraph</span>
       <span onClick={sendBlog}><i className="ri-send-plane-2-fill"></i> Post Blog</span>
      </div>
      <div className="edittor">
        <textarea placeholder="Blog Title" className="title" onChange={(e)=>{setTitle(e.target.value)}} value={title}></textarea>
        <input type="text" placeholder="Image link" onChange={(e)=>{setImage(e.target.value)}} value={image}  />
        <img src={image} alt=""/>
        <textarea placeholder="Write Something  cool..." className="paragraph" onChange={(e)=>{setPar(e.target.value)}} value={paragraph}></textarea>
      </div>
      </div>
     


    </div>

  );
}

export default edittor;