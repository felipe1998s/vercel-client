import axios from "axios";

export const GET_AFFECTEDS = "GET_AFFECTEDS";

export const getAffecteds =()=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get("http://localhost:3000/");
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

