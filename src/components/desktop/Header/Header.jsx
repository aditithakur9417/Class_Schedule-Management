import React from 'react'
import CountDown from '../countDown.js/countDown'
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom'


function Header(props) {
    return (
        <section id="header" className={styles.container}>
            <div className={styles.leftDivision}>
                <div className={styles.rowFirst}>Time Left: <CountDown /> seconds</div>
                <div className={styles.rowSecond}>Claim Your Free Trial Class</div>
            </div>
            <Link to={"/cart"} state={{ data: props.selectedData }}>

                <img className={styles.cartImage} src="images/cart.png" alt="cart logo" />
            </Link>

        </section>
    )
}

export default Header
