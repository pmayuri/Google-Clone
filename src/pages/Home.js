import React from 'react';
import  './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search';


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
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    alt=""
                />
                <div className="home__inputContainer">
                    {/*search */}
                    <Search />
                </div>
                </div>
        </div>
    )
}

export default Home
