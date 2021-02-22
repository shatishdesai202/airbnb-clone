import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from 'react-router-dom';


function Banner() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">


            <div className="banner__search">
                <Button onClick={ () => setShowSearch(!showSearch)  } className="search__date" variant="outlined"> { showSearch ? 'hide' : 'Search Date'} </Button>                   
            </div>

            { showSearch && <Search/> }

            <div className="banner__info">
                <h2>go out and see wonderful world</h2>
                <br/>
                <h4>You should not give up and we should not allow the problem to defeat us.</h4>
                <h5 className="kalam__quote" >- A.P.J Kalam</h5>
                    
                    <Button onClick={ ()=> history.push('/search') } variant='outlined'>Explore World</Button>
            
            </div>
        </div>
    )
}

export default Banner
