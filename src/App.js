import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import AddTask from './components/AddComponent/AddTask'
import ToDos from './components/ToDos/ToDos'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <AddTask/>
            <ToDos/>
        </div>
      </Provider>

    );
  }
}

export default App;
