import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Section from '../Components/Section';
import Featured from '../Components/Featured';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting from $300">
                <Link to="/rooms" className="btn-primary">
                    our Rooms
                </Link>
                </Banner>
            </Hero>
            <Section/>
            <Featured/>
        </>
        )
}
