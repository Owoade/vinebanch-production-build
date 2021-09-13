import Link from 'next/link'
import {useRouter} from 'next/router';
const menu = () => {
    const router = useRouter();
    return ( 
        <div className="mobile-nav">
        <div className="container">
        <i className="ri-close-line" onClick={()=>{router.back()}}></i>
          <nav>
            <Link href="/https://vinebranchapata.org/messages/">Messages</Link>
            <Link href="/updates">Updates</Link>
            <Link href="/">Give on air</Link>
            <Link href="/contact">Talk to us</Link>
          </nav>
        </div>

      </div>
     );
}
 
export default menu;