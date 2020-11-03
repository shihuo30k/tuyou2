import styled from 'styled-components'

const Container = styled.div `
    header {
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        font-size: .16rem;
        color: #fff;
        background-color: #2ac383;
    }
    .NavBar{
        svg{
            width:.3rem;
            height:.3rem;
            fill:#13be79;
        }
    }
    
    .list-item{
        line-height:1em;
        text-align:center;
        width:100%;
        height:.6rem;
        position:relative;
        svg{
            position:absolute;
            width:.35rem;
            height:.35rem;
            fill:#13be79;
            padding-top:.25rem;
            top:.1rem;
            padding:0;
            margin:0;
        }
        span{
            padding-left:.4rem;
        }
    }

    ul{
        width:100%;
        height:1.3rem;
        background-color:#fff;
        display:flex;
        margin-bottom:.05rem;
        >li{
            flex:1;
        }
        li:nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li:nth-child(2){
            color:#333333;
            text-align:left;
            margin-top:.3rem;
            font-size:.18rem;
            font-weight:600;
            span{
                display:block;
                font-size:.10rem;
                color:#a9b4b3;
            }
        }
        li:nth-child(3){
            text-align:center;
            margin-top:.3rem;
            font-size:.14rem;
            color:#333333;
        }
    }


    .Collection{
        margin-top:.05rem;
        margin-bottom:.05rem;
        .Coll1{
            width:100%;
            height:.5rem;
            svg{
                margin-top:.05rem;
                width:.3rem;
                height:.3rem;
                fill:#13be79;
                margin-bottom:.05rem;
            }
        }
        .Coll2{
            width:100%;
            color:#434343;
        }
    }


    .myList{
        width:100%;
        margin-bottom:.05rem;
        .List1,.List2{
            display:flex;
            width:100%;
            border:none;
            height:.6rem;
            justify-content: center;
            align-items: center;
            padding-left:.2rem;
            svg{
                width:.3rem;
                height:.3rem;
                fill:#13be79;
            }
            .List1-1,.List1-2{
                width:100%;
                height:100%;
                border:none;
            }
        }
    }

    .myList2{
        width:100%;
        .List3,.List4,.List5,.List6,.List7,.List8{
            display:flex;
            width:100%;
            height:.6rem;
            justify-content: center;
            align-items: center;
            padding-left:.2rem;
            svg{
                width:.3rem;
                height:.3rem;
                fill:#13be79;
            }
            .List1-3,.List1-4,.List1-5,.List1-6,.List1-7,.List1-8{
                width:100%;
                height:100%;
            }
        }
    }

`

export {
    Container
}