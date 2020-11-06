import styled from 'styled-components';
// import border from '@a/styled/border';
import ellipsis from '@a/styled/ellipsis';
const NewSelectedUiWrap = styled.div ` 
  width:100%;
  .blank{
    width:100%;
    height:.45rem;
  }
  h3{
    margin:.1rem .15rem;
    display:flex;
    justify-content:space-between;
    p{
      font-size:.2rem;
      color:#000;
    }
    span{
      display: block;
      padding: .04rem ;
      font-size:.12rem;
      color:#fff;
      background: #02db94;
      border-radius: .1rem;

    }
  }

`
const ListWrap = styled.div ` 
  width:100%;
  height:100%;
  ul{
    margin:.15rem .15rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    li{
      width:1.6rem;
      .imgs{
        width:100%;
        h5{
          font-size:.14rem;
          color:#000;
          margin:.04rem 0;
        }
      }
      .bottom{
        width:100%;
        display:flex;
        justify-content:space-between;
        p{
          display:flex;
          align-items:center;
        }
        p:nth-child(1) {
          font-size:.12rem;
          color: rgba(0,0,0,.4);
          img{
            width:.12rem;
            height:.12rem;
            border-radius:50%;
            margin-right:.02rem;
          }
        }
        p:nth-child(2){
          color:#666;
          font-size:.12rem;
          img{
            margin-right:.02rem;
          }
        }
        p:nth-child(3){
          color:#666;
          font-size:.12rem;
          img{
            margin-right:.02rem;
          }
        }
      }
    }
  }
`
const EllipsisH5 = ellipsis(styled.h5 ``)
export {
  ListWrap,
  NewSelectedUiWrap,
  EllipsisH5
}