import Link from 'next/link';
export const getStaticPaths = async ()=>{
    const res= await fetch('http://my-json-server.typicode.com/Owoade/vinebranch/devotions');
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
    const res_1 = await fetch(`http://my-json-server.typicode.com/Owoade/vinebranch/devotions/${id}`);
    const data_1 = await res_1.json();
    const res_2 = await fetch('http://my-json-server.typicode.com/Owoade/vinebranch/devotions');
    const data_2 = await res_2.json();
    return {
        props: { dev: data_1,
            all_dev: data_2,
            dev_id:parseInt(id)}
        
    }
}
const dev_index = (props) => {
    const dev=props.dev,
    all_dev=props.all_dev,
    dev_id=props.dev_id;
    return (
        <div className="devotional-container">
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
            <div className="blog-info">
                <div className="top">
                    <h1>{dev.title} </h1>
                    <span>{dev.date}</span>
                </div>
                <main>
                    <img src={dev.image} alt="" />
                </main>
                <div className="blog-wrapper">
                    <strong>Morning verse : {dev.verse_first}</strong>
                    <p>{dev.paragraph_1}</p>
                    <strong>Evening verse : {dev.verse_two}</strong>
                    <p>{dev.paragraph_2}</p>
                    <strong> " {dev.prayer} "</strong>
                    <div className="others">
                        <h3>In case you missed previous devotions</h3>
                         {
                             all_dev.filter(each=> each.id !== dev_id).map(each=>(
                                 <Link href={`/devotional/${each.id}`}>{each.title}</Link>
                             ))
                         }

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

export default dev_index;