import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
                <Banner title="404" subtitle="Not found">
                    <Link to="/" className="btn-primary">
                        Return to home 
                    </Link>
                </Banner>
        </Hero>

    )
}
