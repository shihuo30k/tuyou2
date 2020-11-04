import React from 'react'

import { Grid } from 'antd-mobile';


import {
    Footprints
} from '../StyledMine'


import footprint6 from '@a/images/footprint-6.jpg'

import footprint7 from '@a/images/footprint-7.jpg'


const data1= [
    {
        id:'001',
        icon: footprint6,
        title:'8个去过的旅行地',
    },
    {
        id:'002',
        icon:footprint7,
        title:'8个去过的旅行地',
    },
]

const Thailand = ()=> {
        return (
            <Footprints>
                <div className="first">
                    <h1>日本</h1>
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