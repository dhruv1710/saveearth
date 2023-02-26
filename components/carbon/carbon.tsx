import styles from './carbon.module.css'

export default function Carbon(){
    return (
        <div className={styles.root}>
            <div className={styles.textdiv}>
                <h1 className={styles.Head}>Carbon Emissions </h1>
                <hr className="h-1 bg-black w-96 ml-3"/>
                <h2 className={styles.prob}>     ------{'>'} Problem</h2>
                

                <div className={styles.rects}> 
                    <p className={styles.rect}>Ever since the Industrial revolution in 
                1790s, Carbon dioxide emissions have increased drastically. 
                Since the Revolution, Carbon emissions soared from 280 ppm
                (parts per million) to 387 ppm.</p>

                <p className={styles.recto}>Carbon emissions has been rapidly 
                growing, If we continue on this same
                trend, by 2100,(21st century) Temperatures
                will increase by 4 degreeCelsius and in the summer, 
                temperatures can reach 50 degrees Celsius</p></div>

                <h2 className={styles.sol}>      ------{'>'} Solution</h2>

                <h2 className={styles.solut}>To fix this, we have to start using renewable
                resources(resources that are regenerate frequently)
                to all things like solar panel, windmills etc. Also we
                have to switch to EV(Electric Vehicle), so we gradually decrease the 
                Carbon dioxide in our atmosphere</h2>

            </div>
            <div className={styles.imgdiv}>

                
                <img src="/images/carbon.png" height="643px" width="334px" className='w-96 '></img>

            </div>
            
        </div>
    );
}