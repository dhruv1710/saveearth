import styles from "./ocean.module.css";

function Ocean() {
  return (
    <>
      <div className={styles.oceanbg}>
        <h1 className={styles.head}>Ocean Warming-</h1>

        <div className={styles.line}></div>

        <div className={styles.list}>
          <div className={styles.box}><div className={styles.headbox}>What is it?</div>The oceans absorbs most of the excess heat from greenhouse gas emissions which affects the marine ecosystem which threatens food security and increases the prevalence of diseases. It also affects the weather events and coastal protection.</div>
          <div className={styles.box}><div className={styles.headbox}>Whats the issue?</div>As the temperature of the ocean rises, the Antarctic subsurface of ice will gradually melt down, increasing the ocean water level which will result to loss of land in coastal areas. This also causes more hurricanes and storms which ravages the coastal line.</div>
          <div className={styles.box}><div className={styles.headbox}>What can be done?</div>We can start by limiting greenhouse emissions, which reduces the possibility of carbon dioxide getting mixed in the water and also pay attention and protect the species of the sea. To do this we can also try to find a way in which humans can adapt so that it wouldn&apos;t hurt the marine ecosystem</div>
        </div>
          
         
      </div>
    </>
  );
}

export default Ocean;
