import React from 'react';
import NavBar from './NavBar'
import HomePage from './HomePage'
import HeadPortrait from './HeadPortrait'
import Collection from './Collection'
import MyList from './myList'
import MyList2 from './MyList2'

const MineUi = () => {
  
    return (
      <div>
        <NavBar></NavBar>
        <HomePage></HomePage>
        <HeadPortrait></HeadPortrait>
        <Collection></Collection>
        <MyList></MyList>
        <MyList2></MyList2>
      </div>
    );
  
}

export default MineUi;