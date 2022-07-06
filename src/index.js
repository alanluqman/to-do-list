import _ from 'lodash';
import './style.css';

const todo = [
  {
    description: 'Take a shower',
    completed: true,
    index: 0
  },
  {
    description: 'have breakfast',
    completed: false,
    index: 1
  },
  {
    description: 'go to work',
    completed: false,
    index: 2
  }
];

 
   const element = document.createElement('div');
   element.classList = 'todo-box';
 document.body.appendChild(element);

  const headerHolder = document.createElement('div');
   headerHolder.classList = 'header-holder';
 element.appendChild(headerHolder);

const refresh = document.createElement('i');
refresh.classList = "fa fa-refresh icon header-icon";
headerHolder.appendChild(refresh);

 const title = document.createElement('h1');
 title.classList = 'header';
 title.innerHTML = `Today's To do`;
 headerHolder.appendChild(title);

 const form = document.createElement('form');
 form.classList = 'form';
 element.appendChild(form);

 const inputHolder = document.createElement('div');
 inputHolder.classList = 'input-holder'
 form.appendChild(inputHolder);

 const input = document.createElement('input');
 input.type = 'text';
 input.placeholder = 'Add to your list...';
 input.classList = 'input';
 inputHolder.appendChild(input);

 const enterIcon = document.createElement('i');
 enterIcon.classList = 'fa fa-level-down icon rotate';
 inputHolder.appendChild(enterIcon);

 const todoList = document.createElement('ul');
 todoList.classList = 'form';
 element.appendChild(todoList);

 function check(arr,index){
  if (arr[index].completed) return 'fa fa-check';
  else return 'fa fa-square-o';
 }

 for (let i = 0; i < todo.length; i++) {
  let complete = check (todo,i);   
 
 const item = document.createElement('li');
 item.classList = 'item input-holder';
 item.innerHTML = `
            <i class=' icon ${complete} '></i>
            <h2 class="task">${todo[i].description}</h2>
            <i class="fa fa-ellipsis-v icon moveble"></i>`;
 todoList.appendChild(item);
 
 }

 
const footer = document.createElement('div');
footer.classList = 'footer';
element.appendChild(footer);

const listDelete =  document.createElement('a');
listDelete.classList = 'delete';
listDelete.innerHTML = 'Clear all completed';
footer.appendChild(listDelete);
 