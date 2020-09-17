import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import RecipeBoard from './RecipeBoard'
import '../styles/recipes.css'

const Recipes = () => {
    const fetchedRecipes = useSelector(state => state.recipes)
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        setRecipes(fetchedRecipes.data)
    },[fetchedRecipes])

    return <div className="recipes">
        {
            recipes.length === 0 ? <p className="err">{fetchedRecipes.error}</p> : recipes.map(recipe => {
                return <div key={recipe.id}> 
                    <RecipeBoard
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
            })
        } 
    </div>
}

export default Recipes