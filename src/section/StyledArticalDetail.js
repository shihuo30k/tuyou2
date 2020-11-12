import styled from 'styled-components'

const ArticlDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    background-color:#fff;
    padding: .1rem;
    p {
      font-size: .16rem;
      line-height: .32rem;
      color: rgba(0,0,0,.8);
      text-indent: 2em;
    }
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`
const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

export {
  ArticlDetailWrap,
  WhiteSpace
}