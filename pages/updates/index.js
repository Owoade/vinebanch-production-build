import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('http://my-json-server.typicode.com/Owoade/vinebranch/blogs');
    const data = await res.json();
    return {
        props: { blogs: data }
    }
}
const update = ({ blogs }) => {
    const formatDate = (date) => {
        let formattedDate = '',
            date_arr = date.split(' ');
        formattedDate += date_arr[1];
        formattedDate += ` ${date_arr[2]}`;
        formattedDate += ` ${date_arr[3]}`;
        return formattedDate;
    }
    return (
        <div className="main-update-container">
            <div className="hero-container">
                <header>
                    <div className="container">
                        <div className="logo">
                            <img src="asset/logo.png" alt="" />
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
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Our <span className="colored-text">Updates</span> </h1>
                </div>
            </div>
            <div className="updates-section">
                <h1>Recent Updates</h1>
               { blogs.length==0 ? <span className="error-message">There are no updates for now</span> :( <div className="container">
                    <div className="update-cards">
                        {
                            blogs.map((each) => (
                                <div className="update-card">
                                    <img src={each.image} alt="" />
                                    <a href={`/updates/${each.id}`}><h4>{each.title.toUpperCase()}</h4> </a>
                                    <span className="category">{formatDate(each.date)}</span>
                                </div>

                            ))

                        }


                    </div>
                </div>) }


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