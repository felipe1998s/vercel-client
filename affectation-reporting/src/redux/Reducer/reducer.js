import { GET_AFFECTEDS } from "../Actions/actions";

const initialState = {
    affecteds:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AFFECTEDS:
            return {
                ...state,
                affecteds: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default reducer;