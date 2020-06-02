import React, { useEffect } from "react";
import { getSmurf } from "../store/reducers/actions/smurfAction";//how do i fix this!!!
import { connect } from "react-redux";
import axios from "axios";
import { FETCH_SMURF } from "../store/reducers/actions/smurfAction";
import { Card, Image } from "semantic-ui-react";
import smurfpic from "../smurfPicture/smurfpic.jpg";


// const SmurfList = (getSmurf, smurfs) => //why didn't this work?
function SmurfList({ getSmurf, smurfs }) {
    useEffect(() => {
        //what does useEffect and usestate do again?
        getSmurf();
        console.log("should be getting smurfs from list", getSmurf);
        return dispatch => {
            axios
                .get("http://localhost:3333/smurfs")
                .then(res => {
                    console.log("from smurfList:", res.data)
                    dispatch({ type: FETCH_SMURF, payload: res.data })
                })
        }

    }, [])

    return (
        <div>

            <h2> Smurflings List</h2>
            {smurfs.map(smurf => {
                console.log("smurf map list: ", smurfs)
                return (
                    <Card>
                        <Image src={smurfpic}></Image>
                        <div key={smurfs.id}>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    </Card>

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