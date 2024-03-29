import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from "react-router-dom";
import RoomContainer from '../Components/RoomContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}

export default Rooms;
