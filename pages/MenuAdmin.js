import Link from 'next/link'
import {useRouter} from 'next/router';

const menu = () => {
    const router = useRouter();
    return ( 
        <div className="mobile-nav">
        <div className="container">
        <i className="ri-close-line" onClick={()=>{router.back()}}></i>
          <nav>
            <Link href="/">Devotions</Link>
            <Link href="/">Updates</Link>
            <Link href="/">Streams</Link>
            <Link href="/">Talk to us</Link>
          </nav>
        </div>

      </div>
     );
}
 
export default menu;