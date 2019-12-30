import App from '../src/app.js'
<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> e11e1b163b06b764f5bb51c12a4bd5741c3af658
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
<<<<<<< HEAD
import reducers from '../src/redux/reducers'
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('app'))
=======
import reducers from './redux/index'
import { LocaleProvider,message } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  
ReactDOM.render(<Provider store={store}>
    <Router>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </Router>
  </Provider>
  , document.getElementById('app'))
>>>>>>> e11e1b163b06b764f5bb51c12a4bd5741c3af658
