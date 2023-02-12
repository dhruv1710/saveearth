import styles from './reduce.module.css'

function Reduce(){

    return(
        <>
            <div className={styles.bg}> 
                
                
                <h1 className={styles.header}>How to reduce pollution</h1>
                <h3 className={styles.reduce}>Reduce your unnecessary usage of commodities such as electricity, water and food. You can take steps such as closing lights and water taps to reduce the production which will then reduce pollution.</h3>
                <h3 className={styles.reuse}>Reuse items that are still useful such as bottles instead of disposing them. You can also use cloth bags and steel bottles which are reusable instead of plastic bags and bottles</h3>
                <h3 className={styles.recycle}>Recycle items which can be recycled. There are many recycling stations made by companies and small retailers.</h3>

                <div className={styles.imgbox}>
                    <img className={styles.img} src="reduce.png"></img>
                </div>              
            </div>
        </>



    )
}
export default Reduce;