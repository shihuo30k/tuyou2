import styled from 'styled-components';
import border from '@a/styled/border';
// import ellipsis from '@a/styled/ellipsis';

const AllSelectedUiWrap = styled.div `  
  .am-navbar-light {
    background-color: #11bf79;
    color: #fff;  
  }
  .am-navbar-title {
    color: #fff;
  }
  .am-icon-md {
    width: .3rem;
    height: .3rem;
  }
`

const AllSelectedTagWrap = styled.div ` 
  div{
    margin-top:.15rem;
    h2{
      margin-bottom: .07rem;
      padding-left: .15rem;
      font-size: .14rem;
      line-height: .18rem;
      color: #959595;
      font-weight:normal;
    }
    ul{
      display:flex;
      /* justify-content:space-around; */
      flex-wrap:wrap;
     
      li{
        width:28%;
        line-height:.34rem;
        text-align:center;
        color: #646464;
        font-size:.14rem;
        margin-bottom: .1rem;
        margin-left:.15rem;
      }
    }
  }

`
const BorderLi = border(styled.li ``)

export {
  AllSelectedUiWrap,
  AllSelectedTagWrap,
  BorderLi
}