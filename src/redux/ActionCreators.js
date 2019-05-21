import * as ActionTypes from "./ActionTypes";
import firebase from '../Firebase/firebase'

const db = firebase.firestore()

export const getProjects = () => (dispatch) => {
    firebase.firestore().collection("projects").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var project = {
                id:doc.id,
                ...doc.data()
            }
            dispatch(addProject(project))
        });
        dispatch({type:ActionTypes.PROJECTS_LOADED})
    });

}

export const getSkills = () => (dispatch) => {
    firebase.firestore().collection("skills").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var payload = {
                id:doc.id,
                ...doc.data()
            }
            dispatch(addSkill(payload))
        });
        dispatch({type:ActionTypes.SKILLS_LOADED})
    });

}


export const addSkill = (payload) => ({
    type: ActionTypes.ADD_SKILL,
    payload: payload
});

export const addProject = (payload) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: payload
});

export const updateProject = (payload) => ({
    type: ActionTypes.ADD_SKILL,
    payload: payload
});

export const updateSkill = (payload) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: payload
});
