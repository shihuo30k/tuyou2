import styled from 'styled-components';
import border from '@a/styled/border';
import ellipsis from '@a/styled/ellipsis';

const DetailWrap = styled.div ` 
  width:100%;

  /* padding-left:.16rem; */
  .blank{
    height:.45rem; 
    padding-left:.16rem; 
  }
  .top{

    height:.6rem;
    padding-left:.16rem;
    /* overflow:hidden; */
    span:nth-child(1){
      display:block;
      font-size:.12rem;
      color: #58BC7F;
      padding:.12rem;
      background-color: rgba(236, 247, 241, 1);
      margin-top:.18rem;

    }
    .title{
      font-size:.17rem;
      color:#333;
      font-weight:700;
      padding:.22rem 0;
      overflow: hidden;
    }
    span:nth-of-type(2){
      display:block;
      font-size:.14rem;
      color:#c9c9c9;
      margin-bottom:.28rem;
    }
    .content{
      font-size:.15rem;
      color:#333;
      line-height:.3rem;
      vertical-align:middle;
      margin-bottom:.28rem;
    }
    .btn{
      display:flex;
      margin-right:.16rem;
      height:.5rem;
      p{
        width:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#58bc7f;
        font-size:.14rem;
        img{
          width:.18rem;
          height:.18rem;
          margin-right:.04rem;
        }
        svg{
            fill:#58bc7f;
          }
      }
      span{
        width:.01rem;
        line-height:.5rem;
        text-align:center;
      }
    }
    h3{
      font-size:.16rem;
      color:#333;
      margin:.4rem 0 .28rem 0;
    }
    ul{
      li{

        .liContent{
            display:flex;
            align-items:center;
            margin-bottom:.1rem;
            .liP{
            width:.4rem;
            height:.4rem;
            margin-right:.04rem;
            img{
              width:100%;
              height:100%;
              border-radius:50%;
            }
          }
          span{
            font-size:.16rem;
            color:#333;

          }
        }

        .qaContent{
          font-size:.15rem;
          color:#333;
          line-height:.32rem;
        }
        .box{
          display:flex;
          margin-top:.16rem;
          align-items:center;
          position: relative;
          p{
            padding:.04rem .12rem;
            margin-right:.14rem;
            color:#58BC7F;
            img{
              margin-right:.02rem;
            }
          }
          span{
            font-size:.12rem;
            color:#aeaeae;
            position:absolute;
            right:.2rem;
          }
        }
      
      }
    }

    .qaList{
      background-color: #f2f2f2;
      margin-bottom:.2rem;
      h4{
        font-size:.16rem;
        color:#333;
        margin:.2rem 0;
      }
      li{
        height:.44rem;
        background-color: #fff;
        padding:.22rem .12rem;
        margin:.1rem .16rem .1rem 0;
        div{
          display:flex;
          img{
            margin-right:.04rem;
          }
          p{
            color:#333;
            font-size:.16rem;
            font-weight:700;
          }
        }
        b{
          display:block;
          height:.38rem;
          color:#5e5e5e;
          font-size:.14rem;
          margin-top:.08rem;
          padding-left:.06rem;
          font-weight:normal;
        }
      }
    }
  }
 
`
const BorderDiv = border(styled.div ``)
const BorderP = border(styled.p ``)

const EllipsisDiv = ellipsis(styled.div ``)
const EllipsisP = ellipsis(styled.p ``)
const EllipsisB = ellipsis(styled.b ``)
export{
  DetailWrap,
  BorderDiv,
  BorderP,
  EllipsisDiv,
  EllipsisP,
  EllipsisB
}