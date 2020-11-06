import styled from 'styled-components'

const Container = styled.div `
    header {
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        font-size: .16rem;
        color: #fff;
        background-color: #2ac383;
    }
    .NavBar{
        svg{
            width:.3rem;
            height:.3rem;
            fill:#13be79;
        }
    }
    
    .list-item{
        line-height:1em;
        text-align:center;
        width:100%;
        height:.6rem;
        position:relative;
        svg{
            position:absolute;
            width:.35rem;
            height:.35rem;
            fill:#13be79;
            padding-top:.25rem;
            top:.1rem;
            padding:0;
            margin:0;
        }
        span{
            padding-left:.4rem;
        }
    }

    ul{
        width:100%;
        height:1.3rem;
        background-color:#fff;
        display:flex;
        margin-bottom:.05rem;
        >li{
            flex:1;
        }
        li:nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li:nth-child(2){
            color:#333333;
            text-align:left;
            margin-top:.3rem;
            font-size:.18rem;
            font-weight:600;
            span{
                display:block;
                font-size:.10rem;
                color:#a9b4b3;
            }
        }
        li:nth-child(3){
            text-align:center;
            margin-top:.3rem;
            font-size:.14rem;
            color:#333333;
        }
    }


    .Collection{
        margin-top:.05rem;
        margin-bottom:.05rem;
        .Coll1{
            width:100%;
            height:.5rem;
            svg{
                margin-top:.05rem;
                width:.3rem;
                height:.3rem;
                fill:#13be79;
                margin-bottom:.05rem;
            }
        }
        .Coll2{
            width:100%;
            color:#434343;
        }
    }


    .myList{
        width:100%;
        margin-bottom:.05rem;
        .List1,.List2{
            display:flex;
            width:100%;
            border:none;
            height:.6rem;
            justify-content: center;
            align-items: center;
            padding-left:.2rem;
            svg{
                width:.3rem;
                height:.3rem;
                fill:#13be79;
            }
            .List1-1,.List1-2{
                width:100%;
                height:100%;
                border:none;
            }
        }
    }

    .myList2{
        width:100%;
        .List3,.List4,.List5,.List6,.List7,.List8{
            display:flex;
            width:100%;
            height:.6rem;
            justify-content: center;
            align-items: center;
            padding-left:.2rem;
            svg{
                width:.3rem;
                height:.3rem;
                fill:#13be79;
            }
            .List1-3,.List1-4,.List1-5,.List1-6,.List1-7,.List1-8{
                width:100%;
                height:100%;
            }
        }
    }

`


const Footprints = styled.div `
    .di{
        width:100%;
        height:2.41rem;
        background-color:rgb(216, 216, 216);
    }

    .ditu{
        padding-top:.44rem;
        width:100%;
        height:1.88rem;
        background-color:rgb(216, 216, 216);
        img{
            height:1.88rem;
        }
    }

    .first{
        width:100%;
        height:2.2rem;
        background-color:#fff;
        border-bottom:1px solid #eee;
        h1{
            color:rgb(86, 86, 86);
            width:100%;
            height:.34rem;
            line-height:.49rem;
            margin-left:.15rem;
        }
                
        .first1{
            height:.2rem;
            img{
                height:1.14rem;
                width:1.7rem;
            }
            .first3{
                height:100%;
                span{
                    display:block;
                    margin:0 .09rem;
                    height:.35rem;
                    border:1px solid #ccc;
                    line-height:.35rem;
                    color:rgb(182, 192, 216)
                }
            }
        }
    }

    .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content{
        height:1.6rem;
    }
    `


const Logins = styled.div`
      width:100%;
      height:4rem;
      background-color:#fff;
   .guanbi{
       position:absolute;
       right:.4rem;
       top:.4rem;
   }
   .touxiang{
       text-align:center;
       padding-top:.7rem;
       img{
        width:.7rem;
        height:.7rem;
       }
   }
   form{
       margin-left:15%;
       margin-top:.1rem;
       display:flex;
       flex-direction:column;
       justify-content: center;
       align-items: center;
       text-align:center;
       width:70%;
       height:2.3rem;
       label{
           width:100%;
           height:.5rem;
           text-aligin:center;
           display:flex;
           border-bottom:1px solid #ccc;
           
           img{
               padding-left:.2rem;
           }
           input{
               flex:1;
               margin-left:.2rem;
               border:none;
               font-size:.12rem;
           }
       }
       .password{
           text-align:right;
           width:100%;
           height:1rem;
           padding-top:.15rem;
           padding-bottom:.15rem;
           font-size:.1rem;
           background-color:#fff;
           span{
               color:rgb(40, 195, 132);
           }
       }
       button{
           width:100%;
           height:2rem;
           border:none;
           color:#fff;
           border-radius:.2rem;
           background-color:rgb(40, 195, 132);
       }
       .new{
        text-align:center;
        width:100%;
        height:1rem;
        padding-top:.15rem;
        font-size:.1rem;
        background-color:#fff;
        span{
            color:rgb(40, 195, 132);
        }
       }

      
   }
   .or{
       width:80%;
       height:2rem;
       margin-left:10%;
       text-align:center;
       padding-top:.15rem;
       .or1{
           span{
               margin-left:.1rem;
               margin-right:.1rem;
               color:#999999;
               font-size:.1rem;
           }
       }
       .way{
           background-color:#fff;
           div{
               button{
                   width:90%;
                   height:.4rem;
                   margin-top:.15rem;
                   border:1px solid #d7dde4;
                   border-radius:.2rem;
                   text-align:center;
                   background-color:#fff;
                   position:relative;
                   img{
                       position:absolute;
                       left:.15rem;
                   }
               }
           }
       }
   }



`

