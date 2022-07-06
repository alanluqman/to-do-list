export function check(arr, index){
  if (arr[index].completed) return 'fa fa-check';
  return 'fa fa-square-o';
}

export function ifDone(arr, index){
  if (arr[index].completed) return 'task done';
  return 'task';
}

export function store (arr){
localStorage.setItem('todo list', JSON.stringify(arr));
}

export function display (arr,parent){
    parent.innerHTML = '';
    for (let i = 0; i < arr.length; i += 1) {
    const complete = check(arr, i);
    const done = ifDone(arr, i);
    const item = document.createElement('li');
    item.classList = 'item input-holder';
    item.innerHTML = `
                <i class='  ${complete} icon'></i>
                <h2 class="${done}">${arr[i].description}</h2>
                <i class="fa fa-trash icon trash" data-id = ${i}></i>`;
                // fa-ellipsis-v   
    parent.appendChild(item);
    }
}

export function addTask (arr, id, parent){
    if (document.getElementById(id).value != ''){

    
    const record = {
        description: document.getElementById(id).value,
        completed: false,
        index: arr.length
    };
    arr.push(record);
    display(arr, parent);
    document.getElementById(id).value = '';
}
}