import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from './pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import Description from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";




function SearchPage() {
    const [{term} , dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);


 console.log(data)  
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                    className="searchPage__logo"
                   
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                 alt=""
                 />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                <div 
                className="searchPage__options">
                  <div
                  className="searchPage__optionsLeft">
                      <div className="searchPage__option">
                          <SearchIcon />
                          <Link to="/all">All</Link>
                      </div>
                      <div className="searchPage__option">
                          <Description />
                          <Link to="/news">News</Link>
                      </div>
                      <div className="searchPage__option">
                          <ImageIcon />
                          <Link to="/images">Images</Link>
                      </div>
                      <div className="searchPage__option">
                          <LocalOfferIcon />
                          <Link to="/shopping">shopping</Link>
                      </div>
                      <div className="searchPage__option">
                          <RoomIcon />
                          <Link to="/maps">maps</Link>
                      </div>
                      <div className="searchPage__option">
                          <MoreVertIcon />
                          <Link to="/more">more</Link>
                      </div>
                  </div>
                
                <div className="searchPage__optionsRight">
                  <div className="searchPage__option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/tools">Tools</Link>
                </div>
                </div>
                </div>
                 </div>
                  </div>

            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage;
