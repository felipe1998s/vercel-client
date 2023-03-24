import axios from "axios";

export const GET_AFFECTEDS = "GET_AFFECTEDS";

export const getAffecteds =()=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get("/");
            console.log(data, "ACTIONS");
            return dispatch({
                type:GET_AFFECTEDS,
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
            console.log(data, "DELETE_ACTION");
        }catch(error){
            console.error(error);
        }        
    }    
}