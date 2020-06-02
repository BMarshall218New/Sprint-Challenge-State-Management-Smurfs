import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf, getSmurf } from "../store/reducers/actions/smurfAction";

// const SmurfForm = () => {
function SmurfForm(props) {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
    });

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf, [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {

        e.preventDefault();
        props.addSmurf(newSmurf)
        setNewSmurf({})
        console.log("newsmurf should appear", newSmurf)
    }

    return (
        <form onSubmit={onSubmit}>
            {/* <form> */}

            <input type="text"
                handleChanges={handleChanges}
                placeholder="Name"
                name="name"
            />
            <input type="number"
                handleChanges={handleChanges}
                placeholder="Age"
                name="age"
            />
            <input type="number"
                handleChanges={handleChanges}
                placeholder="Height in cm"
                name="height"
            />
            {/* <input type="submit" /> */}
            <button onClick={onSubmit}>Add Smurf!</button>
        </form>

    )
}

const mapStateToProps = () => {
    return {}
}

// const mapStateToProps = state => {
//     console.log("state from smurfForm: ", state)
//     return {
//         isLoading: state.smurfReducer.isLoading,
//         error: state.smurfReducer.error,
//         smurfs: state.smurfReducer.smurfs
//     }
// }

export default connect(
    mapStateToProps,
    { getSmurf, addSmurf }
)(SmurfForm);