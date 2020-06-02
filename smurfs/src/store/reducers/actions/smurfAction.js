import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";
export const ADD_SMURF = "ADD_SMURF";


// export const getSmurf = () => dispatch => {
//     debugger

//     axios
//         .get("http://localhost:3333/smurfs")
//         .then(res => {
//             console.log(res)
//             dispatch({ type: FETCH_SMURF, payload: res.data })
//         })
//         .catch(error => {
//             dispatch({ type: FETCH_SMURF_FAILED, payload: error })
//             console.log(error)
//         })
// }








export const getSmurf = () => {
    return dispatch => {
        // dispatch({ type: FETCH_SMURF });
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log("from axios call:", res.data)
                dispatch({ type: FETCH_SMURF, payload: res.data })
            })
            .catch(err => {
                console.log("error fetching smurf", err)
                dispatch({ type: FETCH_SMURF_FAILED, payload: err })
            })

    }
}








export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF })
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log("data from post request: ", res.data)
            dispatch({ type: ADD_SMURF, payload: res.data })

        })
        .catch(err => {
            console.log("attempting to post new smurf: ", err)

        });

}











// export const addSmurf = (newSmurf) => {
//     return dispatch => {
//         axios
//             .post("http://localhost:3333/smurfs", newSmurf,
//                 // {
//                 //     name: "",
//                 //     age: "",
//                 //     height: "",
//                 //     id: Date.now,
//                 // }

//             )
//             .then(res => {
//                 console.log("attempting to post new smurf: ", res)
//                 dispatch({ type: ADD_SMURF, payload: res.data })
//             })
//             .catch(err => {
//                 console.log("error posting smurf: ", err);
//             })

//     }
// }