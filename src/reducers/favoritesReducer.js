import { getLocalStorageFavorites } from '../actionTypes/functions'

const favoritesReducer = (state=getLocalStorageFavorites(), action) => {
    switch(action.type){
        case 'REMOVE_FAVORITE_RECIPE':
            return state.filter(recipe => {
                return recipe.id !== action.payload
            })
        case 'ADD_FAVORITE_RECIPE':
            return [...state, {
                id: action.payload.id,
                isFavorite: true,
                title: action.payload.title,
                calories: action.payload.calories,
                time: action.payload.time,
                image: action.payload.image,
                ingredients: action.payload.ingredients,
                url: action.payload.url,
                source: action.payload.source,
                healthLabels: action.payload.healthLabels
            }]
        case 'CHANGE_ID':
            return state.map(recipe => {
                if (recipe.title === action.payload.title && recipe.image === action.payload.image) {
                    return {
                        id: action.payload.id,
                        isFavorite: true,
                        title: recipe.title,
                        calories: recipe.calories,
                        time: recipe.time,
                        image: recipe.image,
                        ingredients: recipe.ingredients,
                        url: recipe.url,
                        source: recipe.source,
                        healthLabels: recipe.healthLabels
                    }
                }else {
                    return recipe
                }
            })     
        default:
            return state
    }
}

export default favoritesReducer