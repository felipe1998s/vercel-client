import axios from "axios";

export const GET_AFFECTEDS = "GET_AFFECTEDS";
export const FILTER_BY_AGE = "FILTER_BY_AGE";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const GET_AFFECTEDS_BY_EVENTS = "GET_AFFECTEDS_BY_EVENTS";

export const getAffecteds =()=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get("/");
            return dispatch({
                type:GET_AFFECTEDS,
                payload:data
            });
        } catch (error) {
            console.error(error);
        }

    }
}

export const getAffectedsByEvents = () => {
    return async (dispatch)=>{
        try {
            const {data} = await axios.get("/");
            return dispatch({
                type:GET_AFFECTEDS_BY_EVENTS,
                payload:data
            });
        } catch (error) {
            console.error(error);
        }

    } 
}

export const deleteAffected = (id) =>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.delete(`/delete-affected/${id}`)
        }catch(error){
            console.error(error);
        }        
    }    
}

//actions para usar en el reducer
export const sortByAge = (data) => {
    return{
        type:FILTER_BY_AGE,
        payload:data
    };
}

export const filterByGender = (data) => {
    return{
        type:FILTER_BY_GENDER,
        payload:data
    }
}