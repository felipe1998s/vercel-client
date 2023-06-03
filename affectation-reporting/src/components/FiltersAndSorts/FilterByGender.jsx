import { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterByGender, getAffecteds } from "../../redux/Actions/actions";
import style from "./FiltersAndSorts.module.css";
export const FilterByGender = (props) => {
    const {data} = props;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAffecteds());
    },[dispatch]);

    const handleChange = (event) => {
        const {value}=event.target;
        let dataFilter = data;
        if(value==="M"){
            dataFilter = data.filter((obj)=>obj.gender===value);
        }else if(value==="F"){
            dataFilter = data.filter((obj)=>obj.gender===value);
        }else if(value==="Otro"){
            dataFilter = data.filter((obj)=> obj.gender===value);
        }else{
            dispatch(getAffecteds());
        }
        dispatch(filterByGender(dataFilter));
    }

    return(
        <div className={style.filterByGender}>
            <FaFilter/>
            <span>Filtro por genero: </span>
            <select name="" id="" onChange={handleChange} className={style.select}>
                <option value="All">Todos</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="Otro">Otros</option>
            </select>

        </div>
    )

}