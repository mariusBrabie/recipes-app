import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FavoriteRecipe from './FavoriteRecipe'
import  { saveLocalStorageFavorites } from '../actionTypes/functions'
import { FiSearch } from 'react-icons/fi'
import '../styles/favorites.css'

const Favorites = () => {
    const favoritesRecipes = useSelector(state => state.favorites)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        saveLocalStorageFavorites(favoritesRecipes)
    },[favoritesRecipes])

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    }

    return <div  className="container">
        <label className="search-input" id="search-input-fav">
            <FiSearch className="search-icon" id="search-icon-fav" />
            <input
                autoComplete="off"
                id="search-fav"
                type="text"
                className="search-input"
                placeholder="search for your favorite recipe"
                onChange={handleInputChange}
            />
        </label>
        <div className="recipes">{
            favoritesRecipes.length === 0 ?
            <p className="err">You don't have any favorite recipes</p> : favoritesRecipes.map(recipe => {
                if (recipe.title.toLowerCase().includes(searchText.toLowerCase())){
                    return <div key={recipe.id}>
                        <FavoriteRecipe
                            title={recipe.title}
                            calories={recipe.calories}
                            time={recipe.time}
                            image={recipe.image}
                            ingredients={recipe.ingredients}
                            url={recipe.url}
                            source={recipe.source}
                            healthLabels={recipe.healthLabels}
                            id={recipe.id}
                            isFavorite={recipe.isFavorite} 
                        />
                    </div>
                }   
            })
        }</div>
    </div>
}

export default Favorites