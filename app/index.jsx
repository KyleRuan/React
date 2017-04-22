import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import 'babel-polyfill';
// import Deskmark from './components/Deskmark';
import List from './components/List';

const items = [
  {
    id: '6c89132-8dw2w1201s',
    title: 'Hello world',
    content: '## testing markdown',
    time: 1458030208280
  },
  {
    id: '6c89132-8dw22rce201s',
    title: 'Hello',
    content: '# testing markdown',
    time: 1458030208359
  }
];
const onSelect = (itemID) => {
  console.log(itemID);
};
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<List items={items} onSelect={onSelect} />, app);
