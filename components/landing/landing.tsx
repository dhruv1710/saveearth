import styles from "./landing.module.css";
import Image from 'next/image';

function Landing() {
  return (
    <>
      <nav id="navbar">
        <div id="brand">#SaveEarth</div>
        <a id="contact">Contact</a>
      </nav>
      <div className={styles.landing}>
        <div id="left">
          <h1 id="one">One </h1>
          <h1 id="home"> Home</h1>
          <h3 id="motto"> Help live carbon neutral</h3>
          <a id="btn">Learn more about our vision</a>
        </div>
        <div>
        <img id="one" src="earth.png" alt="Earth" ></img>
        </div>
      </div>
      <div></div>
      <style jsx>{`
        #navbar{
          width:100%;
          display:flex;
          font-size:30px;
          height:80px;
          align-items:center;
          justify-content:space-between;
        }
        
        #left {
          display: flex;
          flex-direction: column;
          align-items: space-evenly;
        }
        #home,
        #one {
          font-size: 128px;
        }
        #home,
        #motto {
          padding-left: 100px;
        }
        #btn {
          background-color: teal;
          margin: 10px;
          padding: 10px;
          background: #5dd39e;
          color:black;
          font-size:30px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default Landing;
