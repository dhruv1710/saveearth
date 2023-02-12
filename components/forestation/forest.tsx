import styles from "./forest.module.css";

function Forest() {
  return (
    <div className={styles.forestM}>
    <div className={styles.forest}>
      <h1 className={styles.name}>Forestation</h1>
      <hr className={styles.hr}/>
      <div className={styles.how}>How will it help?</div>
      <div className={styles.rects}>
        <div className={styles.rect}>
          {" "}
          Forestation really aids in increasing the amount of trees in a
          degraded forest and that also means there will be more houses for the
          fauna that inhabits the forest
        </div>

        <div className={styles.rect}>
          {" "}
          As the amount of trees will grow the amount of carbon dioxide will
          reduce as well which gives us more fresh air in our atmosphere.
        </div>
      </div>

      <h1 className={styles.where}>Where to start?</h1>
      <div className={styles.wect}>
          
          <p>
          Forestation does not mean planting trees. You can do your part by
          taking any seed from a fruit or vegetable you recently ate and just
          plant it in a patch of soil. After that, make sure to water it
          whenever it looks dry and in some time you will see it sprout
          
          </p>
          <p> 
        
            Congrats! You just grew a plant!
        </p>
        <div>
            
        </div>
        </div>
    </div>
    <img className={styles.tee} src="tree.png" alt='Tree'></img>
    </div>
  );
}

export default Forest;
