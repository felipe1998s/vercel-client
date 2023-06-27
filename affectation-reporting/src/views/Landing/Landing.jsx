import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import { leer } from "../../funtions/leer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAffecteds } from "../../redux/Actions/actions";
export const Landing = () => {
    const text = leer();
    const [string,setString]=useState(text);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAffecteds())
    },[dispatch]);

    
    

    return (
        <div className={style.container}>
            <h1>{string.es.landing.welcome}</h1>
            <Link to='/home'><button className={style.btn}>HOME</button></Link>
        </div>
    )
}