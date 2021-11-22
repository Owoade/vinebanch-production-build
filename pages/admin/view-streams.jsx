import queryString from 'query-string';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'
export const getStaticProps= async ({location})=>{
    

    const key= "stream";
    const dir="streams";
   
    const res=await fetch(`https://us-central1-vb-backend-46ad2.cloudfunctions.net/app/fetch-${key}`)
    const data=await res.json()
    const empty= data==[] ? true : false
    return{
        revalidate: 60,
        props:{
            data:data.filter((each)=>{return each.id != undefined}),
            dir,
            key,
            status:empty
        }
    }
}
const View = ({data,dir,key,status}) => {
  const [stream,setStream]=useState(data); 
  const [stat,setStat]=useState(status);
  const new_key= "stream";
 const Delete = async (id)=>{
     let delete_req = confirm('Are you sure you wat delete this resource');
     if(delete_req){
        const del =  await fetch(`https://us-central1-vb-backend-46ad2.cloudfunctions.net/app/delete-${new_key}/${id}`);
     setStream(stream.filter((each)=>{return each.id !== id}));
     }
      
    } 
useEffect(()=>{},[stream]);
 
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
           
                {!stat ? (stream.map(each=>(
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
