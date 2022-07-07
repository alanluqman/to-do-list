// import _ from 'lodash';
import './style.css';
import { addTask, display, removeTask } from './crud.js';

const todo = [];

const element = document.createElement('div');
element.classList = 'todo-box';
document.body.appendChild(element);

const headerHolder = document.createElement('div');
headerHolder.classList = 'header-holder';
element.appendChild(headerHolder);

const refresh = document.createElement('i');
refresh.classList = 'fa fa-refresh icon header-icon';
headerHolder.appendChild(refresh);

const title = document.createElement('h1');
title.classList = 'header';
title.innerHTML = 'Today\'s To do';
headerHolder.appendChild(title);

// const form = document.createElement('form');
// form.classList = 'form';
// element.appendChild(form);

const inputHolder = document.createElement('div');
inputHolder.classList = 'input-holder';
element.appendChild(inputHolder);

const input = document.createElement('input');
input.id = 'input';
input.placeholder = 'Add to your list...';
input.classList = 'input';
inputHolder.appendChild(input);

const enterIcon = document.createElement('i');
enterIcon.id = 'enter';
enterIcon.classList = 'fa fa-level-down icon rotate';
inputHolder.appendChild(enterIcon);

enterIcon.addEventListener('click', () => {
  addTask(todo, input.id, todoList);
  display(todo, todoList);
});

input.addEventListener('keydown', (pressed) =>{
  if (pressed.key === 'Enter'){
    addTask(todo, input.id, todoList);
    display(todo, todoList);
  }
});
const todoList = document.createElement('ul');
todoList.classList = 'form';
element.appendChild(todoList);

function check(arr, index) {
  if (arr[index].completed) return 'fa fa-check';
  return 'fa fa-square-o';
}

function ifDone(arr, index) {
  if (arr[index].completed) return 'task done';
  return 'task';
}

// for (let i = 0; i < todo.length; i += 1) {
//   const complete = check(todo, i);
//   const done = ifDone(todo, i);

//   const item = document.createElement('li');
//   item.classList = 'item input-holder';
//   item.innerHTML = `
//             <i class=' icon ${complete} '></i>
//             <h2 class="${done}">${todo[i].description}</h2>
//             <i class="fa fa-ellipsis-v icon moveble"></i>`;
//   todoList.appendChild(item);
// }

const footer = document.createElement('div');
footer.classList = 'footer';
element.appendChild(footer);

const listDelete = document.createElement('a');
listDelete.classList = 'delete';
listDelete.innerHTML = 'Clear all completed';
footer.appendChild(listDelete);



