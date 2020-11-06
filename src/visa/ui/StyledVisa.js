import styled from 'styled-components'

const VisaContainer = styled.div`



`

const TopChangeContainer = styled.div`
  position:absolute;
  top:.44rem;
  width:100%;
  .selectMask_box{
    .changeUl{
    color: rgba(0,0,0,.8);
    width:100%;
    height:.47rem;
    display: flex;
    padding: 0.06rem 0.15rem 0;
    box-sizing: border-box;
    z-index: 9;
    border-bottom: 1px solid rgba(0,0,0,.1);
    background-color: #fff;
    li{
      height: .38rem;
      line-height: .38rem;
      text-align: center;
      border: 1px solid transparent;
      flex:1;
    }
    .active-li{
      border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) #fff;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    li:after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI3cHgiIHZpZXdCb3g9IjAgMCAxMCA3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4zICg2NzI5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5LiLIOaLiTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNCI+CiAgICAgICAgPGcgaWQ9Iuexu+ebruetm+mAiSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzOC4wMDAwMDAsIC0yNTguMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSLkuIst5ouJIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzguMDAwMDAwLCAyNTguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS43NDcyNzc0MSwxLjQyNjA2NTE2IEw1LjU5MDE0NDc5LDYuNDIyMzA1NzYgQzUuNDQxMDMzODgsNi41Nzc2MzkzOCA1LjIyNjA4OTk2LDYuNjY2NjczMjMgNS4wMDAyMTMxMyw2LjY2NjY2NjY3IEM0Ljc3NDM2OTIyLDYuNjY2NjY2NjcgNC41NTk0NzUzMiw2LjU3NzY5NDI0IDQuNDEwMjgxNDcsNi40MjIzMDU3NiBMMC4yNTMxNDg4NDUsMS40MjYwNjUxNiBDMC4wMDk1MTExNzYyLDEuMTkwNDc2MTkgLTAuMDY1NzcwMTI2MiwwLjg0NzExNzc5NCAwLjA2MDE1NDk2MTIsMC41NDM4NTk2NDkgQzAuMTg2MDgwMDQ5LDAuMjQwNjAxNTA0IDAuNDg5OTQyNzU5LDAuMDI4ODIyMDU0OSAwLjg0MzA4MDUwNCwwIEw5LjE1MzIzOTUsMCBDOS41MDc3NDU5OSwwLjAyNzU2ODkyMjMgOS44MTI5Nzc0NiwwLjIzODA5NTIzOCA5LjkzODkwMjU0LDAuNTQyNjA2NTE2IEMxMC4wNjYxOTY0LDAuODQ3MTE3Nzk0IDkuOTkwOTE1MDgsMS4xODkyMjMwNiA5Ljc0NzI3NzQxLDEuNDI2MDY1MTYgWiIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    background-size: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-left: 4px;
    }
  
  }
    .topMenu{
      background-color: #fff;
      min-height: .8rem;
      max-height: calc(100vh - 166px);
      overflow: auto;
      
      div:first-child{
        div{
          padding: .1rem .15rem .2rem;
          h2{
            font-size: 12px;
            color: rgba(0,0,0,.4);
            line-height: 14px;
          }
          ul{
            display: -webkit-box;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            li{
              padding: 0.05rem 0.04rem;
              background-color: rgba(45,73,46,.06);
              border-radius: 0.03rem;
              color: rgba(0,0,0,.8);
              text-align: center;
              font-size: 0.13rem;
              margin-top:0.1rem;
              margin-right: 4%;
              width: 21%;
              box-sizing: border-box;
              overflow: hidden;
              white-space: nowrap;
              word-break: break-all;
              text-overflow: ellipsis;
            }
          }
        }
      }
      div:nth-child(2){
        div{
          padding:.1rem .1rem .1rem;
          h2{
            font-size: 12px;
            color: rgba(0,0,0,.4);
            line-height: 14px;
          }
          ul{
            display: -webkit-box;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            li{
              padding: 0.05rem 0.04rem;
              background-color: rgba(45,73,46,.06);
              border-radius: 0.03rem;
              color: rgba(0,0,0,.8);
              text-align: center;
              font-size: 0.13rem;
              margin-top:0.1rem;
              margin-right: 3%;
              width: 22%;
              box-sizing: border-box;
              overflow: hidden;
              white-space: nowrap;
              word-break: break-all;
              text-overflow: ellipsis;
            }
            
          }
        }
      }
      div:nth-child(3){
        ul{
          .sort-one , .sort-two{
            height: .45rem;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0,0,0,.1);
            line-height: .45rem;
            text-indent:.2rem;
            position: relative;
          }
          .active1:after {
            content: "";
            width: 16px;
            height: 11px;
            position: absolute;
            right: 15px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMzIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lr7nlj7c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5o6S5bqP562b6YCJIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjg5LjAwMDAwMCwgLTM0MC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IuWvueWPtyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjg5LjAwMDAwMCwgMzQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjMwMDcyNjUsMjEuMDUyNjMxNiBDMTAuOTI3NzkzOCwyMS4wNTI2MzE2IDEwLjU1NDc5NTYsMjAuOTE3ODY1NSAxMC4yNzIxNzU2LDIwLjY0NzI3NjEgTDAuNDI3MDcxMzI5LDExLjI5MzY4ODEgQy0wLjE0MjM1NzExLDEwLjc1MTU3NjQgLTAuMTQyMzU3MTEsOS44ODAwMTIyMyAwLjQyNzA3MTMyOSw5LjMzNzkwMDUzIEMwLjk5NDQwNTU1OSw4Ljc5OTc2ODk5IDEuOTE1NzU5MjMsOC43OTk3Njg5OSAyLjQ4MjAxMzYzLDkuMzM3OTAwNTMgTDExLjMwMTc0MDksMTcuNzE3MTI0MSBMMjkuNTE5MDMzNSwwLjQwNjU4Mzc3OCBDMzAuMDg0MjczNSwtMC4xMzU1Mjc5MjYgMzEuMDA2Njc0MywtMC4xMzU1Mjc5MjYgMzEuNTcyOTI4NywwLjQwNjU4Mzc3OCBDMzIuMTQyMzU3MSwwLjk0NjcwNTM5NiAzMi4xNDIzNTcxLDEuODIwMjU5NjEgMzEuNTcyOTI4NywyLjM2MDM4MTIyIEwxMi4zMjkyMTIxLDIwLjY0OTI5NzIgQzEyLjA0NDQ5NzgsMjAuOTE3ODY1NSAxMS42NzM2NTkzLDIxLjA1MjYzMTYgMTEuMzAwNjYxMSwyMS4wNTI2MzE2IEwxMS4zMDA3MjY1LDIxLjA1MjYzMTYgWiIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
            background-size: 100%;
            background-position: 50%;
            background-repeat: no-repeat;
          }
        }
      }
      div:nth-child(4){
        div{
          padding: .1rem .15rem .2rem;
          h2{
            font-size: 12px;
            color: rgba(0,0,0,.4);
            line-height: 14px;
          }
          p{
            display:flex;
            justify-content:space-between;
            span{
              font-size: 12px;
              color: rgba(0,0,0,.4);
              line-height:.14rem;
            }
          }
          
          ul{
            max-height:1.2rem;
            display: -webkit-box;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            li{
              padding: 0.05rem 0.04rem;
              background-color: rgba(45,73,46,.06);
              border-radius: 0.03rem;
              color: rgba(0,0,0,.8);
              text-align: center;
              font-size: 0.13rem;
              margin-top:0.1rem;
              margin-right: 4%;
              width: 21%;
              box-sizing: border-box;
              overflow: hidden;
              white-space: nowrap;
              word-break: break-all;
              text-overflow: ellipsis;
            }
          }
          .showMore{
            max-height:max-content;
          }
        }
       
        .reset{
          
          width: 100%;
          height: .45rem;
          border-top: 0.01rem solid rgba(0,0,0,.1);
          box-sizing: border-box;
          padding: 0.05rem 0.15rem;
          display: flex;
          background: #fff;
          justify-content:space-around;
          div:first-child{
            background-color: #fff;
            width: 1.13rem;
            border: 1px solid #11bf79;
            border-radius: 0.03rem;
            color: #11bf79;
            text-align:center;
            line-height:100%;
          }
          div:last-child{
            background-color: #11bf79;
            width:1.3rem;
            border-radius: 0.03rem;
            color: #fff;
            border: none;
            line-height:100%;
            text-align:center;
          }
        }
      }
      
  }
      .active{
        display:none;
      }
    
    .topMenu-X{
      display:none;
    }
  }
  
  .mask{
  background: rgba(0,0,0,0.4) !important;
  z-index: 10;
  height: 100vh;
  position: fixed;
  width: 100vw;
  }
  .selectMask_box{
    background: rgba(0,0,0,0);
    transition: all .2s linear;
  }
  

`

export {
  VisaContainer,
  TopChangeContainer
}