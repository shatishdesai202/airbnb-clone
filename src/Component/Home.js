import React from 'react';
import Banner from './Banner';
import './Home.css'
import Card from './Card';
import Image1 from '../Images/airbnb.png';

function Home() {
    return (
        <div className="home">
            <Banner/>

            <div className="home__section">
                <Card
                    src={Image1}
                    title={'something is here'}
                    description={'something'}
                />

                <Card
                    src={Image1}
                    title={'something is here'}
                    description={'something'}
                />
                
                <Card
                    src={Image1}
                    title={'something is here'}
                    description={'something'}
                />
                
            </div>

            <div className="home__section">
                <Card
                    src={Image1}
                    title={'something is here'}
                    description={'something'}
                    price={'500$ /Night '}
                />
                <Card
                    src={Image1}
                    title={'something is here'}
                    description={'something'}
                    price={'500$ /Night '}
                />
                <Card
                    src={Image1}
                    title={'something is here'}
                    description={'something'}
                    price={'500$ /Night '}
                />
                
            </div>

        </div>
    )
}

export default Home
