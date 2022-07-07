export function check(arr, index) {
  if (arr[index].completed) return 'fa fa-check';
  return 'fa fa-square-o';
}

export function ifDone(arr, index) {
  if (arr[index].completed) return 'task done';
  return 'task';
}

export function store(arr) {
  localStorage.setItem('Task List', JSON.stringify(arr));
}

export function reOrder(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const { index } = arr[i];
    if (index !== i) {
      arr[i].index = i;
    }
  }
}

export function display(arr, parent) {
  parent.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const complete = check(arr, i);
    const done = ifDone(arr, i);
    const item = document.createElement('li');
    item.classList = 'item input-holder';
    item.id = `item${i}`;
    item.innerHTML = `
                <i class='  ${complete} checkbox'></i>
                <input id = "input${i}" type = "text" readOnly class="taskTitle ${done}" value = "${arr[i].description}" >
                <i class="fa fa-trash icon trash" id = "trash${i}" data-id = '${i}'></i>
                <i class="fa fa-ellipsis-v edit" data-id = "${i}"></i>`;
    // fa-ellipsis-v
    parent.appendChild(item);
  }
  const rmvBtnList = document.querySelectorAll('.trash');
  rmvBtnList.forEach((element) => {
    element.addEventListener('click', () => {
      arr.splice(element.dataset.id, 1);
      localStorage.setItem('Task List', JSON.stringify(arr));
      display(arr, parent);
      reOrder(arr);
    });
  });

  function updateTask(arr, parent, id, positionID) {
    const updatedText = document.getElementById(id).value;
    if (updatedText !== '') {
      arr[positionID].description = updatedText;
      display(arr, parent);
    }
  }

  const editable = document.querySelectorAll('.edit');
  editable.forEach((element) => {
    element.addEventListener('click', () => {
      for (let i = 0; i < arr.length; i += 1) {
        if (i !== element.dataset.id) {
          const input = document.getElementById(`input${i}`);
          const trash = document.getElementById(`trash${i}`);
          const item = document.getElementById(`item${i}`);
          trash.classList.remove('visible');
          item.classList.remove('bg-active');
          input.readOnly = true;
        }
      }
      const input = document.getElementById(`input${element.dataset.id}`);
      const trash = document.getElementById(`trash${element.dataset.id}`);
      const item = document.getElementById(`item${element.dataset.id}`);
      trash.classList.toggle('visible');
      item.classList.toggle('bg-active');
      input.readOnly = false;
      input.addEventListener('keydown', (pressed) => {
        if (pressed.key === 'Enter') {
          updateTask(arr, parent, `input${element.dataset.id}`, element.dataset.id);
          localStorage.setItem('Task List', JSON.stringify(arr));
          display(arr, parent);
        }
      });
    });
  });
}

export function addTask(arr, id, parent) {
  if (document.getElementById(id).value !== '') {
    const record = {
      description: document.getElementById(id).value,
      completed: false,
      index: arr.length,
    };
    arr.push(record);
    localStorage.setItem('Task List', JSON.stringify(arr));
    display(arr, parent);
    document.getElementById(id).value = '';
  }
}