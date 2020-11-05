import styled from 'styled-components'
import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

const NavTextWrap = ellipsis(styled.div``)

const VideoDetailWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .video-react-big-play-button{
        font-size: 3em;
        line-height: 1.5em;
        height: 1.5em;
        width: 1.5em;
        border: 0.06666em solid #fff;
        background-color: rgba(43, 51, 63, 0.7);
        border-radius: 50%;
    }
    .video-react .video-react-big-play-button.video-react-big-play-button-center{
        margin-left: -0.75em;
    }
    .contain{
        position: relative;
        flex: 1;
    }
    .content {
        height: 100%;
        position: relative;
        padding-top: .3rem;
        .mask{
            position:absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background:rgba(0,0,0,.5);
        }
    }
    .blur{
        -webkit-filter: blur(25px); /* Chrome, Opera */
        -moz-filter: blur(5px);
        -ms-filter: blur(5px);    
        filter: blur(5px);
    }
    .floating {
        padding-right:.2rem;
        position: absolute;
        z-index: 10;
        left: 0rem;
        top: 0rem;
        padding:.3rem .2rem;
        h3 {
            font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
            font-weight: 700;
            font-style: normal;
            font-size: .16rem;
            color: #FFFFFF;
            margin-bottom: .2rem;
        }
        p {
            font-family: '微软雅黑';
            font-weight: 400;
            font-style: normal;
            color: #FFFFFF;
            margin-bottom: .3rem;
        }
        .author {
            display: flex;
            .avatar {
                width: .8rem;
                height: .8rem;
                margin-right: .15rem;
                img {
                    width: 100%;
                }
            }
            .desc {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h4 {
                    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
                    font-weight: 700;
                    font-style: normal;
                    font-size: .16rem;
                    color: #FFFFFF;
                    margin-bottom: .1rem;
                }
                span {
                    font-family: '微软雅黑';
                    font-weight: 400;
                    font-style: normal;
                    color: #FFFFFF;
                }
            }
        }
    }
`

const VideoFloting = border(styled.div``)

export {
    NavTextWrap,
    WhiteSpace,
    VideoDetailWrap,
    VideoFloting
}