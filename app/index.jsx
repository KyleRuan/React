import React from 'react';
// import ReactDom from 'react-dom';
import { render } from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import 'babel-polyfill';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
// import Deskmark from './components/Deskmark';
import Deskmark from './components/Deskmark';
import * as actionCreators from './actions';


const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);
const App = connect(state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)(Deskmark);

// create DOM container
const container = document.body.appendChild(
  document.createElement('div')
);

// render root conponent with store to DOM container
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);


// const items = [
//   {
//     id: '6c89132-8dw2w1201s',
//     title: 'Hello world',
//     content: '## testing markdown',
//     time: 1458030208280
//   },
//   {
//     id: '6c89132-8dw22rce201s',
//     title: 'Hello',
//     content: '# testing markdown',
//     time: 1458030208359
//   }
// ];
// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDom.render(
//   <Provider store={store} >
//     <Deskmark items={items} />
//   </Provider>
//     , app);
