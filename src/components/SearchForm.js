import React, { useState, useEffect } from 'react'
import { fetchRecipes } from '../actionTypes/functions'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import  { getRecipesSuccess, getRecipesError } from '../actionTypes/asyncActions'
import { FiSearch } from 'react-icons/fi'
import '../styles/searchForm.css'
import { selectStyles } from '../styles/selectStyles'

const SearchForm = () => {
    const [diet, setDiet] = useState('balanced')  
    const options = [
        {value: 'balanced', label: 'balanced'},
        {value: 'high-protein', label: 'high-protein'},
        {value: 'low-fat', label: 'low-fat'},
        {value: 'low-carb', label: 'low-carb'}
    ]
    const handleSelectChange = (obj) => {
        setDiet(obj.label)
    }

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()
        fetchRecipes(e.target.ingredient.value, diet).then(data => {
            dispatch(getRecipesSuccess(data))
            if (data.length === 0) {
                dispatch(getRecipesError(`We didn't find any recipe. Please search for something else!`))
            }
        }).catch(error => {
            dispatch(getRecipesError('No recipes found. Please try again later!'))
        })
    }

    return <div className="search-comp">
        <form className="search-form" onSubmit={onFormSubmit}>
            <div className="filters">
                <label className="search-input">
                    <FiSearch className="search-icon"/>
                    <input
                        autoComplete="off"
                        id="ingredient"
                        type="text"
                        className="search-input"
                        placeholder="food / ingredient"
                    />
                </label>
                <label className="select-diet">
                    <Select
                        styles={selectStyles}
                        placeholder="diet"
                        className="select"
                        options={options}
                        onChange={handleSelectChange}
                    />
                </label>
            </div>
            <button
                type="submit"
                className="search-button"
            >Search</button>
        </form>
    </div>
}

export default SearchForm