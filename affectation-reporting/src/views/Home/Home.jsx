import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { getAffecteds } from "../../redux/Actions/actions";
import style from "./Home.module.css";

export const Home = () => {
    const dispatch = useDispatch();
    const affecteds = useSelector((state)=>state.affecteds);
    console.log(affecteds, "HOME");
    useEffect(()=>{
        dispatch(getAffecteds());
    },[dispatch]);
    return (
        <div className={style.container}>
            <CardsContainer affecteds={affecteds}/>
        </div>
    )
}