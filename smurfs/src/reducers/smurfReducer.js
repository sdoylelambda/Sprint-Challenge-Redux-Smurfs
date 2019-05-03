import {ADD_SMURFS_FAILURE, ADD_SMURFS_SUCCESS, ADD_SMURFS_START,  FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF } from "../actions";

const initialState = {
   smurfs: [
    {
      name: '',
      age: '',
      height: '',
      id: '',
      isLoading: false,
      error: null
    }
  ]
}

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
    case ADD_SMURFS_START:
        const newSmurf = {
        name: action.payload,
        isLoading: false
      };
        return {
        ...state, 
        smurf: newSmurf
      }
    //   case ADD_SMURFS_START:
    //   return {
    //     ...state,
    //   error: "",
    //   isLoading: true
    //   }
      case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        smurfs: action.payload
      }
      case ADD_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
    return state;
  }

  
};
