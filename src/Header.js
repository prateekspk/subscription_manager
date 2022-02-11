import React from 'react';
import styled from 'styled-components' 
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"




export default function Header() {
  return <div className='header'>
      <div className='headerLeft'>
      <img src="https://cdn-icons-png.flaticon.com/512/1573/1573420.png" alt="money" />
        <div className='headerSearch'>
            <SearchIcon/>
            <input type="text"  placeholder='Search'/>
        </div>
      </div>

      <div className='headerRight'>

      </div>
    


  </div>;
}

