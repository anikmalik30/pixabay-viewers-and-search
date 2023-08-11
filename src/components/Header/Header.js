import React, { useState } from "react";
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pixabay-logo.svg/2560px-Pixabay-logo.svg.png"
          alt="pixabay"
        />
        <div className="header__search">
          <SearchOutlinedIcon/>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
      <div className="header__right">
        
      </div>
    </div>
  );
};

export default Header;
