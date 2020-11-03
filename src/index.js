import { BrowserRouter as Router } from 'react-router-dom'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

import React from 'react'
import App from './App'
import './assets/styles/reset.css'

import './assets/styles/reset.css'
ReactDom.render(
    <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    </Router>,
    document.querySelector('#root')
)