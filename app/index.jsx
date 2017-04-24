import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import 'babel-polyfill';
// import Deskmark from './components/Deskmark';
import Deskmark from './components/Deskmark';

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
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<Deskmark items={items} />, app);
