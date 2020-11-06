import styled from 'styled-components'
import ellipsis from '@a/styled/ellipsis'

const SwiperItemWrap = styled.div`
    .img {
        position:relative;
        width:100%;
        height: 2rem;
        img {
            width:100%;
        }
    }
    .type {
        position: absolute;
        left:.15rem;
        top:.3rem;
        border: 1px solid #fff;
        color:#fff;
        padding:.01rem .08rem;
        font-size: .1rem;
        border-radius: .12rem;
    }
    p {
        position:absolute;
        left:.15rem;
        top:1.3rem;
        color:#fff;
        font-size:.2rem;
        font-weight:bolder;

    }
    .icon {
        width:.12rem;
        height:.12rem;
        position:relative;
        top:.02rem;
        margin-right:.03rem;
    }
    .location {
        position:absolute;
        left:.15rem;
        top:1.6rem;
        height:.12rem;
    }
    .location .localname {
        color:#fff;
        font-size:.1rem;
    }
    .author {
        position:absolute;
        left:.8rem;
        top:1.6rem;
    }
    .author span {
        color:#fff;
        font-size:.1rem;
    }
    .am-carousel-wrap-dot-active > span {
        background-color: #1389fb
    }
`

const SwiperItemP = ellipsis(styled.p``)

const SwiperWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:53.3333333%;
    background-color:#fff;
    position: relative;
    .am-carousel-wrap-dot-active > span {
        background-color: #fff
    }
    .slider.am-carousel {
        position: static;
    }
`

const SearchWrap = styled.div`
    position:relative;
    width:100%;
    padding: .08rem .3rem;
    input {
        display:block;
        border:none;
        height: .34rem;
        margin:0 auto;
        border-radius: .17rem;
        width:100%;
    }
    .content {
        position: absolute;
        left:50%;
        top:.14rem;
        margin-left: -.27rem;
        svg {
            width:.18rem;
            height:.18rem;
            margin-right: .08rem;
            vertical-align: middle;
        }
        span {
            color: #cccccc;
            font-size: .14rem;
        }
    }
`

const NavWrap = styled.div`
    padding:0rem .1rem .2rem;
    ul {
        display: flex;
        width: 100%;
        background-color: #fff;
        border-radius: .03rem;
        justify-content: space-between;
        li {
            width: 19%;
            display: flex;
            flex-direction: column;
            padding: .1rem;
            justify-content: center;
            align-items: center;
            img {
                width: 70%;
            }
            p {
                color: #797979;
                font-size: .12rem;
            }
        }
    }
`

const SpecialWrap = styled.div`
    margin-bottom: .2rem;
    h1 {
        padding-left:.1rem;
        margin-bottom:.1rem;
        font-size: .12rem;
    }
    .specialScroll {
        width:100%;
        overflow:hidden;
    }
    ul {
        display:flex;
        width: max-content;
        li {
            margin-left:.1rem;
            width: 1.3rem;
            .images {
                position:relative;
                width: 100%;
                height: .8rem;
                overflow: hidden;
                border-radius: .08rem;
                img {
                    width: 100%;

                }
            }
            p {
                width:100%;
                text-align: center;
                position:absolute;
                color:#fff;
                font-size: .17rem;
                font-weight: bold;
                top: 50%;
                margin-top: -.08rem;
            }
            h2 {
                color: #868686;
                font-size: .12rem;
                font-weight: normal;
            }
        }
    }
`

const TabsWrap = styled.div `
    .am-tabs-tab-bar-wrap {
        margin-bottom: .1rem;
    }
    .am-tabs-pane-wrap {
        overflow: hidden;
    }
`

const TravalNoteWrap = styled.div`
    margin-bottom: .2rem;
    .images {
        width:100%;
        height: 45%;
        overflow: hidden;
        position:relative;
        img {
            width: 100%;
            margin-top: -20%;
        }
        span {
            position: absolute;
            left:.15rem;
            top:.1rem;
            border: 1px solid #fff;
            color:#fff;
            padding:.01rem .08rem;
            font-size: .1rem;
            border-radius: .12rem;
        }
    }
    .bottom {
        padding:.2rem .15rem;
        h2 {
            font-size: .16rem;
            color: #5e5e5e;
            margin-bottom: .1rem;
        }
        p {
            color: #797979;
            margin-bottom: .1rem;
        }
        .author {
            display: flex;
            justify-content: right;
            align-items: center;
            .touxiang {
                display: block;
                width: .2rem;
                height: .2rem;
                border-radius: .1rem;
                overflow: hidden;
                margin-right: .1rem;
                img {
                    width: .2rem;
                    height: .2rem;
                }
            }
            span {
                color: #949494;
                font-size: .12rem;
            }
        }
    }
`

const TabsP = ellipsis(styled.p``)

const TopicalWrap = styled.div `
    overflow: hidden;
    /* overflow-x: scroll; */
    width:100%;
    margin-bottom: .2rem;
    ul {
        display: flex;
        width:max-content;
        li {
            display: flex;
            flex-direction: column;
            margin-left: .1rem;
            width:2.5rem;
            height: 1.2rem;
            background-color: rgba(99, 199, 186, 1);
            border-radius:.05rem;
            justify-content: center;
            align-items: center;
            padding: .2rem;
            color: #fff;
        }
    }
`

const AdvertisingWrap = styled.div`
    width: 100%;
    padding:0 .1rem;
    margin-bottom: .15rem;
    .image {
        width:100%;
        position: relative;
        border-radius: .08rem;
        overflow: hidden;
        img {
            width: 100%;
        }
        span {
            position: absolute;
            left:.15rem;
            top:.1rem;
            border: 1px solid #fff;
            color:#fff;
            padding:.01rem .08rem;
            font-size: .1rem;
            border-radius: .12rem;
        }
    }
`

export {
    SwiperWrap,
    SwiperItemWrap,
    SwiperItemP,
    SearchWrap,
    NavWrap,
    SpecialWrap,
    TabsWrap,
    TabsP,
    TopicalWrap,
    AdvertisingWrap,
    TravalNoteWrap,
}