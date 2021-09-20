import Link from 'next/link'
export const getStaticPaths = async ()=>{
    const res= await fetch('https://vb-backend.herokuapp.com/fetch-post');
    const data = await res.json();
    
    const paths = data.map(each=>{
        return {
            params:{id:each.id}
        }
    })
 
    return {
        paths,
        fallback:false
    }
 }
 export const getStaticProps= async (context)=>{
     const id = context.params.id;
     const res = await fetch(`https://vb-backend.herokuapp.com/fetch-post/${id}`);
     const data = await res.json();
     return {
         props: { blog: data }
     }
 }


const update = ({blog}) => {
    console.log(new Date().toDateString());
    const __convert_date=(seconds)=>{
        return new Date(seconds * 1000).toDateString();
    }
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
            <div className="blog-info">
                <div className="top">
                    <h1>{blog.title} </h1>
                    <span>{__convert_date( blog.date._seconds)}</span>
                </div>
                <main>
                    <img src={blog.url} alt="" />
                </main>
                <div className="blog-wrapper">
                    {
                        blog.body.split('** new paragraph **').map((each, index) => (
                            <p>{each}</p>
                        ))
                    }
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
 
export default update;