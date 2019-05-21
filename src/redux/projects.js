import * as ActionTypes from './ActionTypes';


export const Projects = (state= {
    errMess:null,
    isLoading:true,
    Projects: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROJECT:
            var Project = action.payload;
            return {...state, Projects: state.Projects.concat(Project)};
        case ActionTypes.PROJECTS_LOADED:
            return {...state, isLoading:false};
        default:
            return state
    }
}