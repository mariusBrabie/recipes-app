import React from 'react'
import SearchForm from './SearchForm'
import Recipes from './Recipes'

const Home = () => {
    return <div className="container">
        <SearchForm />
        <Recipes />
    </div>
}

export default Home