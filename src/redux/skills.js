import * as ActionTypes from './ActionTypes';


export const Skills = (state= {
    errMess:null,
    isLoading:true,
    Skills: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_SKILL:
            var Project = action.payload;
            return {...state, Skills: state.Skills.concat(Project)};
        case ActionTypes.SKILLS_LOADED:
            return {...state, isLoading:false};
        default:
            return state
    }
}