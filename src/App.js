import React from 'react'
import {Provider} from 'react-redux'
import Todo from './containers'
import store from './redux/store'

const App = () => (<Provider store={store}><Todo></Todo></Provider>)

export default App
