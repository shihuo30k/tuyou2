import styled from 'styled-components';


const SearchWrap = styled.div`
  position:fixed;
  z-index:9999;
  width:100%;
  padding: .08rem .27rem;
  height: .5rem;
  background-color: #fff;
  input {
      display:block;
      border:none;
      height: .33rem;
      margin:0 auto;
      border-radius: .17rem;
      width:100%;
      background-color:#f2f2f2;
      position: relative;
      
  }
  .content {
      position: absolute;
      left:50%;
      top:.14rem;
      margin-left: -.27rem;
      z-index:99;
      svg {
          width:.12rem;
          height:.13rem;
          margin-right: .02rem;
          vertical-align: middle;
      }
      span {
          color: #cccccc;
          font-size: .13rem;
      }
  }
`

export {
  SearchWrap
}