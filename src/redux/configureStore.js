import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects'
import { Skills } from './skills'
import { Experience } from './experience'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Projects: Projects,
            Skills: Skills,
            Experience: Experience
        }),
        applyMiddleware(thunk,logger)
    );

    return store
}