import Link from "next/link";
import {useRouter} from 'next/router'
export const getStaticProps= async()=>{
    const res_blogs=await fetch("https://vb-backend.herokuapp.com/fetch-post");
    const res_dev=await fetch("https://vb-backend.herokuapp.com/fetch-devotion");
    const res_streams=await fetch("https://vb-backend.herokuapp.com/fetch-stream");

    const data_blogs=await res_blogs.json();
    const data_dev=await res_dev.json();
    const data_streams=await res_streams.json();
    // console.log(data_blogs,data_dev,data_streams);

    return{
        revalidate: 60,
        props:{
            blog:data_blogs[0],
            devotional:data_dev[0],
            streams:data_streams[0]
        }
    }
}
const Panel = ({blog,devotional,streams}) => {
    console.log(blog,devotional,streams)
    const router = useRouter();
    
    
    return (
        <div className="parent-container-panel">
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
                <h2 className=" color-primary mt-40"> Admin's Action </h2>
                <div className="action-container grid mt-40">
                    <div className="action" onClick={()=> router.push('/edittor/create-blog')}>
                        <i class="ri-newspaper-line color-primary"></i>
                        <span className="color-typo-primary mt-20 block" >Add Blog</span>
                    </div>
                    <div className="action"  onClick={()=> router.push('/edittor/create-stream')}>
                        <i class="ri-live-line color-primary"></i>
                        <span className="color-typo-primary mt-20 block">Add Live stream</span>
                    </div>
                    <div className="action"  onClick={()=> router.push('/edittor/create-dev')}>
                        <i class="ri-article-line color-primary"></i>
                        <span className="color-typo-primary mt-20 block" >Add Devotion</span>
                    </div>
                </div>
                <h2 className=" color-primary mt-40"> Recent Uploads </h2>
                <div className="recent-container grid mt-40">
                    <div className="recent">
                        <img src={blog.url} alt="" />
                        <span className="block color-typo-primary">Recent Blog</span>
                        <Link href="/admin/view-blog" className="block color-typo-primary web-link ">View All</Link>
                    </div>
                    <div className="recent">
                        <img src={`https://i.ytimg.com/vi/${streams.url.split('/')[3]}/maxresdefault.jpg`} alt="" />
                        <span className="block color-typo-primary">Recent Stream</span>
                        <Link href="/admin/view-streams" className="block color-primary web-link ">View All</Link>
                    </div>
                    <div className="recent">
                        <img src={devotional.url} alt="" />
                        <span className="block color-typo-primary">Recent Devotional</span>
                        <Link href="/admin/view-devotion" className="block color-primary web-link ">View All</Link>
                    </div>


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
    );
}

export default Panel;