const Loginss = styled.div`
     height:100%;
`

const NavBarRecommends = styled.div`
     .am-navbar-title{
         color:rgb(121, 118, 113);
     }
    .am-navbar-right{
        img{
            display:none;
        }
    }
`


const Reset = styled.div`
width:100%;
height:100%;
background-color:#fff;

form{
padding-top:1rem;
 margin-left:15%;
 display:flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 text-align:center;
 width:70%;
 height:2.8rem;
 label{
     width:100%;
     height:.5rem;
     text-aligin:center;
     display:flex;
     border-bottom:1px solid #ccc;
     
     img{
         padding-left:.2rem;
         width:.2rem;
     }
     input{
         flex:1;
         padding-left:.1rem;
        //  margin-left:.2rem;
         border:none;
         font-size:.12rem;
     }
     p{
         display:block;
         width:4rem;
         height:.5rem;
         font-size:.1rem;
         line-height:.5rem;
         color:#a9b3bd;
     }
 }
 .password{
     text-align:right;
     width:100%;
     height:1rem;
     padding-top:.15rem;
     padding-bottom:.15rem;
     font-size:.1rem;
     background-color:#fff;
     span{
         color:rgb(40, 195, 132);
     }
 }
 button{
     width:100%;
     height:2rem;
     border:none;
     color:#fff;
     border-radius:.2rem;
     background-color:rgb(40, 195, 132);
 }
 .new{
  text-align:center;
  width:100%;
  height:1rem;
  padding-top:.15rem;
  font-size:.1rem;
  background-color:#fff;
  span{
      color:rgb(40, 195, 132);
  }
 }


}
.am-navbar{
    width:100%;
    background-color:#f2f2f2;
    border:1px solid #eee;
}
.am-navbar-title{
    color:#999999;
    font-size:.12rem;
}
.am-navbar-right{
    img{
        display:none;
    }
}
`

const CreateUsers = styled.div`
width:100%;
height:100%;
background-color:#fff;

.touxiang{
    text-align:center;
    padding-top:.7rem;
    img{
     width:.7rem;
     height:.7rem;
    }
}
form{
padding-top:.4rem;
 margin-left:15%;
 display:flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 text-align:center;
 width:70%;
 height:2.8rem;
 label{
     width:100%;
     height:.5rem;
     text-aligin:center;
     display:flex;
     border-bottom:1px solid #ccc;
     
     img{
         padding-left:.2rem;
         width:.2rem;
     }
     input{
         flex:1;
         padding-left:.1rem;
        //  margin-left:.2rem;
         border:none;
         font-size:.12rem;
     }
     p{
         display:block;
         width:4rem;
         height:.5rem;
         font-size:.1rem;
         line-height:.5rem;
         color:#a9b3bd;
     }
 }
 .password{
     text-align:left;
     width:100%;
     height:1rem;
     padding-top:.15rem;
     padding-bottom:.15rem;
     font-size:.1rem;
     background-color:#fff;
     padding-left:.07rem;
     span{
         color:rgb(40, 195, 132);
     }
     .am-list-content{
         font-size:.12rem;
     }
     .am-checkbox{
        .am-checkbox-inner{
            
            width:.2rem;
            heigth:.6rem;
         }
         
     }
 }
 button{
     width:100%;
     height:2rem;
     border:none;
     color:#fff;
     border-radius:.2rem;
     background-color:rgb(40, 195, 132);
 }
 .new{
  text-align:center;
  width:100%;
  height:1rem;
  padding-top:.15rem;
  font-size:.1rem;
  background-color:#fff;
  span{
      color:rgb(40, 195, 132);
  }
 }


}

.am-navbar-title{
    color:#999999;
    font-size:.12rem;
}
.am-navbar-right{
    img{
        display:none;
    }
}
`

export {
    Container,
    Footprints,
    NavBarRecommends,
    Logins,
    Loginss,
    Reset,
    CreateUsers,
}