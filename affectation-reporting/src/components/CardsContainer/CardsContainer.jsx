import { Card } from "../Card/Card";
import style from "./CardsContainer.module.css";
export const CardsContainer = (props) => {
    const { affecteds } = props;
    const keys = Object.keys(affecteds);
    const values = Object.values(affecteds);
    console.log(values, "Cards Container");

    const handleDelete = (index) => {
        console.log(keys[index]);
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