import React from 'react'
import Hero from '../components/customer/subComponents/Hero';
import Banner from '../components/customer/subComponents/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/customer/subComponents/Services';
import FeaturedRooms from '../components/customer/subComponents/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Hotel Sobana" subtitle="Udawalawe Ayurvedic Resort">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
