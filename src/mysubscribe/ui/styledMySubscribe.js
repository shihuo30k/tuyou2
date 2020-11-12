import styled from 'styled-components'
import border from '@a/styled/border'

const MySubscribeListWrap = styled.div ` 

.am-icon-md {
  width: .27rem;
  height: .27rem;
}
.am-navbar-title {
    font-size:.16rem;
    font-weight: 600;
    color:#333;
}
h2{
  margin:.3rem 0 .2rem .15rem;
  font-size:.18rem;
  color:#333;
}
h3{
  font-size:.16rem;
  font-weight: normal;
  line-height:.3rem;
  margin-left:.15rem;
  margin-bottom:.8rem;
}
.am-list-item{
  border:1px solid #ccc;
  width:85%;
  border-radius:.04rem;
  margin-left:.15rem;
}
textarea{
  margin-left:.15rem;
  border:1px solid #ccc;
  font-size:.17rem;
}
.btnWrap{
  width:100%;
  display:flex;
  justify-content:center;
  margin-bottom:.2rem;
  .btn{
    width:1.25rem;
    height:.4rem;
    font-size:.14rem;;
    color: #49BE77;
    line-height:.4rem;
    text-align:center;
    margin-bottom:.1rem;
    margin-top:.2rem;
  }
}


`
const BorderH4 = border(styled.h4 ``)
export {
  MySubscribeListWrap,
  BorderH4
}