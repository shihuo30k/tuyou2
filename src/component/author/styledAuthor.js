import styled from 'styled-components'
import border from '@a/styled/border';


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
    /* width:max-content; */
    width:6rem;
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
const Follow  = border(styled.i `

`)

export{
  Follow,
  AuthorWrap,
  AuthorWraper,
}