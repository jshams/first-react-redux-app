import React from 'react';
import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

const store = createStore(reducers)

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">

      </div>
    </Provider>
  )
}
export default App