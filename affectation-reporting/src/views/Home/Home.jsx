import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { getAffecteds, getAffectedsByEvents } from "../../redux/Actions/actions";
import Loading from "../Loading/Loading";
import style from "./Home.module.css";
import { Footer } from "../../components";

export const Home = () => {
    const dispatch = useDispatch();
    const affecteds = useSelector((state)=>state.affecteds);
    const data = Object.values(affecteds)
    useEffect(()=>{
        dispatch(getAffecteds());
        dispatch(getAffectedsByEvents());
    },[dispatch]);
    return (
        <div>
            {data.length>0?(<div className={style.container}>
                <CardsContainer affecteds={affecteds}/>
                <Footer/>
            </div>):<Loading/>}
        </div>
    )
}