import styled from 'styled-components'
import border from '@a/styled/border'

const WorldContainer = styled.div `
  display:flex;
  flex-direction:column;
  height: 100%;
  background-color:#fff;
  
  .container{
    overflow-y:hidden;
  
    flex:1;
    display:flex;
    .left-aside{
     .active{
        width:0.98rem;
        height:.5rem;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.16rem;
        color:#363636;
        font-weight:600;
        border-left:0.02rem solid #3fcd90;
     }
    }
    .right-aside{
      flex: 1;
      background-color:#fff;
      ul{
        overflow-y:scroll;
        height:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        li{
          position:relative;
          margin-top:.1rem;
          display:flex;
          flex-wrap:nowrap;
          width:1.18rem;
          height:.79rem;
          img{
            width:100%;
            height:100%;
            border-radius:.05rem;
          }
          span{
            position:absolute;
            width:100%;
            text-align:center;
            color:#fff;
          }
          .Chinese{
            font-weight:600;
            font-size:.14rem;
            top:.22rem;
          }
          .English{
            font-weight:500;
            top:.39rem;
            font-size:.12rem;
          }
        }
      }
    }
  }

`
const TitleBorder = border(
  styled.div`
      width:100%;
      margin-left:.3rem;
      height:.6rem;
      display:flex;
      line-height:.6rem;
      align-items:center;
      svg{
        width:.27rem;
        height:.27rem;
        margin-right:.15rem;
      }
      span{
        color:#3fcd90;
        font-size:.16rem;
        font-weight:600;
      }
  

  `
)
const LiBorder = border(
  styled.li `
      width:1rem;
      height:.5rem;
      background-color:#f6f5f5;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:.16rem;
      color:#999;
    
  
  `

)

export {
  WorldContainer,
  LiBorder,
  TitleBorder
}