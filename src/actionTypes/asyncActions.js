export const getRecipesSuccess = (data) => ({
    type: 'FETCH_RECIPES_SUCCESS', payload: data
})

export const getRecipesError = (errorMessage) => ({
    type: 'FETCH_RECIPES_ERROR', payload: errorMessage
})

export const makeFavorite = (id) => ({
    type: 'MAKE_IT_FAVORITE', payload: id
})

export const makeNotFavorite = (id) => ({
    type: 'MAKE_IT_NOT_FAVORITE', payload: id
})