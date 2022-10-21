

class Task{
    constructor(text, finished){
        this.text = text;
        this.finished = finished;
    }

}
const list = [
    {
    text: "Clean the kitchen",
    finished: false
    },
    {
        text: "help my friend with her exam",
        finished: false  
    }
]

for(const task of list){
    console.log(task.text, task.finished);
    node = document.getElementsByClassName('todolist-items')[0];
    console.log(node);
    createListItem(node, task.text, task.finished);
}



function createListItem(node, text, finished){
    const item = document.createElement('div');
    item.classList.add("list-item");

    const left = document.createElement('div');
    left.classList.add("left");

    const right = document.createElement('div');
    right.classList.add("right");

    const input = document.createElement('input');
    input.type = 'text';
    input.readOnly = true;

    input.classList.add('list-item-content');
    input.value = text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = finished;
    checkbox.classList.add('list-item-check');

    item.appendChild(left);
    item.appendChild(right);
    left.appendChild(input);
    right.appendChild(checkbox);

    node.appendChild(item);
    
    addEventHandlersToListItems(checkbox, text);
}



document.getElementById('submit').addEventListener('click', () => {
    console.log('clicked');
    if(!document.querySelector('input').value){
        window.alert('the text input is empty');
    }
    else{
        const inputFieldContent = document.getElementById('submit').parentNode.previousElementSibling.firstElementChild;
        console.log(inputFieldContent.value);
        const newTask = new Task(inputFieldContent.value, false);
        list.push(newTask);
        // list.push({text : inputFieldContent.value, finished: false});
        const node = document.getElementsByClassName('todolist-items')[0];
        createListItem(node, inputFieldContent.value, false);
        inputFieldContent.value = '';
    }
})


function addEventHandlersToListItems(item, checkedElementValue){
    item.addEventListener('click', () => {
        //const checkedElementValue = item.parentNode.previousElementSibling.firstElementChild.value;
        console.log(checkedElementValue);
        const found = list.find( task => task.text === checkedElementValue);
        // console.log(found);
        found.finished = !found.finished;
        console.log(found);
    })
}