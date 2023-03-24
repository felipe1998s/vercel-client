import { Card } from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useDispatch } from "react-redux";
import { deleteAffected, getAffecteds } from "../../redux/Actions/actions";
import { useEffect } from "react";
export const CardsContainer = (props) => {
    const { affecteds } = props;
    const keys = Object.keys(affecteds);
    const values = Object.values(affecteds);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAffecteds());
    },[dispatch]);


    const handleDelete = (index) => {
        console.log(keys[index]);
        dispatch(deleteAffected(keys[index]));
        dispatch(getAffecteds());
    }

    return(
        <div className={style.container}>
            <Card id="Id" name="Nombre" age="Age" location="Location"/>
            {values.length>0 && values.map((value, index)=>(
                <div key={keys[index]}>
                    <Card
                        id={index}
                        name={value.name}
                        age={value.age}
                        location={value.location}
                        handle={handleDelete}
                    />
                </div>
            ))}
        </div>
    )
}