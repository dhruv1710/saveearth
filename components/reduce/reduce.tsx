import styles from './reduce.module.css'

function Reduce(){

    return(
        <>
            <div className={styles.bg}> 
                <img className={styles.img} src="../public/reduce.png"></img>
                <div >
                    <h1 className={styles.header}>How to reduce pollution</h1>
                    <h3 className={styles.reduc}>Reuse items that are still useful such as bottles instead of disposing them. You can also use cloth bags and steel bottles which are reusable instead of plastic bags and bottles</h3>

                </div>
            </div>
        </>



    )
}
export default Reduce;