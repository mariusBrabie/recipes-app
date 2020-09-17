export const fetchRecipes = async (ingredient, diet) => {
    let APP_ID = "9aee4925"
    let APP_KEY = "60b3d47276004537c3eca08842dfe07a"
    const response = await fetch(
        `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${ingredient}&from=0&to=12&diet=${diet}`
    )
    const data = await response.json()
    return data.hits
}

export const getID = () => {
    return Math.floor(Math.random() * 9999999999)
}

export const getLocalStorageFavorites = () => {
    const recipesJSON = localStorage.getItem('localStorageFavorites')   
    try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    }catch (e){
        return []
    }
}

export const saveLocalStorageFavorites = (favorites) => {
    localStorage.setItem('localStorageFavorites', JSON.stringify(favorites))
}