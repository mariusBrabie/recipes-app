import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'
import { useSelector } from 'react-redux'
import "../styles/recipeBoard.css"

const RecipeBoard = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const favoriteRecipes = useSelector(state => state.favorites)

    const foundFavorite = favoriteRecipes.find(item => {
        return item.title === props.title && item.image === props.image
    })

    const showModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return <div className="recipe-board">
        <div onClick={showModal}>
            <img className="board-img" src={props.image} alt=""></img>
            <h3 className="board-title">{props.title}</h3>
            <div className="kcal-time-details">
                <span>{Math.floor(props.calories)} kcal</span>
                {props.time > 0 && <span>Ready in {props.time} minutes</span>}
            </div>
        </div>
        <RecipeDetails 
            isOpen={isOpen}
            title={props.title}
            calories={props.calories}
            time={props.time}
            image={props.image}
            ingredients={props.ingredients}
            url={props.url}
            source={props.source}
            healthLabels={props.healthLabels}
            id={props.id}
            isFavorite={!!foundFavorite}
            closeModal={closeModal}
        />
    </div>
}

export default RecipeBoard