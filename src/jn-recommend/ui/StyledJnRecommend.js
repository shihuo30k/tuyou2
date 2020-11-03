import styled from 'styled-components'
import border from '@a/styled/border'

const JnContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction:column;
    overflow: hidden;
    
    .am-navbar-left {
        position:relative;
        z-index:2;
    }
    .am-navbar-right {
        display:none;
    }
    .am-navbar-title {
        color:#3fcd90;
        position: relative;
        left:-2rem;

    }
`
const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

const JnGuideWrap = border(
    styled.div`
        flex:1;
        display:flex;
        height: 100%;
        ul {
            width: 1rem;
            
        }
        .content {
            flex:1;
            height: 100%;
            overflow-y: scroll;
            .addressList {
            }
        }
`)

const JnGuideLiWrap = border(
    styled.li`
        background-color: #f6f5f5;
        width: .6rem;
        /* height: .3rem; */
        padding: .1rem .2rem;
        font-size: .16rem;
        text-align: center;
        line-height:.26rem;
        &.active {
            background-color: #fff;
        }
    `
)

const AddressListWrap = styled.div`
    overflow-y:scroll;
    /* height: 10rem; */
    padding:.1rem 0 .1rem .1rem;
    .subList {
        margin-bottom: .1rem;
    }
    h3 {
        font-weight: normal;
        color: #999;
        margin-bottom: .1rem;
    }
    .ctlist {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
            width: .79rem;
            margin-right:.09rem;
            margin-bottom: .1rem;
            .image {
                width:100%;
                height: .79rem;
                border-radius: .05rem;
                overflow: hidden;
                img {
                    width:100%;
                    height: 100%;
                }
            }
            p {
                text-align: center;
                padding-top: .05rem;
            }
            .text {
                width: .79rem;
                margin-right:.09rem;
                margin-bottom: .1rem;
                background-color: #f7f7f7;
                padding: .05rem 0;
                text-align: center;
                overflow:hidden;
                white-space: nowrap;
                border-radius: .03rem;
            }
        }
    }
`
export {
    JnContainer,
    WhiteSpace,
    JnGuideWrap,
    JnGuideLiWrap,
    AddressListWrap
}