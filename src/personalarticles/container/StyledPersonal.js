import styled from 'styled-components'
import border from '@a/styled/border'

const PersonalArticlesContainer = styled.div`
  height: 100%;
  background-color:#fff;
  .topTitle{
    position:sticky;
    top:0;
  }
  .column{
    .personal{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      img{
        width:1rem;
        height:1rem;
        border-radius:50%;
        margin-top:.64rem;
      }
      .personalName{
        font-size:.18rem;
        font-weight:600;
        margin-top:.2rem;
      }
      .personalContent{
        margin-top:.15rem;
        padding:0 .33rem;
        font-size:.14rem;
      }
      .subscribe{
        margin-top:.3rem;
        display:flex;
        align-items:center;
        justify-content:center;
        border:2px solid #6fd9ac;
        width:.95rem;
        height:.35rem;
        border-radius:.06rem;
       div{
        display:flex;
        align-items:center;
        justify-content:center;
        svg{
          width:.22rem;
          height:.22rem;
        }
        .active{
          width:.16rem;
          height:.16rem;
        }
        span{
          color:#6fd9ac;
          font-size:.13rem;
        }
       }
      }
      p{
        font-size:.12rem;
        color:#0000008c;
        margin-top:.12rem;
      }
      .personalTags{
        display:flex;
        width:100%;
        margin-top:.2rem;
        ul{
          display:flex;
          justify-content:left;
          padding:0 .33rem;
          li{
            width:.71rem;
            height:.3rem;
            background-color:#f3f3f3;
            margin-right:.1rem;
            border-radius:.05rem;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:.12rem;
            color:#0000008c;
            span{
              margin-left:0.02rem;
            }
          }
          .active{
            color:#fff;
            background-color:#28bf68;
          }
        }
      }
    }
    .allArticles{
      margin-top:.46rem;
      padding:0 .22rem;
      .allArticlesTitle{
        font-size:.18rem;
        font-weight:600;
        margin-bottom:.2rem;
      }
    }
    ul{
      li{
        img{
          width:3.35rem;
          height:1.5rem;
          display:block;
          margin-bottom:.1rem;
        }
        .articleContent{
          font-size:.16rem;
          font-weight:600;
          margin-bottom:.1rem;
        }
        .bottomTips{
          display:flex;
          align-items:center;
          .userName{
            font-size:.12rem;
            color:#0000008c;
          }
          .publicDate{
            font-size:.12rem;
            margin-left:.03rem;
            color:#0000008c;
          }
          .showLike{
            font-size:.12rem;
            display:flex;
            align-items:center;
            margin-left:1.85rem;
            color:#0000008c;
            svg{
              width:.17rem;
              height:.17rem;
              margin-right:.05rem;
            }
          }
        }
      }
    }
   
  }
 
`
const TopTitleContainer = border(
  styled.div `
    background-color:#fff;
    padding:0 .26rem;
    display:flex;
    height:.42rem;
    align-items:center;
    justify-content:space-between;
    svg:first-child{
      width:.27rem;
      height:.27rem;
    }
    span{
      font-size:.16rem;
      font-weight:600;
    }
    svg:last-child{
      width:.27rem;
      height:.27rem;
    }

  `

  
)


export {
  PersonalArticlesContainer,
  TopTitleContainer

}