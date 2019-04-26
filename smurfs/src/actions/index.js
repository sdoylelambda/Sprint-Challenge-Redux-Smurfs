import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_SMURFS_FAILURE, payload: err}))
}

export function addNewSmurf(newSmurf) {
  return {
    type: ADD_SMURF,
    payload: newSmurf
  };
}

// export const addNewSmurf = newSmurf => dispatch => {
//   dispatch({type: ADD_SMURF })
//   axios
//     .post('http://localhost:3333/smurfs', newSmurf)
//     .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }))
// }