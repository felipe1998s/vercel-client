import { FILTER_BY_AGE, FILTER_BY_GENDER, GET_AFFECTEDS, GET_AFFECTEDS_BY_EVENTS } from "../Actions/actions";

const initialState = {
    affecteds:[],
    aux_affecteds:[],
    affectedsGroups:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AFFECTEDS:
            return {
                ...state,
                affecteds: action.payload,
                aux_affecteds:action.payload
            }
        case FILTER_BY_AGE:
            return {
                ...state,
                aux_affecteds:action.payload
            }
        case FILTER_BY_GENDER:
            return {
                ...state,
                aux_affecteds:action.payload
            }
        case GET_AFFECTEDS_BY_EVENTS:
            const data =["incendio","daños estructurales","interrupcion de servicios","derrumbe en la via","Replicas sismicas"];
            const full = Object.values(action.payload);
            const A = full.filter((report)=>report.event===data[0]);
            const B = full.filter((report)=>report.event===data[1]);
            const C = full.filter((report)=>report.event===data[2]);
            const D = full.filter((report)=>report.event===data[3]);
            const E = full.filter((report)=>report.event===data[4]);
            return {
                ...state,
                affectedsGroups:{ ...state.affectedsGroups, A, B ,C ,D ,E }
            }        
        default:
            return {
                ...state
            }
    }
}

export default reducer;