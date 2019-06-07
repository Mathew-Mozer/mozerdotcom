import * as ActionTypes from './ActionTypes';


export const Experience = (state= {
    errMess:null,
    isLoading:true,
    Experience: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_EXPERIENCE:
            var Experience = action.payload;
            console.log("adding experience")
            return {...state, Experience: state.Experience.concat(action.payload)};
        case ActionTypes.EXPERIENCE_LOADED:
            return {...state, isLoading:false};
        default:
            return state
    }
}