import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header className={style.container}>
            <div className={style.logo}>
                <h1>Logo</h1>
            </div>
            <div className={style.links}>
                <Link to='/about-us'>About Us</Link>
                <Link to='/home'>Home</Link>
                <Link to='/stats'>Stats</Link>
            </div>
        </header>
    )
}