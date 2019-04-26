import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF } from "../actions";

const initialState = {
   smurfs: [],
   // put all inside of one object???
  //  fetchingSmurfs: false,
   isLoading: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
    return {
      ...state,
      error: "",
      isLoading: true
    }
    case FETCH_SMURFS_FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false
    }
    case FETCH_SMURFS_SUCCESS:
    return {
      ...state,
      error: "",
      isLoading: false,
      smurfs: action.payload
    }
    case ADD_SMURF:
        const newSmurf = {
          name: action.payload,
          isLoading: false
        };
        return {
          ...state, 
          smurf: newSmurf
        }
    
    default:
    return state;
  }
};
