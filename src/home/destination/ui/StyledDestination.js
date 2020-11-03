import styled from 'styled-components'
import border from '@a/styled/border'


const Container = styled.div `
    div{
      width:3.75rem;
      height:.65rem;
      display:flex;
      background-color: rgba(255, 255, 255, 1);
      align-items:center;
      justify-content:center;
      line-height:.65rem;
      div{
        border-width: 0px;
        width: 320px;
        height: 33px;
        background: inherit;
        background-color: rgba(242, 242, 242, 1);
        border: none;
        border-radius: 150px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        font-family: 'FontAwesome';
        font-weight: 400;
        font-style: normal;
        color: #CCCCCC;
        line-height: 20px;
        svg{
          width:.1308rem;
          height:.138rem;
          color:#CCCCCC;
        }
        span{
          margin-left:.05rem;
        }
      }
    }
`


const ShowImg = styled.div `
  .showImg{
    width: 3.45rem;
    height: 1.2rem;
    margin-top:.1rem;
    margin-left:.15rem;
    position:relative;
    div{
      width:100%;
      height:100%;
      img{
        width:100%;
        height:100%;
        border-radius:.06rem;
      }
    }
    div{
      position:absolute;
      span{
        font-size:.2rem;
        font-weight:600;
        color:#fff;
        position:absolute;
        left:.26rem;
        top:.3rem;
      }
      svg{
        width:.16rem;
        height:.16rem;
        position:absolute;
        left:.67rem;
        top:.4rem;
      }
    }
    span{
      color:#fff;
      position:absolute;
      left:.26rem;
      font-size:.13rem;
      top:.6rem;
    }
  }
`

const RecommandContainer = styled.div `
  ul{
    display:flex;
    margin-top:.1rem;
    li{
      width: .73rem;
      height: .32rem;
      background-color:rgb(232,232,232);
      margin-left:.15rem;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:.16rem;
      svg{
        width:.12rem;
        height:.12rem;
        margin-right:.05rem;
      }
      span{
        font-size:.12rem;
        color: #6B6B6B;
      }
    }
  }

`

const AllOfCountry = styled.div `
      margin-top:.2rem;
      width: 3.45rem;
      height:.6rem;
      margin-left:.15rem;
      background: linear-gradient(90deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 1) 0%, rgba(222, 244, 232, 1) 100%, rgba(222, 244, 232, 1) 100%);
      border: none;
      border-radius: 0px;
      -moz-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.0784313725490196);
      -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.0784313725490196);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.0784313725490196);
      font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
      font-weight: 700;
      font-style: normal;
      font-size: 15px;
      color: #13BE79;
      text-align: left;
      display:flex;
      align-items:center;
      margin-bottom:.2rem;
      div{
        display:flex;
        align-items:center;
        >svg:first-child{
        margin-left:.1rem;
        }
        span{
          margin-left:.2rem;
          display:inline-block;
          line-height:.6rem;
          font-size:.15rem;
        }
        >svg:last-child{
          margin-left:1.6rem;
        }
      }
      
      `
    const InHot = 
      styled.div`
        margin-left:.15rem;
          h1{
            font-size:.2rem;
          }
          .wrapperx{
            width: 100%;
            white-space: nowrap; //让子元素超出不换行
            padding: 25px 13px;
            overflow: hidden;
            .content{
              display:flex;
              width: 9rem ;
              .active{
                background-color:rgb(41,195,134);
                color:#fff;
              }
            }
        }
    `
    const LiContainer = border(
      styled.li `
          display:flex;
          align-items:center;
          justify-content:center;
          width: .65rem;
          height: .31rem;
          font-family: '微软雅黑 Regular', '微软雅黑';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #343434;
          margin-right:.1rem;
          background-color:#fff;
              
      `
    )
    
    const AllShowContainer = styled.div`
      margin-left:.15rem;
      margin-bottom:.4rem;
      .wrapper1{
        width:100%;
        white-space: nowrap; //让子元素超出不换行
        overflow: hidden;
        .content{
          display:flex;
          width: 11rem;
          li{
            width:1.65rem;
            height:1.65rem;
            margin-left:.1rem;
            
            img{
              width:100%;
              height:100%;
              border-radius:.07rem;
            }
            span{
              position:relative;
              top:.6rem;
              left:-1.5rem;
              font-size:.16rem;
              color:#fff;
              font-weight:600;
            }
          }
        }
      }
    
    `

const VisaFreeContainer = styled.div`
      margin-left:.15rem;
      margin-bottom:.4rem;
      .title {
        font-size:.2rem;
        font-weight:600;
      }
      .wrapper2{
        margin-top:.2rem;
        width:100%;
        white-space: nowrap; 
        overflow: hidden;
        .content{
          display:flex;
          width: max-content;
          li{
            position:relative;
            width:1.65rem;
            height:1.16rem;
            margin-left:.1rem;
            img{
              width:100%;
              height:100%;
              border-radius:.07rem;
            }
            .innerContainer{
              position:absolute;
              width: 1.03rem;
              height:.7rem;
              top:.4rem;
              left:.55rem;
              display:flex;
              flex-direction:column;
              span{
                width:100%;
                display:inline-block;
                font-size:.16rem;
                color:#fff;
                font-weight:600;
              }
            }
          }
        }
      }
  `

const HotIslandContainer = styled.div`
margin-left:.15rem;
margin-bottom:.4rem;
.title {
  font-size:.2rem;
  font-weight:600;
}
.wrapper3{
  margin-top:.2rem;
  width:100%;
  white-space: nowrap; 
  overflow: hidden;
  .content{
    display:flex;
    width: max-content;
    li{
      position:relative;
      width:1.65rem;
      height:1.16rem;
      margin-left:.1rem;
      img{
        width:100%;
        height:100%;
        border-radius:.07rem;
      }
      .innerContainer{
        position:absolute;
        width: 1.03rem;
        height:.7rem;
        top:.4rem;
        left:.55rem;
        display:flex;
        flex-direction:column;
        span{
          width:100%;
          display:inline-block;
          font-size:.16rem;
          color:#fff;
          font-weight:600;
        }
      }
    }
  }
}
`

const SubjectContainer =  styled.div `
      margin-left:.15rem;
      h1{
        font-size:.2rem;
      }
      .wrapper4{
        width: 100%;
        white-space: nowrap; //让子元素超出不换行
        padding: 25px 13px;
        overflow: hidden;
        .content{
          display:flex;
          width: 4rem ;
          .active{
            background-color:rgb(41,195,134);
            color:#fff;
          }
        }
    }

`
 const SubjectLiContainer = border(
      styled.li `
          display:flex;
          align-items:center;
          justify-content:center;
          width: .81rem;
          height: .32rem;
          font-family: '微软雅黑 Regular', '微软雅黑';
          font-weight: 400;
          font-style: normal;
          font-size: .12rem;
          color: #343434;
          margin-right:.1rem;
          background-color:#fff;
              
      `
    )

    const SubjectImg = styled.div`

      padding:0 .15rem;
      ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        li{
          width:1.08rem;
          height:1.5rem;
          display:column;
          
          img{
            width:1.08rem;
            border-radius:.06rem;
            height:1.08rem;
          }
          span{
            display:inline-block;
            height:.2rem;
            font-size:.14rem;
          }
        }
      }
    
    `
export {
    Container,
    ShowImg,
    RecommandContainer,
    AllOfCountry,
    InHot,
    LiContainer,
    AllShowContainer,
    VisaFreeContainer,
    HotIslandContainer,
    SubjectContainer,
    SubjectLiContainer,
    SubjectImg
}