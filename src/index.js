import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app'
import Reducers from './reducers'

const store = createStore(Reducers)

render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'))