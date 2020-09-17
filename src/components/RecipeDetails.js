import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addFavoriteRecipe, removeFavoriteRecipe, changeID } from '../actionTypes/actions'
import { makeNotFavorite, makeFavorite} from '../actionTypes/asyncActions'
import '../styles/recipeDetails.css'

const RecipeDetails = (props) => {
    Modal.setAppElement('#root')
    const dispatch = useDispatch()
    const fetchedRecipes = useSelector(state => state.recipes)
    const favoriteRecipes = useSelector(state => state.favorites)
    const [foundFavorite, setFoundFavorite] = useState(undefined)
    const [isChecked, setIsChecked] = useState(props.isFavorite)
    
    const details = {
        recipes: fetchedRecipes.data,
        id : props.id
    }

    useEffect(()=>{
        setFoundFavorite(favoriteRecipes.find(item => {
            return item.title === props.title && item.image === props.image
        }))
        dispatch(changeID({
            id: props.id,
            title: props.title,
            image: props.image
        }))
        dispatch(makeFavorite(details))
    },[isChecked])

    const handleChange = (e) => {
        setIsChecked(!isChecked)
        if (e.target.checked) { 
            if (!foundFavorite) {
                dispatch(addFavoriteRecipe({
                    id: props.id,
                    isFavorite: true,
                    title: props.title,
                    calories: props.calories,
                    time: props.time,
                    image: props.image,
                    ingredients: props.ingredients,
                    url: props.url,
                    source: props.source,
                    healthLabels: props.healthLabels
                }))
                dispatch(makeFavorite(details))
            }else{
                dispatch(changeID({
                    id: props.id,
                    title: props.title,
                    image: props.image
                }))
                dispatch(makeFavorite(details))
            }
        }else{
            dispatch(removeFavoriteRecipe(props.id))
            dispatch(makeNotFavorite(details))
        }
    }

    const whenCloseModal = () => {
        props.closeModal()
    }

    return (
        <Modal
            isOpen={props.isOpen}
            contentLabel="Recipe Details"
            onRequestClose={whenCloseModal}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={200}
            className="modal"
        >
            {<div className="modal-content" key={props.id}>
                <div className="modal-content-left">
                    {/* <img className="modal-img" src={props.image} alt=""></img> */}
                    <div>
                        <h2 className="board-title">{props.title}</h2>
                        <div className="kcal-time-details">
                            <span>{Math.floor(props.calories)} kcal</span>
                            {props.time > 0 && <span>Ready in {props.time} minutes</span>}
                        </div>
                    </div>
                    {props.healthLabels.length > 0 && <ul>
                        <p className="list-title">Health Labels:</p>
                        {props.healthLabels.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>}
                    <div>
                        <p className="recipe-link" id="modal-link">Check out the full recipe <a href={props.url} target="_blank">here</a></p>
                        <label className="fav-button">
                            <span>{props.isFavorite ? "Favorite" : "Add to favorites"}</span>
                            <input 
                                type="checkbox" 
                                onChange={handleChange}
                                checked={isChecked}
                            />
                            <AiFillStar className="fav-star"/>
                        </label>
                    </div>    
                </div>
                <div className="modal-content-right">
                    <ul>
                        <p className="list-title">Ingredients:</p>
                        {props.ingredients.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                    
                </div>  
            </div> }           
        </Modal>
    )
}

export default RecipeDetails