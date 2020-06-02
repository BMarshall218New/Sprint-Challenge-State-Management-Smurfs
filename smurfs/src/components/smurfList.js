import React, { useEffect } from "react";
import { getSmurf } from "../store/reducers/actions/smurfAction";//how do i fix this!!!
import { connect } from "react-redux";

// const SmurfList = (getSmurf, smurfs) => //why didn't this work?
function SmurfList({ getSmurf, smurfs }) {
    useEffect(() => {
        //what does useEffect and usestate do again?
        getSmurf();
        console.log("should be getting smurfs from list", getSmurf);
    }, [getSmurf])

    return (
        <div>
            <h2> Smurflings List</h2>
            {smurfs.map(smurf => {
                console.log("smurf map list: ", smurfs)
                return (
                    <div key={smurfs.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>


                    </div>
                )
            })}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs

    }
}

export default connect(
    mapStateToProps,
    { getSmurf }
)(SmurfList);