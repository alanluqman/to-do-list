import { display, reOrder, store } from "./crud";

export function checkTask(item, arr, parent){
    if (arr[item].completed === false){
        arr[item].completed = true;
        store(arr);
        display(arr, parent);
    }
    else {
        arr[item].completed = false;
        store(arr);
        display(arr, parent);
    }
}

export function removeCompleted(arr, parent){
    const newList = arr.filter(obj => obj.completed == false);
    arr = [...newList];
    reOrder(arr);
    store(arr);
    display(arr, parent);
    location.reload();
    
}