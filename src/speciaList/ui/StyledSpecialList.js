import styled from 'styled-components'
import ellipsis from '@a/styled/ellipsis'
import border from '@a/styled/border'

const NavBarEll = ellipsis(styled.span``)
const ListContentEll = ellipsis(styled.p``)
const ListPriceBor = border(styled.p``)

const SpeciaListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    background: url('http://yl.charmiot.com/travel_qygbz1/images/活动专题/u2394.jpg');
`

const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

const SpecialUlWrap = styled.div`
    padding-top: 3rem;
    flex:1;
    ul {
        width: 100%;
        padding: 0 .1rem;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 46%;
            background-color: #fff;
            margin-bottom: .1rem;
            &:nth-child(odd){
                margin-right: .1rem;
            }
            .image {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            .bottom {
                padding:.1rem;
            }
            .content {
                /* padding: .1rem; */
                margin-bottom: .1rem;
                font-family: '微软雅黑';
                font-weight: 400;
                font-style: normal;
                font-size: .12rem;
                color: #333;
            }
            .price {
                font-family: '微软雅黑';
                font-weight: 400;
                font-style: normal;
                font-size:.18rem;
                color: #CC3300;
                text-align: right;
                padding-top: .07rem;
            }
        }
    }
`

export {
    SpeciaListWrap,
    NavBarEll,
    WhiteSpace,
    SpecialUlWrap,
    ListContentEll,
    ListPriceBor
}