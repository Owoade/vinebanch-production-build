import Link from 'next/link';
const contact = () => {
    return (
        <div className="contact-container">
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
                    <h1>Contact <span className="colored-text">Us</span> </h1>
                </div>
            </div>
            <div className="contact-wrapper">
                <div className="container">
                    <div className="card-section">
                        <div className="cards">
                            <div className="card">
                                <i className="ri-mail-line"></i>
                                <h3>Send us an E-mail</h3>
                                <a href="mailto:contact@vinebranch.com">Send an e-mail</a>
                            </div>
                            <div className="card">
                                <i className="ri-chat-smile-3-line"></i>
                                <h3>Use our online enquiry service</h3>
                                <Link href="#">Talk to an agent</Link>
                            </div>
                        </div>




                    </div>
                    <div className="map-container">
                      <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Vine branch apata&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                    <div className="social-container">
                        <h2>Contact us on our social media accounts</h2>
                        <div className="social-links">
                            <a href="#"><i className="ri-facebook-fill"></i></a>
                            <a href="#"><i className="ri-twitter-fill"></i></a>
                            <a href="#"><i className="ri-linkedin-fill"></i></a>
                            <a href="#"><i className="ri-instagram-fill"></i></a>

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

export default contact;