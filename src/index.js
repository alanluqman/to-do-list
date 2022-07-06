import _ from 'lodash';
import './style.css';

 function component() {
  //  const element = document.createElement('div');
  // // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   const headTitle = document.createElement('h1');
   headTitle.classList = 'header';
  headTitle.innerHTML = 'Hello I have been run by the server';
  
   return headTitle;
 }

 document.body.appendChild(component());