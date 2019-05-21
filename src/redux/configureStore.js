import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects'
import { Skills } from './skills'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Projects: Projects,
            Skills: Skills,
        }),
        applyMiddleware(thunk,logger)
    );

    return store
}