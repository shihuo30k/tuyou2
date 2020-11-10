import styled from 'styled-components'
import border from '@a/styled/border';
import ellipsis from '../../../assets/styled/ellipsis';

const Container = styled.div `
  /* overflow:hidden; */
  width: 3.75rem;
  /* padding-top:.5rem; */
  position: relative;
  overflow-y:scroll;
.imgs{
  width:100%;
  padding: .2rem .15rem 0 ;
  background-color:#fefefe;
  img{
    width:100%;
    height:100%;
  }
}
  
`
const SearchWrap = styled.div  ` 
  width:100%;
  height:.5rem;
  position:fixed;
  top:0;
  z-index:10;
  .am-search{
    height:.5rem;
    
  }
 
  .am-search-input{
    width:3.2rem;
    height:.33rem;
    border-radius:.2rem;

  }
  input{
    height:.33rem;
    width:80%;
  }
`

const ImgConWrap = border(styled.div `
`
)

const TopicWrap = styled.div  `
  width: 100%;
  /* height:1.22rem; */
  background-color:#f2f2f2;
  overflow:hidden;
  padding:.15rem;
  
  ul {
    display:flex;
    background-color:#f2f2f2;
    /* width:19rem; */
    width:max-content;
    li {
      width:3.15rem;
      height:.92rem;
      padding :.15rem;
      margin-right:.14rem;
      background-color: #fff;
      display:flex;
      justify-content: space-between;
      z-index:99;
      div:first-child {
        h2{
          font-size:.13rem;
          color:#6c6c6c;

        }
        h3{
          font-size:.14rem;
          color:#1b1b1b;
 
        }
        h4{
          font-size:.12rem;
          color:#868686;
          font-weight:normal;
        }

      }
      div:last-child {
        width:.62rem;
        height:.62rem;
        img{
          width:100%;
          height:100%;
          border-radius:.1rem;
        }
      }
    }
  }
  

 `

const NavBarWrap = styled.div `
  width:100%;
  height:1rem;
  padding:.25rem 0 .25rem;
  background-color:#fff;
  ul{
      display:flex;
      justify-content: space-around;
       li{
        width:.48rem;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
          display:block;
          width:.23rem;
          height:.23rem;
          margin-bottom:.12rem;
         
          img{
            width:100%;
            height:100%;
          }
        }
        span{
          font-size:.12rem;
          color:#868686;
 
        }
      }
  }
`


const TodayTravelWrap = styled.div `
  width:100%;
  height:2.46rem;
  background-color: #fff;
  padding :.3rem .14rem .22rem;
  h2{
    color:#363636;
    font-size:.2rem;
    padding-bottom:.16rem
  }
  h4{
    display:flex;
  }
  .left{
    padding:.06rem .2rem 0 .12rem;
    p{
      width:.5rem;
      height:.5rem;
      
      img{
        width:100%;
        height:100%;
        border-radius:50%;
      }
    }
  }

  .right{
    p:nth-child(1){
      display:flex;
      justify-content:space-between;
      height:.4rem;
      span{
        color:#333;
        font-size:.14rem;
        line-height:.4rem;
        text-align:center;
      }
      i{
        display:block;
        width:.75rem;
        height:.3rem;
        font-size:.12rem;
        color:#13BE79;
        line-height:.3rem;
        text-align:center;

      }
    }
  }
  h3{
    font-size:.13rem;
    color:#6b6b6b;
    line-height:.16rem;
    padding-bottom:.06rem;
  }
  .tag{
    display:flex;
    flex-wrap:wrap;
    b{
      display:block;
      font-weight:normal;
      font-size:.11rem;
      margin-right:.1rem;
      margin-bottom:.1rem;
      padding:0 .1rem;
      height:.24rem;
      line-height:.24rem;
      text-align:center;
    }
    b:nth-child(1){
      color:#F19736;
    }
    b:nth-child(2){
      color:#1abc9c;
    }
    b:nth-child(3){
      color:#ff5918;
    }
    b:nth-child(4){
      color:#5f96ff;
    }
  }

`
const Follow  = border(styled.i `

`)

const TagWrap = border(styled.b  `


`)


const TravelWrap = styled.div `
  padding:0 .15rem .3rem .15rem;
  h2{
    font-size:.14rem;
    color:#363636;
    padding-bottom:.2rem;
  }
  div{
   
    position: relative;
    div{
      width:3.36rem;
      height:1.95rem;
      img{
      width:100%;
      height:100%;
      border-radius:.1rem;
      
      }
    }
    
    h3{
      position: absolute;
      top:.08rem;
      left:.15rem;
      font-weight: normal;
      width: .64rem;
      height:.18rem;
      line-height:.18rem;
      text-align:center;
      font-size:.1rem;
      color:#fff;
      background: linear-gradient(90deg, rgba(63, 205, 144, 1) 0%, rgba(63, 205, 144, 1) 0%, rgba(28, 189, 125, 1) 100%, rgba(28, 189, 125, 1) 100%);

    }
    h4{
      position: absolute;
      top:.08rem;
      left:.84rem;
      font-weight: normal;
      width: .78rem;
      height:.18rem;
      line-height:.18rem;
      text-align:center;
      font-size:.1rem;
      color:#fff;
      background-color: rgba(255, 115, 98, 1);
      span{
        font-family: "FontAwesome";
        font-weight: 400;
      }
    }
    h5{
      position: absolute;
      line-height:.21rem;
      left:.16rem;
      bottom:.1rem;
      right:.54rem;
      color:#fff;
      font-size:.14rem;
    }
  }
`


