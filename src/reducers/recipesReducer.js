import { getID } from "../actionTypes/functions"

const initialState = {
    data: [],
    error: ''
}

const recipesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_RECIPES_SUCCESS':
            return {
                data: action.payload.map(recipe => {
                    return ({
                        id: getID(),
                        isFavorite: false,
                        title: recipe.recipe.label,
                        calories: recipe.recipe.calories,
                        time: recipe.recipe.totalTime,
                        image: recipe.recipe.image,
                        ingredients: recipe.recipe.ingredientLines,
                        url: recipe.recipe.url,
                        source: recipe.recipe.source,
                        healthLabels: recipe.recipe.healthLabels
                    })
                }),
                error: ''
            }
        case 'FETCH_RECIPES_ERROR':
            return {
                data: [],
                error: action.payload
            }
        case 'MAKE_IT_FAVORITE':
            return {
                data: action.payload.recipes.map(recipe => {
                    if (recipe.id === action.payload.id){
                        return {
                            id: recipe.id,
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
                    }else{
                        return recipe
                    }
                }),
                error: ''
            } 
        case 'MAKE_IT_NOT_FAVORITE':
            return {
                data: action.payload.recipes.map(recipe => {
                    if (recipe.id === action.payload.id){
                        return {
                            id: recipe.id,
                            isFavorite: false,
                            title: recipe.title,
                            calories: recipe.calories,
                            time: recipe.time,
                            image: recipe.image,
                            ingredients: recipe.ingredients,
                            url: recipe.url,
                            source: recipe.source,
                            healthLabels: recipe.healthLabels
                        }
                    }else{
                        return recipe
                    }
                }),
                error: ''
            }    
        default:
            return state
    }
}

export default recipesReducer