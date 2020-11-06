import styled from 'styled-components'

const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  width:100%;
  height:.44rem;
  background-color: #19c48a;
  background-image: linear-gradient(90deg,#50c971,#0fbfa6);
  display:flex;
  align-items:center;
  padding:0 .1rem;
  overflow:hidden;
  svg{
    width: .33rem;
    height: .33rem;
  }
  .input{
    margin: .07rem .2rem .07rem .05rem;
    height: .3rem;
    background-color:rgb(80,206,169);
    border-radius: .15rem;
    width:100%;
    display:flex;
    align-items:center;
    svg{
      width:.2rem;
      height:.2rem;
      padding-left: 0.1rem;
    }
    input{
      background-color: transparent;
      border: none;
      outline: none;
      display: block;
      flex:1;
      padding-left: 0.1rem;
      box-sizing: border-box;
      color: #fff;
    }
    input::-webkit-input-placeholder{
      color: #ccc;
    }
  }
  .search{
      line-height:.44rem;
      width:.8rem;
      height:100%;
      color:#fff;
    }
  .search-none{
    display:none;
  }
`

export {
  SearchContainer
}