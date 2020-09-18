import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import { fetchRecipes } from '../actionTypes/functions'
import { getRecipesSuccess, getRecipesError } from '../actionTypes/asyncActions'
import { useDispatch } from 'react-redux'
import '../styles/mobile-styles.css'

const Header = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetchRecipes('', 'balanced').then(data => {
            dispatch(getRecipesSuccess(data))
        }).catch(error => {
            dispatch(getRecipesError(''))
        })
    },[])


    return <div className="header">
        <div className="container header-container">
            <h1>BMA Recipes</h1>
            <div className="links">
                <div className="link">
                    <NavLink 
                        exact to="/"
                        activeClassName="selected" 
                    >Home</NavLink>
                </div>
                <div className="link">    
                    <NavLink
                        to="/favorites"
                        activeClassName="selected" 
                    >Favorites</NavLink>
                </div>
            </div>
        </div>
    </div>
}

export default Header