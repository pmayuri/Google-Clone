import React from 'react';
import  './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";


function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/* About */}
                    <Link to="/about">About</Link>
                    {/* Store */}
                    <Link to="/Store">Store</Link>

                </div>
                <div className="home__headerRight">
                    {/* Gmail */}
                    <Link to="/Gmail">Gmail</Link>
                     {/* Images */}
                    <Link to="/images">Images</Link>
                    {/* Icon */}
                    <AppsIcon />
                    {/* Avatar */}
                    <Avatar />
                 </div>
            </div>
            <div className="home__body">

            </div>
        </div>
    )
}

export default Home
