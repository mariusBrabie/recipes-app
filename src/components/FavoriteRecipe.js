import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeNotFavorite } from '../actionTypes/asyncActions'
import { removeFavoriteRecipe } from '../actionTypes/actions'
import '../styles/favoriteBoard.css'

const FavoriteRecipe = (props) => {
    const dispatch = useDispatch()
    const fetchedRecipes = useSelector(state => state.recipes)
    
    const details = {
        recipes: fetchedRecipes.data,
        id: props.id
    }

    const whenRemoveFavorite = () => {
        dispatch(makeNotFavorite(details))
        dispatch(removeFavoriteRecipe(props.id))
    }

    return <div className="favorite-board">
        <div className="favorite-content">
            <div className="left">
                <div>
                    <img className="board-img" src={props.image} alt=""/>
                    <h2 className="board-title">{props.title}</h2>
                    <div className="kcal-time-details">
                        {props.time > 0 && <p>Ready in {props.time} minutes</p>}
                        <p>{Math.round(props.calories)} kcal</p>
                    </div>
                </div>
                <div className="left-sec-div">
                    <p className="recipe-link">Check out the full recipe <a href={props.url} target="_blank">here</a></p>
                    <button className="remove-button" onClick={whenRemoveFavorite}>Remove from favorites</button>
                </div>
            </div>
            <div className="right">
                <ul>
                    <p>Ingredients:</p>
                    {props.ingredients.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <ul>
                    <p>Health Labels:</p>
                    {props.healthLabels.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>            
    </div>            
}

export default FavoriteRecipe