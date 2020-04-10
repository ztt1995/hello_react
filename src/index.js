import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './Componnets/LikeButton';
import List from './Componnets/List'
import Clock from './Componnets/Timer'
import CommentApp from './Comment/CommentApp'
import AutoFocusInput from './Componnets/AutoFocusInput'
import Card from './Componnets/Card'
import Editor from './Componnets/Editor-dangerouslySetHTML'
import HigherOrder from './Componnets/Higher-Order'
import Context from './Componnets/context'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Context />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
