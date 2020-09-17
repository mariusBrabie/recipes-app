// favorite Reducer
export const addFavoriteRecipe = (recipeDetails) => ({
    type: 'ADD_FAVORITE_RECIPE', payload: recipeDetails
})

export const removeFavoriteRecipe = (id) => ({
    type: 'REMOVE_FAVORITE_RECIPE', payload: id
})

export const changeID = (details) => ({
    type: 'CHANGE_ID', payload: details
})


// open modal
export const changeShowModal = (payload) => ({
    type: 'CHANGE_SHOW_MODAL', payload: payload
})