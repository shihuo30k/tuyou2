import React from 'react'

import { Grid } from 'antd-mobile';


import {
    Footprints
} from '../StyledMine'


import footprint4 from '@a/images/footprint-4.jpg'

import footprint5 from '@a/images/footprint-5.jpg'


const data1= [
    {
        id:'001',
        icon: footprint4,
        title:'8个去过的旅行地',
    },
    {
        id:'002',
        icon:footprint5,
        title:'8个去过的旅行地',
    },
]

const Thailand = ()=> {
        return (
            <Footprints>
                <div className="first">
                    <h1>泰国</h1>
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

export default Thailand;