import queryString from 'query-string';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'
export const getStaticProps= async ({location})=>{
    

    const key= "devotions";
    const dir="devotional";
   
    const res=await fetch(`http://my-json-server.typicode.com/Owoade/vinebranch/${key}`)
    const data=await res.json()
    const empty= data==[] ? true : false
    return{
        props:{
            data,
            dir,
            key,
             status:empty
        }
    }
}
const View = ({data,dir,key,status}) => {
    const new_key='devotions';
    const [devotion,setDevotion]=useState(data);
    const [stat,setStat]=useState(status);
    const Delete = (id)=>{
        const del =fetch(`http://localhost:8000/${new_key}/${id}`,{method:"DELETE"});;  
       setDevotion(devotion.filter((each)=>{return each.id !== id}));
      } 
  useEffect(()=>{},[devotion]);
 
    return (
        <div className="admin-wrapper">
             <div className="parent-container-view admin-parent">
            <header>
                <div className="container">
                    <div className="logo">
                        <img src="../asset/logo.png" alt="" />
                    </div>
                    <nav>
                        <Link href="/devotional">Devotions</Link>
                        <Link href="/streams">Streams</Link>
                        <Link href="/updates">Updates</Link>
                        <Link href="/contact">Talk to us</Link>
                    </nav>
                    <Link href="/MenuAdmin"><i class="ri-menu-fill burger"></i></Link>
                </div>

            </header>
          
            <div className="container">
                <h2 className="color-primary mt-40 center">All {`${dir}`}</h2>
                <div className="views mt-20">
           
                {!stat ? ( devotion.map(each=>(
                        <div className="view">
                            <span className="block color-typo-primary">{each.title}</span>
                            <Link className=" block color-primary" href={`/${dir}/${each.id}`}>View</Link>
                            <button className="block color-primary" onClick={()=>{Delete(each.id)}}>Delete</button>

                        </div>
                        ))) : <span className="error-message">There are no blogs for now</span>
                   
                    }
                    
              
                    
                   
                </div>
            </div>
            <footer className="mt-40">
                <div className="container">
                    <div className="left">
                        <span>Vine Branch Church Apata &copy; {new Date().getFullYear()} </span>
                    </div>
                    <div className="right">
                        <span>
                            Designed and Managed by <a href="http://pyvot360.org">Pyvot360</a>
                        </span>
                    </div>
                </div>
            </footer>



        </div>
            
        </div>
       
    );
}

export default View;