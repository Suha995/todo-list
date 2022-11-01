

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
    item.classList.add("new-list-item");

    const top = document.createElement('div');
    top.classList.add("top");

    const bottom = document.createElement('div');
    bottom.classList.add("bottom");

    item.appendChild(top);
    item.appendChild(bottom);

    const left = document.createElement('div');
    left.classList.add("left");

    const right = document.createElement('div');
    right.classList.add("right");


    top.appendChild(left);
    top.appendChild(right);

    const input = document.createElement('input');
    input.type = 'text';
    input.readOnly = true;
    input.classList.add('list-item-content');
    input.value = text;

    left.appendChild(input);


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'id' + new Date().getTime();;
    checkbox.checked = finished;
    checkbox.classList.add('list-item-check');


    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    const labelTextNode = document.createTextNode('FINISHED');
    label.appendChild(labelTextNode);
    bottom.appendChild(checkbox);
    bottom.appendChild(label);

    

    const deleteButton = document.createElement('button');
    const deleteButtonTextNode = document.createTextNode('DELETE');
    deleteButton.appendChild(deleteButtonTextNode);
    deleteButton.classList.add('list-item-delete');
    

    const editButton = document.createElement('button');
    const editButtonTextNode = document.createTextNode('EDIT');
    editButton.appendChild(editButtonTextNode);
    deleteButton.classList.add('list-item-edit');


    right.appendChild(deleteButton);
    right.appendChild(editButton);
    node.appendChild(item);
    
    addEventHandlerToCheckbox(checkbox, text);
    addEventHandlerToDeleteButton(deleteButton, text);
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


function addEventHandlerToCheckbox(item, checkedElementValue){
    item.addEventListener('click', () => {
        //const checkedElementValue = item.parentNode.previousElementSibling.firstElementChild.value;
        console.log(checkedElementValue);
        const found = list.find( task => task.text === checkedElementValue);
        // console.log(found);
        found.finished = !found.finished;
        console.log(found);
    })
}


function addEventHandlerToDeleteButton(item, deletedElementValue){
    item.addEventListener('click', () => {
        console.log(deletedElementValue);
        confirm('Are you sure you want to delete this item');

    })
}