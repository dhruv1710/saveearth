import styles from './footer.module.css';

function Footer(){
    return (
        <>
        <div className={styles.footer}>
            <div>
                <h2>Get In Touch</h2>
                <h5>example@gmail.com</h5>
                <h2>Call us on ---</h2>
                <ul className={styles.ul}>
                    <li>+9199999999 -- Sales</li>
                    <li>+9199999999 -- Support</li>
                </ul>
            </div>
            <div>
                <h2>Our social medias</h2>
                <ul className={`${styles.ul} ${styles.hl}`}>
                    <li>IN</li>
                    <li>YT</li>
                    <li>FB</li>
                    <li>TW</li>
                </ul>
                <h3>@SaveOurEarth</h3>
            </div>
        </div>
        </>
    );
}

export default Footer;