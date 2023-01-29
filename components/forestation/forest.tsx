import styles from './forest.module.css'

function Forest(){
    return(
        <div className={styles.forest}>
        <div>
        <h1>Forestation</h1>
        <h2>How will it help? </h2>
        </div>
        <p className={styles.rect}>Forestation really aids in
            increasing the amount of trees
            in a degraded forest and that 
            also means there will be more
            houses for the fauna that 
            inhabits the forest</p>
        <p className={styles.rectwo}>As the amount of trees will 
        grow the amount of carbon
        dioxide will reduce as well
        which gives us more fresh air 
        in our atmosphere.</p>
        </div>

    )
}

export default Forest;