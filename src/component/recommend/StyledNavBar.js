import styled from 'styled-components'
import border from '@a/styled/border'

const NavBarWrap =  border(styled.div`
    width:100%;
    
    .am-navbar-left {
        img {
            width: .3rem;
        }
    }
    .am-navbar-right {
        img {
            width:.3rem;
        }

        img:first-child {
            width: .2rem;
            margin-right: .1rem;
        }
    }
    .am-navbar-title {
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
        color: #333333;
        white-space: normal;
    }
`)

const FixedContainer = styled.div`
    width:100%;
    position:fixed;
    z-index:10;
`

export {
    NavBarWrap,
    FixedContainer
}