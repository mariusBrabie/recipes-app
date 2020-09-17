import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import recipesReducer from '../reducers/recipesReducer' 
import favoritesReducer from '../reducers/favoritesReducer'

export default () => {
    const rootReducer = combineReducers({
        recipes: recipesReducer,
        favorites: favoritesReducer
    })
    return createStore(rootReducer, applyMiddleware(thunk))
}