import style from "./Card.module.css";
export const Card = (props) => {
    const { id , name, age, location , handle } = props;

    return (
        <div className={ id==="Id"? style.cardTop : style.card } >
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{location}</h1>
            {id!=="Id"? <div><button onClick={()=>handle(id)}>DELETE</button></div>:<h1></h1>}
        </div>
    )
}