import styled from 'styled-components'

const Container = styled.div`
    .am-tab-bar-tab:nth-child(1) {
        background-color:${props => props.selected === 'recommend' ? "#2ac383" : "#FFFFFF"};
        height: 100%!important;
    }
    .am-tab-bar-tab:nth-child(2) {
        background-color:${props => props.selected === 'destination' ? "#2ac383" : "#FFFFFF"};
        height: 100%!important;
    }
    .am-tab-bar-tab:nth-child(3) {
        background-color:${props => props.selected === 'community' ? "#2ac383" : "#FFFFFF"};
        height: 100%!important;
    }
    .am-tab-bar-tab:nth-child(4) {
        background-color:${props => props.selected === 'my' ? "#2ac383" : "#FFFFFF"};
        height: 100%!important;
    }

` 
export {
    Container
}