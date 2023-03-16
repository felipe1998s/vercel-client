import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export const Landing = () => {
    return (
        <div className={style.container}>
            <h1>Affectation Reporting System</h1>
            <button className={style.btn}><Link to='/home'>HOME</Link></button>
        </div>
    )
}