import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Favorites from '../components/Favorites'
import Home from '../components/Home'
import Header from '../components/Header'
import NotFound from '../components/NotFound'

const AppRouter = () => <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
        
        <Route component={NotFound} />
    </Switch>

</BrowserRouter>

export default AppRouter