import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    p {
        position: absolute;
        width: 1.4rem;
        height: .4rem;
        background-color: #f7685d;
        color: #fff;
        bottom: .6rem;
        left: 50%;
        margin-left:-.7rem;
        text-align: center;
        line-height: .4rem;
        border-radius: .05rem;
    }
`

const GuidePageWrap = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:900;
    .slider {
        width:100%!important;
    }
    .slider-slide, .slider-list, .slider-frame, .slider{
        height:100%!important;
    }
    
    img {
        width: 100%;
        height: 100%;
    }
    .slider-decorator-0 {
        bottom: 0.3rem!important;
    }
    .am-carousel-wrap-dot-active > span {
        background-color: #1389fb
    }
`

export {
    Container,
    GuidePageWrap
}