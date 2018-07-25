import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configStore';

import './App.css';
import Main from './components/MainComponent';
const store = ConfigureStore();
class App extends Component {
  constructor(props){
    super(props);
  
}
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      
   
        <Main />
        </div>
   
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
