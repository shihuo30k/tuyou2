import styled from 'styled-components'
import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const SectionWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow-y: scroll;
    .am-navbar-title {
        font-family: '微软雅黑 Light', '微软雅黑 Regular', '微软雅黑';
        font-weight: 250;
        font-style: normal;
        font-size: .18rem;
        color: #949494;
    }
    .am-navbar-right {
        img {
            display:none;
        }
    }
    .navbar-right {
        position: absolute;
        z-index: 11;
        right: .2rem;
        top: .12rem;
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
        font-size: .13rem;
        color: rgba(26, 188, 156, 0.8);
    }
`

const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

const SectionMainWrap = border(styled.div`
    flex: 1;
`)

const SectionTitleWrap = styled.div`
    font-family: '微软雅黑 Light', '微软雅黑 Regular', '微软雅黑';
    font-weight: 250;
    font-style: normal;
    font-size: .36rem;
    display: flex;
    flex-direction: column;
    padding: .4rem .2rem;
    .title1 {
        display: flex;
        justify-content: left;
        p {
            opacity:0;
        }
    }
    .title2 {
        display: flex;
        justify-content: left;
        p {
            opacity:0;
        }
        .blinkTag {
            width: .02rem;
            background-color: rgba(26, 188, 156, 0.8);
            margin-left: .03rem;
            animation:blink 0.8s linear infinite;
        }
        @keyframes blink {
            0%{opacity:1;}
            50% { opacity: 1;}
            50.01% { opacity: 0;}
            100% {opacity:0;}
        }
    }
    .how {
        width: 1.5rem;
        text-align: center;
        height: .3rem  ;
        line-height: .3rem;
        font-family: '微软雅黑';
        font-weight: 400;
        font-style: normal;
        font-size: .14rem;
        color: rgba(26, 188, 156, 0.8);
        border: 2px solid rgba(26, 188, 156, 0.8);
        border-radius: .17rem;
        margin-top: .4rem;
    }
`

const SrWrap = styled.div`
    h1 {
        margin-bottom: .2rem;
        padding-left: .2rem;
        font-size: .18rem;
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
    }
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
            display: flex;
            flex-direction: column;
            /* justify-content: space-around; */
            align-items: center;
            width: 43%;
            margin-left:.2rem;
            margin-bottom: .2rem;
            .avatar {
                width: .8rem;
                height: .8rem;
                overflow: hidden;
                border-radius: 50%;
                margin: .2rem 0;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h3 {
                font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
                font-weight: 700;
                font-style: normal;
                font-size: .16rem;
                line-height: .16rem;
                margin-bottom: .08rem;
            }
            p {
                height:.4rem;
                font-size: 12px;
                color: #797979;
                font-family: '微软雅黑';
                font-weight: 400;
                font-style: normal;
                padding: 0 .2rem;
                margin-bottom: .1rem;
            }
            .bottom {
                font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
                font-weight: 700;
                font-style: normal;
                font-size: .13rem;
                color: #333333;
                text-align: center;
                line-height: normal;
                background-color: #f7c7d3;
                width: 100%;
                height: .4rem;
                line-height: .4rem;
            }
        }
    }
    .more {
        width: 100%;
        text-align: center;
        color: rgba(26, 188, 156, 0.8);
    }
`

const AticalSectionWrap = styled.div`
    h2 {
        margin-bottom: .2rem;
        padding-left: .2rem;
        font-size: .18rem;
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
    }
    li {
        padding-left:.2rem;
        padding-right:.1rem;
        display: flex;
        margin-bottom: .2rem;
        justify-content:space-between;
        .image {
            width:1.5rem;
            margin-right: .1rem;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .content {
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .title {
            font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
            font-weight: 700;
            font-style: normal;
            font-size: .16rem;
        }
        .bottom {
            font-size: 12px;
            color: #A1A1A1;
            font-family: '微软雅黑';
            font-weight: 400;
            font-style: normal;
        }
    }
`

const ElliP = ellipsis(styled.p`
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
`)

const ElliDiv = ellipsis(styled.div`
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-style: normal;
    font-size: .16rem;
`)

export {
    SectionWrap,
    SectionMainWrap,
    WhiteSpace,
    SectionTitleWrap,
    SrWrap,
    AticalSectionWrap,
    ElliP,
    ElliDiv
}