const PartnerTravelWrap = styled.div `
  width: 100%;
  height:2.94rem;
  background-color: #f2f2f2;
  .top{
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:.24rem .14rem;
    h3{
      font-size:.2rem;
      color:#363636;
    }
    b{
      display:block;
      width:.97rem;
      height:.33rem;
      line-height:.33rem;
      text-align:center;
      color:#13be79;
    }
  }
  .Partnerwrap{
    width:100%;
    overflow:hidden;
    padding-left:.16rem;
    ul{
      display:flex;
      width:max-content;
      /* width:11rem; */
      li{
        width:1.6rem;
        height:1.94rem;
        margin-right:.12rem;
        div:nth-child(1){
          width:100%;
          height:75%;
          position: relative;
          p{
            width:100%;
            height:100%;
            img {
              width:100%;
              height:100%;
            }
          }
          h3{
            position: absolute;
            top:.1rem;
            left:.12rem;
            display:flex;
            justify-content:flex-start;
            flex-wrap:wrap;
            b{
              display:block;
              height:.12rem;
              line-height:.12rem;
              text-align:center;
              font-size: .12rem;
              color:#fff;
              padding:0 .06rem;
              margin:0 .06rem .08rem 0;
            }
          }
          h4{
            position: absolute;
            left:50%;
            top:50%;
            font-size: .16rem;
            color:#fff;
            transform:translate(-50%,-50%);
          }
          h5{
            position: absolute;
            left:50%;
            top:65%;
            font-size: .12rem;
            color:#fff;
            transform:translate(-50%,-50%);
          }
        }
        div:last-child{
          width:100%;
          height:25%;
          background-color: #fff;
          p{
            width:100%;
            height:100%;
            font-size: .13rem;
            color:#1b1b1b;
            display:flex;
            justify-content:center;
            align-items:center;

          }
        }
      }
    }
  }
`
const  PartnerTravelFllow = border(styled.b ``)

const AuthorWraper = styled.h4 `

display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 .16rem;
    height:.46rem;
    width:100%;
    div:first-child{
      font-size:.14rem;
      font-weight:bold;
      color:#363636;
    }
    div:last-child{
      font-size:.14rem;
      font-weight:normal;
      color:#13BE79;
    }
`

const AuthorWrap = styled.div  `
  width:100%;
  height:2.34rem;
  background-color: #f2f2f2;
  overflow: hidden;
  ul{ 
    background-color: #f2f2f2;
    display:flex;
    width:max-content;
    /* width:6rem; */
    li{
      width:1.6rem;
      height:2.04rem;
      background-color: #fff;
      margin-right:.1rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      h2{
        width:.5rem;
        height:.5rem;
        img{
          width:100%;
          height:100%;
          border-radius:50%;
        }
      }
      h3{
        font-size:.14rem;
        color:#333;
        padding-top:.16rem;
      }
      p{
        font-size:.12rem;
        color:#868686;
        padding-bottom:.18rem;
      }
      i{
        display:block;
        width:1.3rem;
        height:.34rem;
        line-height:.34rem;
        text-align:center;
        color: #13BE79;
        font-size:.13rem;
      }
    }
  }


`

const TravelNotesWrap = styled.div `
  width:100%;
  background-color: #fff;
  h2{
    font-size:.2rem;
    color:#363636;
    padding:.32rem 0 .1rem .16rem;
  }
  .TravelNotesUl{
    width:100%;
    li:last-child{
      border:0;
    }
    li{
      width:100%;
      height:1.6rem;
      padding:.16rem .22rem .16rem .16rem;

      .aa{
        display:flex;
        margin-bottom:.16rem;
        p:first-child{
          width:1.25rem;
          height:.9rem;
          padding-right:.16rem;
          img{
            width:100%;
            height:100%;
            border-radius:.06rem;
          }

        }
        p:last-child{
          width:60% ;
          font-size:.16rem;
          height:80%;
          color:#333;
        }
      }
      div:last-child{
        width: 100%;
        height:.33rem;
        display:flex;
        
        h3{
          width: 70%;
          display:flex;
          font-weight:normal;
          align-items:center;
          p{
            width: .2rem;
            height:.2rem;
            margin-right:.04rem;
            img{
              width: 100%;
              height:100%;
              border-radius:50%;
            }
            
          }
          i{
              font-size:.12rem;
              color:#868686;
              font-weight:normal;
            }
            em{
              font-size:.12rem;
              color:#868686;
              font-weight:normal;
              span{
                color:#13BE79;
                font-size:.12rem;
              }
            }
        }
        h4{
          width: 30%;
          display:flex;
          font-weight:normal;
          display:flex;
          div{
            width: 50%;
            display:flex;
            height:.33rem;
            align-items:center;
            font-size:.12rem;
            color:#868686;
         .svg{
              width: .15rem;
              height:.12rem;
              margin-right:.06rem;
            }
          }

        }
      }
    }
  }

`



const BorderLi = border(styled.li  ``)
const Ellipsis = ellipsis(styled.p ``)
export {
    Container,
    ImgConWrap,
    TopicWrap,
    NavBarWrap,
    TodayTravelWrap,
    Follow,
    TagWrap,
    TravelWrap,
    PartnerTravelWrap,
    PartnerTravelFllow,
    AuthorWrap,
    AuthorWraper,
    TravelNotesWrap,
    BorderLi,
    Ellipsis,
    SearchWrap
}