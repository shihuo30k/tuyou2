import styled from 'styled-components'
import border from '@a/styled/border'

const TravalDetail = styled.div`
    background-color: #fff;
    .container {
        padding-top: .44rem;
    }
    .image {
        width:100%;
        img {
            width: 100%;
        }
    }
    .main {
        padding:.1rem .2rem;
        h2 {
            font-size: .2rem;
            font-weight: 600;
        }
        .type {
            width:.55rem;
            height:.2rem;
            background-color:#fd755f;
            border-radius:.04rem;
            position: relative;
            margin-bottom: .25rem;
            span {
                color: #fff;
                margin-left: .18rem;
            }
            img {
                position: absolute;
                width: .12rem;
                left: .05rem;
                top: 50%;
                margin-top:-.06rem;
            }
        }
        .bottom {
            display: flex;
            .avatar {
                width: .4rem;
                height: .4rem;
                border-radius:.2rem;
                overflow: hidden;
                margin-right: .1rem;
            }
            .name {
                display: flex;
                img {
                    width: .2rem;
                    height: .2rem;
                    margin-left: .05rem;
                }
            }
            .num {
                font-size: .12rem;
                color: #868686;
            }
            .date {
                font-size: .12rem;
                color: #868686;
            }
        }
    }

`
const ContentWrap = border(styled.div`
    padding-top: .2rem;
    padding-left: .2rem;
    padding-right: .2rem;
    font-size:.16rem;
    line-height:.4rem;
`)

export {
    TravalDetail,
    ContentWrap
}