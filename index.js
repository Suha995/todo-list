

const list = [
    {
    text: "Clean the kitchen",
    finished: false
    },
    {
        text: "help my friend with her exam",
        finished: true  
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
}



document.getElementById('submit').addEventListener('click', () => {
    console.log('clicked');
    if(!document.querySelector('input').value){
        window.alert('the text input is empty');
    }
    else{
        const newItem = document.getElementById('submit').parentNode.previousElementSibling.firstElementChild;
        console.log(newItem.value);
        list.push({text : newItem.value , finished: false});
        const node = document.getElementsByClassName('todolist-items')[0];
        createListItem(node, newItem.value, false);
        newItem.value = '';
    }
})

