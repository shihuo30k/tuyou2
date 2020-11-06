import styled from 'styled-components'
import border from '@a/styled/border'

const SectionCreate = styled.div`
    .am-navbar-right {
        img:first-child {
            display: none;
        }
    }
`

const NoteTextWrap = styled.div`
    background-color: #fff;
    padding: .3rem .2rem;
    h2 {
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
        color: #333;
        font-size: .18rem;
        margin-bottom: .2rem;
    }
    p {
        font-size: .16rem;
        line-height: .28rem;
        font-family: '微软雅黑';
        font-weight: 400;
        font-style: normal;
    }
    .p1 {
        margin-bottom: .3rem;
    }
`

const FormWrap = styled.div`
    padding: .3rem .2rem;
    p {
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
        font-weight: 700;
        font-style: normal;
        font-size:.18rem;
        margin-bottom: .1rem;
    }
    .item {
        margin-bottom: .3rem;
        width: 100%;
    }
    .inputWrap {
        padding: .1rem;
        background-color: #fff;
        input {
            width: 100%;
            border: 0;
        }
        textarea {
            width: 100%;
            border: 0;
        }
    }
    .submit {
        display: block;
        margin: 0 auto;
        border: 1px solid #49be77;
        width: 1.5rem;
        height: .5rem;
        background-color: #fff;
        color: #49be77;
        border-radius: .1rem;
    }
`

const InputWrap = border(styled.div``)

const WhiteSpace = styled.div`
    width: 100%;
    height: 0rem;
    padding-bottom: .45rem;
`

export {
    SectionCreate,
    NoteTextWrap,
    FormWrap,
    WhiteSpace,
    InputWrap
}