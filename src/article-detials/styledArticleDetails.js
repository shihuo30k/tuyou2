import styled from 'styled-components'
// import border from '@a/styled/border'





const ArticleDetailsContanier = styled.div `
  background-color:rgb(246,246,246);
  .title{
    position:fixed;
    top:0;
    padding:0 .18rem;
    width:100%;
    height:.43rem;
    display:flex;
    align-items:center;
    
    svg:first-child{
      width:.27rem;
      height:.27rem;
    }
    span{
      font-size:.13rem;
      color:#949494;
      height:.168rem;
      margin-left:.1rem;
    }
    svg:last-child{
      width:.27rem;
      height:.27rem;
      margin-left:1.9rem;
    }
  }
  .header_bg{
    background-color:rgb(255,255,255);

  }
  .topShow{
    background-color:#fff;
    height:100%;
    width:100%;
    img{
      width:100%;
      height:2.82rem;
      margin-bottom:.3rem;
    }
    p{
      padding:0 .18rem;
      font-size:.28rem;
      margin-bottom:.1rem;
    }
    .topShow-bottom{
      padding:0 .18rem;
      color:#949494;
      padding-bottom:.3rem;
      span{
        font-size:.13rem;
        color:#949494;
      }
    }
  }
  .columContent{
    background-color:#fff;
    margin-top:.5rem;
    .columContent-user{
      padding:.2rem .18rem;;
      display:flex;
      img{
        border-radius:50%;
        width:.46rem;
        height:.46rem;
      }
      .paper{
        display:flex;
        flex-direction:column;
        margin-left:.1rem;
        width:100%;
        span:first-child{
          font-size:.14rem; 
          color:#949494;
          margin-bottom:.05rem;
        }
        span:last-child{
          font-size:.16rem; 
          font-weight:600;
          
        }
      }
      .subscript-state{
        width:.9rem;
        height:.35rem;
        background-color:#f2f2f2;
        line-height:.35rem;
        text-align:center;
        font-size:.14rem;
        color:#797979;
        font-weight:600;
      }
    }
    .detailed{
      p{
        padding:0 .2rem;
        font-size:.16rem;
        line-height:.4rem;
      }
      img{
        width:100%;
        margin-top:.1rem;
      }
    }
  }
  


`











export {
  ArticleDetailsContanier

}