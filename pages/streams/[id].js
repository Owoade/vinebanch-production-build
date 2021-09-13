import Link from 'next/link'
import {useRouter} from 'next/router'
export const getStaticPaths = async ()=>{
    const res= await fetch('http://my-json-server.typicode.com/Owoade/vinebranch/streams');
    const data = await res.json();
    
    const paths = data.map(each=>{
        return {
            params:{id:each.id.toString()}
        }
    })
 
    return {
        paths,
        fallback:false
    }
 }
 export const getStaticProps= async (context)=>{
     const id = context.params.id;
     const res = await fetch(`http://my-json-server.typicode.com/Owoade/vinebranch/streams/${id}`);
     const res2 = await fetch(`http://my-json-server.typicode.com/Owoade/vinebranch/streams`);
     const data = await res.json();
     const data_2 = await res2.json();
     return {
         props: { stream: data,
        old_streams:data_2 
    }
     }
 }
 const stream = ({ stream,old_streams }) => {
    const getThumbnail=(url)=>{
      const id=url.split('/')[3];
      return [`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,id]

    }
   
    const mainStream = stream;
    const other_streams=old_streams.filter(each=>{return each.id != mainStream.id});
    return (

        <div className="main-container">

            <header>
                <div className="container">
                    <div className="logo">
                        <img src="../asset/logo.png" alt="" />
                    </div>
                    <nav>
                        <Link href="/">Messages</Link>
                        <Link href="/">Updates</Link>
                        <Link href="/">Give on air</Link>
                        <Link href="/">Talk to us</Link>
                    </nav>
                    <Link href="/Menu"><i className="ri-menu-fill burger"></i></Link>
                </div>

            </header>
            <div className="stream-info">
                <div className="top">
                    <h1>{mainStream.title} </h1>
                    <span>{mainStream.Date}</span>
                </div>
                <main>
                <iframe src={`https://www.youtube.com/embed/${getThumbnail(mainStream.link)[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </main>
                <div className="stream-container">
                    <h1>Recently Streamed</h1>
                    <div className="streams">
                        <div className="stream-wrapper">
                        {
                            other_streams.map(each=>(
                                <div className="stream">
                                <img src={getThumbnail(each.link)[0]} alt="" />
                                <Link href={`/streams/${each.id}`}>{each.title}</Link>
                                <span className="date">{each.Date}</span>
                            </div>
                            ))
                           
                        }
                           
                            

                        </div>
                    </div>

                </div>
            </div>
            <footer>
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

export default stream;

