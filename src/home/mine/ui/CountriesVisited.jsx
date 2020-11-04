import React from 'react'

import { Grid } from 'antd-mobile';


import {
    Footprints
} from '../StyledMine'


import footprint2 from '@a/images/footprint-2.jpg'

import footprint3 from '@a/images/footprint-3.jpg'


const data1= [
    {
        id:'001',
        icon: footprint2,
        title:'8个去过的旅行地',
    },
    {
        id:'002',
        icon:footprint3,
        title:'8个去过的旅行地',
    },
]

const CountriesVisited = ()=> {
        return (
            <Footprints>
                <div className="first">
                    <h1>法国</h1>
                <Grid data={data1}
                    className="first1"
                    columnNum={2}
                    renderItem={dataItem => (
                        <div className="first2">
                        <img src={dataItem.icon} alt=""/>
                        <div className="first3">
                            <span>{dataItem.title}</span>
                        </div>
                        </div>
                    )}
                />
                </div>
            </Footprints>
        );
    }

export default CountriesVisited;