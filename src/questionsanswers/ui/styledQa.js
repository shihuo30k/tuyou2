import styled from 'styled-components';
import border from '@a/styled/border';
import ellipsis from '@a/styled/ellipsis';


 const QaUiWrap =  styled.div `
  width:100%;
  height:100%;
  background-color: #f2f2f2;
  /* .am-pull-to-refresh-content 
{
    transform: none!important;
  } */
  
 `
 const SearchWrap = styled.div `  
    width:100%;
    position:fixed;
    z-index:10;
    display:flex;
    justify-content:flex-end;
    background-color:#fff;
    p{
      width:.5rem;
      line-height:.5rem;
      text-align:center;
    
      img{
        width:.27rem;
        height:.27rem;
      }
    }
    .am-search {
      width:85%;
      height:.5rem;
      background-color: #fff;
      }

      .am-search-input{
        height:.33rem;
        border-radius:.15rem;
        background-color:#f2f2f2;
      }
      .am-search-cancel{
        color:#1ABC9C;
        font-size:.14rem;
      }
 `
 
 
 const SelectedQAWrap = styled.div ` 
    width:100%;
    height:100%;
    position:absolute;
    top:.5rem;
    .am-tab-bar-tab{
      height:100%;
      position:relative;
    }
    .am-tab-bar-tab-icon{
      position:absolute;
      bottom:0;
    }
    .am-tab-bar-tab-title{
      font-size:.14rem;
    }
 `
 

 const SelectedQA1Wrap = styled.div ` 
    width:100%;
    .nations{
      display:flex;
      flex-wrap:wrap;
      padding:.16rem;
      justify-content:space-around;
      p{
        width:28%;
        height:.36rem;
        line-height:.36rem;
        text-align:center;
        margin-bottom:.16rem;
      }
    } 
 `
 const BorderP = border(styled.p  ``)
 const BorderDiv = border(styled.div ``)
 const QAContent = styled.ul `
  width:100%;
  
 li{ 
  background-color: #fff;
  padding: 0 .1rem 0 .16rem;
  margin-bottom:.12rem;
   h2{
    font-size:.16rem;
    color:#333;
    padding:.26rem 0 .14rem 0;
  }
  h3{
    width:92%;
    height:1.13rem;
    img{
      width:3.45rem;
      height:100%;
      border-radius:.1rem;
    }
  }
  h4{
    font-size:.14rem;
    color:#5e5e5e;
    font-weight: normal;
    margin: .08rem 0 .26rem 0;
  }
  h5{
    font-weight: normal;
    display:flex;
    justify-content:space-between;
    font-size:.12rem;
    color:#bcbcbc;
    padding-bottom:.24rem;
    .name{
      font-size:.12rem;
      color:#bcbcbc;
      display:flex;
      p{
        width:.44rem;
        height:.16rem;
        line-height:.16rem;
        text-align:center;
        background:rgba(98, 193, 118, 1);
        color:#fff;
        font-size:.12rem;
        margin-left:.08rem;
        border-radius:.06rem;
      }
    }
    .thumb{
      display:flex;
      div{
        display:flex;
        p{
          width:.15rem;
          height:.15rem;
          margin-right:.06rem;
          img{
            color:#bcbcbc;
          }
        }
      }
      div:first-child{
        margin-right:.12rem;
      }
    }
  }}
 
 `
 const Ellipsis = ellipsis(styled.h4 ``)
 

 export {
   QaUiWrap,
   SearchWrap,
   SelectedQAWrap,
   SelectedQA1Wrap,
   BorderP,
   BorderDiv,
   QAContent,
   Ellipsis
 }