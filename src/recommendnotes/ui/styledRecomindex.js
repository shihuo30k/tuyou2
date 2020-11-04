
import styled from 'styled-components'

const Recomindexcon=styled.div`
    width:100%;
    height:auto;
    overflow-y:scroll;
    background-color:#F4F4F4;
    .lookmore{
        width:100%;
        height:.4rem;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:.1rem;
        span{
           color:#3FCD90;
           margin-right:.1rem;
        }
       img{
          width:.07rem;
          height:.12rem;
       }
     }
`
const Headercon =styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
  
   width:100%;
   height:.42rem;
   img{
      width:.28rem;
      height:.2rem;
   }
   span{
      font-size:.16rem;
      font-weight:bolder;
   }
`
const Swiperwrap=styled.div`
   position:relative;
   width:100%;
   height:0;
   padding-bottom:73.6%;

   .slider.am-carousel{
      position:absolute !important;
      top:0;
   }
   .swiperimg{
      width:100%;
      height:100%;
   }
   .numofimg{
      position:absolute;
      top:.1rem;
      right:.1rem;
      width:1.08rem;
      line-height:.24rem;
      color:#fff;
      text-align:center;
      background-color: rgba(0, 0, 0, 0.549019607843137);
      height:.24rem;
      border-radius:.1rem;
   }
   .nameofcountry{
      display:flex;
      flex-direction:column;
      position: absolute;
      bottom:.1rem;
      left:.1rem;
      div:first-child{
        font-size:.3rem;
        color:#fff;
        font-weight:bolder;
      }
      div:last-child{
         font-size:.16rem;
         color:#fff;
      }
   }
   .Swiperright{
      display:flex;
      flex-direction:column;
      position:absolute;
      bottom:.1rem;
      right:.1rem;
      img{
         width:.26rem;
         height:.28rem;
      }
      span{
         color:#fff;
      }
   }
`
const Gridlistcon=styled.div`
   padding-top:.08rem;
   width:100%;
   height:auto;
   ul{
      display:flex;
      flex-wrap:wrap;
      list-style:none;
      width:100%;
      li{
        width:.66rem;
        height:.66rem;
        margin:.1rem .13rem;
        img{
           width:.48rem;
           height:.48rem;
           display:block;
           margin:0 auto;
        }
        span{
           text-align:center;
           display:inline-block;
           width:.66rem;
           margin:0 auto;
        }
      }
   }
`
 const Countryinfocon =styled.div`
     display:flex;
     justify-content:space-between;
     height:.6rem;
     background-color:#fff;
     align-items:center;
     
     margin: .26rem 0;
     div:first-child{
         display:flex;
         justify-content:center;
         img{
            width:.22rem;
            height:.22rem;
         }
         span{
            font-size:.16rem
         }
     }
 `

 const Citylistcon=styled.div`
      .cityname{
         width:100%;
         height:.4rem;
         font-size:.2rem;
         font-weight:1000;
         
      }
     .cityimgcon{
        width:100%;
        height:1.2rem;
        display:flex;
        ul{
           height:1.2rem;
           overflow-y:scroll;
           display:flex;
           li{
              width:1.8rem;
              height:1.2rem;
              position:relative;
              margin-left:.1rem;
              .mengceng{
                 position:absolute;
                 width:100%;
                 height:100%;
                 top:0;
                 background:rgba(0,0,0,.5);
              }
              div:last-child{
                 position:absolute;
                 height:.4rem;
                 top: 50%;
                 left: 50%;
                 transform: translate(-50%, -50%);
                 div:first-child{
                    font-size:.18rem;
                    height:.2rem;
                    color:#fff;
                    font-weight:bolder;
                 }
                 div:last-child{
                    font-size:.14rem;
                    height:.2rem;
                    margin-top:.1rem;
                    color:#fff;
                    font-weight:bolder;
                 }
              }
              img{
                 width:1.8rem;
                 height:1.2rem;
                 border-radius:.1rem;
              }
           }
        }
     }
     
     
 `
 const Essencenotecon=styled.div`
     div:first-child{
      width:100%;
         height:.4rem;
         font-size:.2rem;
         font-weight:1000;
         
     }
     .center{
      width:100%;
      height:1.96rem;
      overflow: hidden;
        ul{
           width:100%;
           height:1.96rem;
           display:flex;
           overflow-x:scroll;
           li{
              width:3.32rem;
              height:1.96rem;
              display:block;
              position:relative;
              margin-left:.1rem;
              div:first-child{
                 width:3.32rem;
                 height:1.96rem;
                 img{
                    width:100%;
                    height:100%;
                    border-radius:.1rem;
                 }
              }
              .tag{
                  position: absolute;
                  display:flex;
                  height:.3rem;
                  align-items:center;
                  top:6%;
                  left:4%;
                  span:first-child{
                     display:inline-block;
                     width:.86rem;
                     height:.26rem;
                     line-height:.26rem;
                     text-align:center;
                     border-radius:.06rem;
                     margin:4% 3.012%;
                     color:#fff;
                     background-color:#3FCD90;
                  }
                  span:last-child{
                     display:inline-block;
                     text-align:center;
                     line-height:.26rem;
                     margin-left:2%;
                     border-radius:.06rem;
                     width:.86rem;
                     height:.26rem;
                     color:#fff;
                     background-color: rgba(255, 115, 98, 1);
                  }
              }
              .desc{
                   position: absolute;
                   top:50%;
                   left:2%;
                   width:auto;
                   height:auto;
                 div{
                    font-size:.16rem;
                    color:#fff;
                    height:auto;
                    font-weight:bolder;
                 }
              }
              .author{
                 position:absolute;
                 bottom:4%;
                 left:6%;
                 span{
                    color:#fff;
                    margin-left:.1rem;
                 }
              }
           }
        }
     }
 `
 const Anwserareacon= styled.div`
      width:100%;
      .title{
            width:100%;
            height:.4rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
           
         div:first-child{
            font-size:.2rem;
            font-weight:1000;
         }
         div:last-child{
            width:.98rem;
            height:.34rem;
            text-align:center;
            line-height:.34rem;
            font-size:.14rem;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#3FCD90;
            border:.01rem solid #3FCD90;
            border-radius:.2rem;
            span:first-child{
               font-size:.3rem;
               color:#3FCD90;
            }
         }
      }
      .listcon{
         .list{
            background-color:#fff;
            margin:.1rem;
            padding:.2rem .1rem;
            div:first-child{
               span{
                  display:inline-block;
                  width:.18rem;
                  height:.18rem;
                  font-size:.12rem;
                  text-align:center;
                  line-height:.2rem;
                  margin-right:.06rem;
                  background-color:#0EBD77;
                  color:#fff;
               }
               font-size:.16rem;
               font-weight:bolder;
            }
            div:last-child{
               color:#5E5E5E;
               width:3.06rem;
               margin-top:.06rem;
            }
         }
      }
 `
export{
   Anwserareacon,
   Essencenotecon,
   Citylistcon,
   Countryinfocon,
   Recomindexcon,
   Headercon,
   Swiperwrap,
   Gridlistcon
}