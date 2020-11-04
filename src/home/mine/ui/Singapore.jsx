import React from 'react'

import { Grid } from 'antd-mobile';


import {
    Footprints
} from '../StyledMine'


import footprint8 from '@a/images/footprint-8.jpg'

import footprint9 from '@a/images/footprint-9.jpg'


const data1= [
    {
        id:'001',
        icon: footprint8,
        title:'8个去过的旅行地',
    },
    {
        id:'002',
        icon:footprint9,
        title:'8个去过的旅行地',
    },
]

const Singapore = ()=> {
        return (
            <Footprints>
                <div className="first">
                    <h1>新加坡</h1>
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

export default Singapore;