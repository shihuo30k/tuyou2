import { BrowserRouter as Router } from 'react-router-dom'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import "../node_modules/video-react/dist/video-react.css"
import store from './store'

import React from 'react'
import App from './App'
import './assets/styles/reset.css'
import 'react-calendar/dist/Calendar.css'

ReactDom.render(
    <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    </Router>,
    document.querySelector('#root')
)