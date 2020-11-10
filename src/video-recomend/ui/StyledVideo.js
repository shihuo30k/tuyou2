import styled from 'styled-components'
import border from '@a/styled/border'

const VideoWrap = styled.div`
    .am-navbar-right {
        img:first-child {
            display: none;
        }
    }
`

const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

const HotVideoWrap = styled.div`
    width: 100%;
    overflow: hidden;
    ul {
        display: flex;
        width:max-content;
        li {
            width: 1.5rem;
            height: 1.3rem;
            margin-right: .1rem;
            .poster {
                width: 100%;
                overflow: hidden;
                border-radius: .05rem;
                margin-bottom: .08rem;
                img {
                    width: 100%;
                }
            }
            .content {
                width: 100%;
                text-align: center;
            }
        }
    }
`

const VideoListWrap = styled.div`
    padding: 0 .1rem;
    h2 {
        margin-top:.3rem;
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
        font-size: .2rem;
        margin-bottom: .3rem;
    }
    .author {
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
        .avatar {
            width: .6rem;
            height: .6rem;
            border-radius: 50%;
            overflow: hidden;
            margin-right: .1rem;
            img {
                width: 100%;
            }
        }
        .content {
            display: flex;
            flex:1;
            flex-direction:column;
            justify-content: space-around;
            align-items:flex-start;
            p {
                color: #949494;
            }
        }
        .all {
            color: #3FCD90;
            font-family: '微软雅黑';
            font-weight: 400;
            font-style: normal;
            line-height: .6rem;
        }
    }
    .itemList {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 48%;
            margin-bottom: .2rem;
            &:nth-child(odd) {
                margin-right: .12rem;
            }
            .listPoster {
                width: 100%;
                height: .9rem;
                border-radius: .05rem;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .listTitle {
                font-family: '微软雅黑';
                font-weight: 400;
                font-style: normal;
                color: #333333;
            }
        }
    }
`

const ItemListWrap = border(styled.ul``)



export {
    VideoWrap,
    WhiteSpace,
    HotVideoWrap,
    VideoListWrap,
    ItemListWrap
}