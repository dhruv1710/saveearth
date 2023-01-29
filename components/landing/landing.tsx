import styles from "./landing.module.css";

function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <div>
          <h1 id="one">One  </h1>
          <h1 id="home">  Home</h1>
          <h3 id="motto">  Help live carbon neutral</h3>
          <a id="btn">Learn more about our vision</a>
        </div>
        <div></div>
      </div>
      <style jsx>{`
        #home,#motto {
          padding-left:30px;

        }
        #btn {
          background-color: teal;
          padding:10px;
          background: #5DD39E;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default Landing;
