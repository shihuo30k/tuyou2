import styled from 'styled-components'

const DateSelectWrap = styled.div`
    .header {
        p {
            background-color: #fff;
            padding: 15px;
            box-shadow: 0 1px 3px rgba(0,0,0,.1);
            font-size: 16px;
            line-height: 24px;
        }
    }
    .calendar {
        padding: .1rem;
        background-color: #fff;
        margin-bottom: .1rem;
        .react-calendar__month-view__days__day--weekend {
            color:#212121;
        }
        .react-calendar__tile--now {
            background-color: #fff;
        }
        .react-calendar__tile--active {
            background: #fff;
            border: 1px solid #f46f63;
            color: #212121;
        }
    }
    h2 {
        .title {
            font-size: .14;
            font-weight: 700;
            margin-right: .1rem;
        }
        .text {
            font-size: .12rem;
            color: #ff7467;
            font-weight: 400;
        }
    }
    .num {
        background-color:#fff;
        padding: .1rem;
        h3 {
            margin-bottom: .1rem;
        }
        .middle {
            display:flex;
            justify-content: space-between;
            .left {
                color: #ff7467;
            }
            .changeNum {
                width:.9rem;
                height: .3rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                span {
                    height: .3rem;
                    width:.3rem;
                    text-align:center;
                    line-height:.3rem;
                }
                p {
                    display:flex;
                    padding-left:.1rem;
                    justify-content:space-between;
                    align-items:center;
                    background-color:#f5f5f5;
                    width:.3rem;
                    height: .3rem;
                    font-size:.3rem;    
                    line-height:.3rem;
                    color:#333;
                }
            }
        }
    }
    .footer {
        display:flex;
        .fleft {
            padding:.1rem;
            width:2.1rem;
            background-color:#737373;
            font-size:.2rem;
            color: #fff;
            span {
                font-size:.1rem;
            }
        }
        .rleft {
            background-color:#ff7467;
            flex: 1;
            font-size:.2rem;
            color: #fff;
            padding:.1rem;
            span {
                font-size:.1rem;
            }
        }
    }
`

export {
    DateSelectWrap
}