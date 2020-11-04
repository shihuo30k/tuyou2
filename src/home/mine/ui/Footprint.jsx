import React, { Component } from 'react';



import footprint1 from '@a/images/footprint-1.jpg'


import {
    Footprints
} from '../StyledMine'

class Footprint extends Component {
    render() {
        return (
            <Footprints>
                <div className="di">
                <div className="ditu">
                    <img src={footprint1} alt=""/>
                </div>
                </div>
            </Footprints>
        );
    }
}

export default Footprint;