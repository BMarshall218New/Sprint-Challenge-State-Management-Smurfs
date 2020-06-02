import { FETCH_SMURF, FETCH_SMURF_FAILED, ADD_SMURF } from "./actions/smurfAction";
const initialState = {
    isLoading: false,
    error: "",
    smurfs: [
        // { name: "Brainey" },
        // { age: "200" },
        // { height: "5cm" },
        // { id: Date.now },
    ]
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                isLoading: true,
                smurfs: action.payload,
                error: ""
            }
        case FETCH_SMURF_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                isLoading: false,
                error: "",
                smurfs: action.payload
            }
        default:
            return state;
    }
}