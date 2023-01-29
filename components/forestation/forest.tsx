import styles from './forest.module.css'

function Forest(){
    return(
        <div className={styles.forest}>
        <div>
        <h1>Forestation</h1>
        <h2>How will it help? </h2>
        </div>
        <h3 className={styles.rect}>                  Forestation really aids in increasing the amount of trees--------------------------------------------------

        ----------------------------------------
            in a degraded forest and that 
            also means there will be more
            houses for the fauna that 
            inhabits the forest</h3>
        <h3 className={styles.rectwo}> As the amount of trees will 
        grow the amount of carbon dioxide will
        reduce as well
        which gives us more fresh air 
        in our atmosphere.</h3>

        <h2 className={styles.line}></h2>

        <h1> Where to start?</h1>
        </div>

    )
}

export default Forest;