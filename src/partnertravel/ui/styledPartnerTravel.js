import styled from 'styled-components';
import border from '@a/styled/border'
const PartnerWrap = styled.div ` 
  width:100%;
  height:100%;
  overflow:hidden;
`

const SearchWrap = styled.div `
  width:100%;
  position:fixed;
  z-index:10;
  .am-navbar-left {
      img {
          width: .3rem;
      }
  }
  .am-navbar-right {
    font-weight: 700;
    font-style: normal;
    color: #3FCD90;
    font-size:.14rem;
  }
  .am-navbar-title {
    font-weight: 700;
    font-style: normal;
    font-size: .16rem;
    color:#333;
  }
`

const SelectedWrap = border(styled.div ` 
  width:100%;
  height:.5rem;
  display:flex;

  padding-top:.45rem;
  div{
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    span{
      font-size:.14rem;
      color:#797979;
    }
    span:nth-child(2){
      color:#000;
      font-weight:700;
    }
  }
  .pub{
      width:.6rem;
      height:.6rem;
      position:fixed;
      bottom:.2rem;
      left:calc(50% - .3rem);
  }
  .pubtime{
    width:100%;
    position: absolute;
    right:0;
    top:1rem;
    z-index:999; 
    ul{
      width:100%;
      background-color: #fff;
      .active{
        color:#FF168F;
      }
      li{
        width:100%;
        height:.6rem;
        line-height:.6rem;
        text-align:center;
        font-size:.2rem;
        color:#000;
        z-index:9999;
        &:hover{
        color:#FF168F;
      }
      }
    
      
    }
  }
`)

const BorderLi = border(styled.li ``)
const PartnerListWrap = styled.div ` 
  width:100%;
  ul{
    width:100%;
    li{
      width:100;
      height:1.8rem;
      margin:0 .16rem .2rem .16rem; 
      .top{
        width:100%;
        display:flex;
        height:.6rem;
        align-items:center;
        p{
          width:.34rem;
          height:.34rem;
          margin-right:.12rem;
          img {
            width:100%;
            height:100%;
            border-radius:50%;
          }
         }
        span:first-child{
          
          font-size:.14rem;
          color:#000;
          
          
        }
        span:last-child{
          display:block;
          width:1.3rem;
          font-size:.14rem;
          color:#949494;
          padding-left:.12rem;
        }
      }
      .bottom{
        display:flex;
        p:first-child{
          width:1rem;
          height:1rem;
          margin-right:.16rem;
          img{
            width:100%;
            height:100%;
            border-radius:.1rem;
          }
          
        }
        p:last-child{
          flex:1;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          span:nth-child(1){
            font-size:.16rem;
            color:#363636;
            font-weight:800;
          }
          b{
            display:flex;
            flex-direction:column;
            img{
              margin-right:.04rem;
            }
            span{
              font-size:.14rem;
              color:#868686;
            }
            span:first-child{
              margin-bottom:.06rem;
              font-size:.14rem;
              color:#868686;
            }
          }
          
        }
      }
    }
  }
`
const AdressWrap = styled.div ` 
  width:100%;
  height:100%;
  overflow:hidden;
  position: absolute;
  top:0;
  left:0;
  z-index:99;
  background-color:#fff;
  .am-search {
    height:.5rem;
    background-color: #fff;
    }
  .am-search-input{
      height:.3rem;
      border-radius:.15rem;
      background-color:#f2f2f2;
    }
    .am-search-cancel{
      color:#000;
      font-size:.14rem;
    }
    .content{
      width:100%;
      .hot{
        font-size: .14rem;
        line-height: .3rem;
        opacity: .4;
        margin-bottom: .2rem;
        padding-left:.15rem;
      }
      ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-evenly;
        li{
          width: 25%;
          margin-bottom: .3rem;
          display:flex;
          flex-direction:column;
          /* justify-content:center; */
          align-items:center;
          p{
            width:.64rem;
            height:.64rem;
            position:relative;
            img{
              width:100%;
              height:100%;
              border-radius:50%;
            }
            b{
              position:absolute;
              top:10%;
              left:50%;
              transform:translate(-50%,50%);
              font-size:.2rem;
              color:#fff;
            }
          }
         
          span{
            font-size: .14rem;
            padding-top: .05rem;

          }
        }
      }
    }
`
export {
  PartnerWrap,
  SearchWrap,
  SelectedWrap,
  PartnerListWrap,
  BorderLi,
  AdressWrap
}