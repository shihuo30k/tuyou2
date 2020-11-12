import styled from 'styled-components'




const Headercon=styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:100%;
   height:.42rem;
   span{
       font-size:.16rem;
       font-weight:bolder;
   }
   .left{
       margin-left:.1rem;
       img{
           width:.28rem;
           height:.28rem;
       }
   }
   .right{
       img:last-child{
           width:.26rem;
           height:.26rem;
           margin:0 .1rem;
       }
       
   }
`
const Topicpartcon=styled.div`
    width:100%;
    border-bottom:.02rem solid #E4E4E4;
   .title{
       font-size:.2rem;
       font-weight:bolder;
       margin: .1rem;
   }
   .detail{
       display:flex;
       align-items:center;
       .authimg{
           margin:0 .1rem;
       }
       .detailright{
       .namedetail{
           font-size:.16rem;
           font-weight:bolder;
           img{
               width:.18rem;
               height:.18rem;
           }
         }
         .record{
            color:#868686;
            span{
                color:#000;
            }
         }
         .time{
            color:#868686;
         }
    }
   }
   .from{
       display:flex;
       align-items:center;
       justify-content:space-between;
       margin:.3rem .1rem  .3rem .1rem;
       div{
           color:#3FCD90;
           span{
               color:#3FCD90;
           }
       }
   }
`
const Topiccontentcon=styled.div`
     padding-top:.2rem;
     padding-bottom:.6rem;
     border-bottom:.02rem solid #E4E4E4;
    .topiccon{
        width:100%;
        
        .imgcon{
            img{
                width:.42rem;
                height:.42rem;
                margin-left:.2rem;
            }
        }
        div{
            height:.42rem;
            font-size:.16rem;
            line-height:.42rem;
        }
        .red{
            color:#FF3333;
            font-size:.16rem;
            font-weight:bolder;
        }
    }
    .bottomimg{
        position:relative;
        .huifu{
            position: absolute;
            color:#3FCD90;
            right:.1rem;
            margin-top:.2rem;
            img{
                width:.18rem;
                height:.18rem;
            }
        }
    }
`
const Democon=styled.div`
     border-bottom:.02rem solid #E4E4E4;
     .up{
         display:flex;
         align-items:center;
         justify-content:space-between;
         height:.74rem;
         margin:0 .1rem;
         .lou{
             color:#949494;
         }
         .imgcon{
            display:flex;
            align-items:center;
            .img{
                margin-right:.1rem;
            }
            .name{
                font-size:.16rem;
                height:.24rem;
                font-weight:bolder;
                
                line-height:.24rem;
            }
            .date{
                color:#949494;
                font-size:.12rem;
               
            }
         }
     }
     .content{
         margin:0 .1rem .2rem .1rem;
     }
     .huifu{
         display:flex;
         justify-content:flex-end;
         height:.4rem;
         line-height:.4rem;
         align-items:center;
         margin-right:.1rem;
         img{
             width:.16rem;
             height:.16rem;
         }
         span{
             color:#3FCD90;
         }
     }
`
export{
    Headercon,
    Topicpartcon,
    Topiccontentcon,
    Democon
}