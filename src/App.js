import React from 'react';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import SearchPage from './Component/SearchPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

    return (
        <div className='app'>
            <Router>
                
                <Header/>

                <Switch>

                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/search" exact>
                    <SearchPage/>
                </Route>

                </Switch>


                <Footer/>

            </Router>
    
        </div>
    )

}

export default App
