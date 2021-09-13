import {useState} from 'react';
import { useRouter } from 'next/router'
const Admin = () => {
    const router= useRouter();
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [clicked,setClick]=useState(false);
    const login= async ()=>{
        setClick(true)
        const res= await fetch('http://my-json-server.typicode.com/Owoade/vinebranch/admin');
        const {admin_id,pw} = await res.json();
        console.log(admin_id,pw);
        if(admin_id==id && pw ==password){
            setClick(false)
            router.push('/admin/panel');
        }else{
            setClick(false)
            alert("Wrong login credentials try again")
        }
        
 
    
    }
    return (
        <div className="parent-container">
            <div className="form-container">
            <img src="../asset/logo.png" alt="" />
                <div className="form-area">
                    <form onSubmit={(e)=>{e.preventDefault();login()} }>
                        <input type="text" required placeholder="Enter Admin-ID" value={id} onChange={(e)=>{setId(e.target.value)}} />
                        <input type="password" required placeholder="Enter Admin-Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        {!clicked && <button>Login</button>}
                       {clicked && <button className="load-btn" disabled={true}>Please wait...</button>} 

                    </form>

                </div>

            </div>


        </div>
    )

}
export default Admin;