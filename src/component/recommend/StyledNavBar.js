import styled from 'styled-components'

export default styled.div`
    width:100%;
    position:fixed;
    z-index:10;
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
        font-weight: bold;
        white-space: normal;
    }
`