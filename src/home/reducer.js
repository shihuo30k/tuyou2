import {Map} from 'immutable'

const defaultState = Map({
    selectedTab: 'recommend'
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'changeSelectedTab':
            return state.set('selectedTab', action.selectedTab)
        default:
            return state
    }
}

export default reducer