import React from "react"
import classes from './header.module.css'

const Header2 = () => {
    return(
        <nav>
            <div className={classes.burger-btn} onClick={() => setMenuActive(!menuActive)}>
                <span />
            </div>
        </nav>
    )
}

export default Header2