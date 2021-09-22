import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect"
import { AiOutlineMenu } from "react-icons/ri";

export const getStaticProps = async () => {
  const res = await fetch('https://vb-backend.herokuapp.com/fetch-devotion');
  const res2 = await fetch('https://vb-backend.herokuapp.com/fetch-post');
  const data = await res.json();
  const data2 = await res2.json();


  return {
    props: {
      dev: data[0],
      blogs: data2.filter((each, index) => { return index < 3 })
    }
  }
}
const Home = ({ dev, blogs }) => {

  const [menu, setMenu] = useState(false);
  console.log(dev, blogs);
  return (
    <div className="home-container">
      <div className="hero-container">
        <header>
          <div className="container">
            <div className="logo">
              <img src="asset/logo.png" alt="" />
            </div>
            <nav>
              <Link href="/">Messages</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/">Give on air</Link>
              <Link href="/contact">Talk to us</Link>
            </nav>
            <Link href="/Menu"><i class="ri-menu-fill burger"></i></Link>
          </div>

        </header>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to <span className="colored-text">Vine Branch Church, Apata.</span> </h1>
          <h2>The citadel of divine overflow</h2>
          <p>Join us every <span style={{ display: "inline-block" }}><Typewriter

            onInit={(typewriter) => {

              typewriter

                .typeString("Sunday by 9:00 AM")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Wednesday by 5:30 PM")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Friday by 5:30 PM")
                .pauseFor(1000)
                .start();
            }}
          /></span></p>
          <Link href="/streams">Catch us Live</Link>
        </div>
      </div>
      <div className="experience-container">
        <h1>Who we are</h1>
        <div className="container">
          <div className="experiences">
            <div className="experience">
              <img src="asset/exp-1.jpg" alt="" />
              <h3>HEAVEN BACKED</h3>
              <span>As you visit, you get immersed into the atmosphere of the heavenlies</span>
            </div>
            <div className="experience">
              <img src="asset/exp-2.jpg" alt="" />
              <h3>BIBLE BASED</h3>
              <span>Come in for an experience of scriptural exposition </span>
            </div>
            <div className="experience">
              <img src="asset/exp-3.jpg" alt="" />
              <h3>PRACTICAL</h3>
              <span> Your experience with us becomes a testimony for the world </span>
            </div>
          </div>
        </div>


      </div>
      <div className="daily-devotional">
        <div className="overlay"></div>
        <div className="content">
          <h1>Today's Blessing</h1>
          <h3>{dev.title.toUpperCase()}</h3>
          <span className="verse"> {`${dev.morning_paragraph.substring(0, 200)}.....`} <Link href="/devotional">Read more</Link>
          </span>
          <span className="reference">-{dev.morning_verse}</span>
        </div>
      </div>
      <div className="history-container">
        <h1>How it all started</h1>
        <div className="history-wrapper">
          <div className="left">
            <div className="top">
              <h2>Welcome to The Rock Center</h2>
              <span>...Come thou with us, we will do the good</span>
            </div>
            <div className="bottom">

              <p>Vine Branch Church Apata Centre is an integral part of the vision the Lord Jesus Christ gave to His servant, Revd. Dr. Sola Kolade to lead His children into “New realms of His glory”.</p>
              <p> This centre was inaugurated of the leading of God’s Spirit as a full fledged worship centre on 2nd January 1999 at the Gangan Hall of the Lafia Hotel in Apata, Ibadan. Our first Sunday service has 88 people in attendance. The church has enjoyed heaven’s backing ever since as we remain committed to the simple preaching, teaching and doing God’s Holy word.</p>
              <img src="asset/signature.png" alt="" />
            </div>
          </div>
          <div className="right">
            <img src="asset/history.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="updates-container">
        <h1>Church Activities</h1>
        {
          blogs.length == 0 ? (<main className="error-message">There are no upcoming activities for now</main>) : (<div className="wrapper">
          <div className="events-container">
            <h3>Upcoming Events</h3>
            <div className="events">
              {
                blogs.map(each => (
                  <div className="event">
                    <img src={each.url} alt="" />
                    <div className="desc">
                      <span>{each.title}</span>
                      <a href={`/updates/${each.id}`}>Read more</a>
                    </div>
                  </div>
                ))
              }


             
            </div>
            <a href="#">View all updates</a>
          </div>

        </div>)
        }
        


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
  )
}
export default Home
