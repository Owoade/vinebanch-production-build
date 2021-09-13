import Link from 'next/link'
export const getStaticPaths = async ()=>{
    const res= await fetch('http://my-json-server.typicode.com/Owoade/vinebranch/blogs');
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
     const res = await fetch(`http://my-json-server.typicode.com/Owoade/vinebranch/blogs/${id}`);
     const data = await res.json();
     return {
         props: { blog: data }
     }
 }


const update = ({blog}) => {
    console.log(new Date().toDateString());
   const formatDate=(date)=>{
     let formattedDate='',
     date_arr=date.split(' ');
      formattedDate+=date_arr[1];
      formattedDate+=` ${date_arr[2]}` ;
      formattedDate+= ` ${date_arr[3]}`;
      return formattedDate;
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
                    <span>{formatDate(blog.date)}</span>
                </div>
                <main>
                    <img src={blog.image} alt="" />
                </main>
                <div className="blog-wrapper">
                    {
                        blog.paragraph.split('** new paragraph **').map((each, index) => (
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