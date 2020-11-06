import styled from 'styled-components'

const SpecialDetailWrap = styled.div`
    .banner {
        width: 100%;
        position: relative;
        img {
            width: 100%;
        }
        .top {
            position: absolute;
            z-index: 10;
            width: 100%;
            height: .45rem;
            top: 0;
            .icon-back {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 10;
                display: block;
                width: .45rem;
                height: .45rem;
                background-size: 100% 100%;
                background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNEFCRjc1MDc1ODIxMUU2QjcyRENEOUFGNDA0RTFBQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNEFCRjc1MTc1ODIxMUU2QjcyRENEOUFGNDA0RTFBQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU0QUJGNzRFNzU4MjExRTZCNzJEQ0Q5QUY0MDRFMUFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0QUJGNzRGNzU4MjExRTZCNzJEQ0Q5QUY0MDRFMUFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SQpyZwAAB9JJREFUeNrsnGts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');
            }
            .icon-share {
                position: absolute;
                right: .1rem;
                top: .1rem;
                z-index: 10;
                display: block;
                width: .22rem;
                height: .22rem;
                background-size: 100% 100%;
                background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgMzQgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0i5Lqn5ZOB6K+m5oOF6aG15Yqg5YiG5LqrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjgzLjAwMDAwMCwgLTE2OC4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyI+CiAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjg1LjAwMDAwMCwgMTY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS4zOTIxMjQ3LDEyLjg1NzE0MjkgTDI4LjU3MTQyODYsMTIuODU3MTQyOSBDMjkuMzYwNDA2OCwxMi44NTcxNDI5IDMwLDEzLjQ5NjczNjEgMzAsMTQuMjg1NzE0MyBMMzAsMzUuNTI2MzE1OCBDMzAsMzYuMzE1Mjk0IDI5LjM2MDQwNjgsMzYuOTU0ODg3MiAyOC41NzE0Mjg2LDM2Ljk1NDg4NzIgTDEuNDI4NTcxNDMsMzYuOTU0ODg3MiBDMC42Mzk1OTMyMTUsMzYuOTU0ODg3MiAtNS4zMjkwNzA1MmUtMTUsMzYuMzE1Mjk0IC01LjMyOTA3MDUyZS0xNSwzNS41MjYzMTU4IEwtNS4zMjkwNzA1MmUtMTUsMTQuMjg1NzE0MyBDLTUuMzI5MDcwNTJlLTE1LDEzLjQ5NjczNjEgMC42Mzk1OTMyMTUsMTIuODU3MTQyOSAxLjQyODU3MTQzLDEyLjg1NzE0MjkgTDguNTYyNzA5MjYsMTIuODU3MTQyOSIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMjU0MjU1LDEuNDgzMzI4NjggTDE1LjI1NDI1NSwyNC45MzExOTQ1IiBpZD0i6Lev5b6ELTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjM1NzQ5MTYsMC42NTYzODk1MDkgTDguOTA5MDQwMTgsNy4xNDI4NTcxNCIgaWQ9Iui3r+W+hC00Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS41MjkxOTIyLDAuNjMwMjMxNTg1IEwxNS4zODczMTE3LDcuMTQyODU3MTQiIGlkPSLot6/lvoQtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguNDU4MjUyLCAzLjg4NjU0NCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTguNDU4MjUyLCAtMy44ODY1NDQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
            }
        }
    }
    .title {
        background: #fff;
        padding: .1rem .15rem .1rem .1rem;
        color: rgba(31,32,35,.8);
        font-size: .16rem;
        font-weight: 500;
        word-break: break-all;
        text-indent: 2em;
    }
    .priceInfo {
        display: flex;
        background-color: #fff;
        padding: 0 .1rem;
        justify-content: space-between;
        margin-bottom: .1rem;
        .price {
            font-size: .2rem;
            padding-right: .03rem;
            color: #ff7467;
            font-style: normal;
        }
        .pright {
            /* flex:1; */
            padding: 0 .1rem;
            display:flex;
            text-align: right;
            font-size: .12rem;
            color: rgba(31,32,35,.4);
            align-items: center;
            p {
                padding:0 .1rem;
            }
        }
    }
`

const SelectWrap = styled.div`
    .confirm {
        padding: .1rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .1rem;
        .c1 {
            width: .25rem;
            height: .25rem;
            margin-right:.02rem;
        }
        .c2 {
            width:.3rem;
            height: .3rem;
            display:flex;
            flex-wrap: wrap;
            font-weight: 700;
            font-size: .12rem;
            line-height: .15rem;
            color: #ff7467;
            padding-right: .1rem;
        }
        .c3 {
            font-size: .14rem;
        }
    }
`

const SelectDateWrap = styled.div`
    background-color: #fff;
    padding: .1rem;
    margin-bottom: .1rem;
    i {
        margin-right: .1rem;
    }
    .top {
        margin-bottom: .05rem;
    }
    .selec {
        font-size: .15rem;
        color: rgba(31,32,35,.8);
        font-weight: 700;
    }
    .bottom {
        line-height: .13rem;
        color: rgba(31,32,35,.4);
        font-size: .13rem;
    }

`


const ProductDetailWrap = styled.div`
    padding:.1rem;
    background-color:#fff;
    h2 {
        font-size: .15rem;
        font-weight: 600;
        color: rgba(0,0,0,.8);
        margin-bottom: .1rem;
    }
    h3 {
        overflow:hidden;
        margin-bottom: .1rem;
        i {
            display:inline-block;
            width: .04rem;
            height: .15rem;
            background-color:#40c895;
            margin-right: .1rem;
        }
        span {
            font-size: .14rem;
            font-weight: 600;
        }
    }
    p {
        width: 100%;
        img {
            width: 100%;
            height: auto;
        }
    }
`
export {
    SpecialDetailWrap,
    SelectDateWrap,
    SelectWrap,
    ProductDetailWrap
}