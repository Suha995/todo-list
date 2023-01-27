// import createListItem from "./modules/createListItem.js";
import createModal from "./modules/createmodal.js";

class Task {
  constructor(text, finished) {
    this.text = text;
    this.finished = finished;
  }
}
const list = [
  {
    text: "Clean the kitchen",
    finished: false,
  },
  {
    text: "help my friend with her exam",
    finished: false,
  },
];

for (const task of list) {
  console.log(task.text, task.finished);
  const node = document.getElementsByClassName("todolist-items")[0];
  console.log(node);
  createListItem(node, task.text, task.finished);
}

function createListItem(node, text, finished) {
  const item = document.createElement("div");
  item.classList.add("new-list-item");

  const top = document.createElement("div");
  top.classList.add("top");

  const bottom = document.createElement("div");
  bottom.classList.add("bottom");

  item.appendChild(top);
  item.appendChild(bottom);

  const left = document.createElement("div");
  left.classList.add("left");

  const right = document.createElement("div");
  right.classList.add("right");

  top.appendChild(left);
  top.appendChild(right);

  const input = document.createElement("input");
  input.type = "text";
  input.readOnly = true;
  input.classList.add("list-item-content");
  input.value = text;

  left.appendChild(input);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "id" + new Date().getTime();
  checkbox.checked = finished;
  checkbox.classList.add("list-item-check");

  const label = document.createElement("label");
  label.setAttribute("for", checkbox.id);
  const labelTextNode = document.createTextNode("Finished");
  label.appendChild(labelTextNode);
  bottom.appendChild(checkbox);
  bottom.appendChild(label);

  const deleteButton = document.createElement("button");
  const deleteButtonTextNode = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonTextNode);
  deleteButton.classList.add("list-item-delete");

  const editButton = document.createElement("button");
  const editButtonTextNode = document.createTextNode("Edit");
  editButton.appendChild(editButtonTextNode);
  editButton.classList.add("list-item-edit");

  right.appendChild(deleteButton);
  // right.appendChild(editButton); //remove the edit functionality temporarilay
  node.appendChild(item);

  addEventHandlerToCheckbox(checkbox, text);
  addEventHandlerToDeleteButton(deleteButton, text, item);
  addEventHandlerToEditButton(editButton, text, item);
}

document.getElementById("submit").addEventListener("click", () => {
  console.log("clicked");
  if (!document.querySelector("input").value) {
    window.alert("the text input is empty");
  } else {
    const inputFieldContent =
      document.getElementById("submit").parentNode.previousElementSibling
        .firstElementChild;
    console.log(inputFieldContent.value);
    const newTask = new Task(inputFieldContent.value, false);
    list.push(newTask);
    // list.push({text : inputFieldContent.value, finished: false});
    const node = document.getElementsByClassName("todolist-items")[0];
    createListItem(node, inputFieldContent.value, false);
    inputFieldContent.value = "";
  }
});

function addEventHandlerToCheckbox(checkItem, checkedElementValue) {
  checkItem.addEventListener("click", () => {
    console.log(checkedElementValue);
    const found = list.find((task) => task.text === checkedElementValue);
    found.finished = !found.finished;
    const deleteAndEditSection =
      checkItem.parentNode.previousElementSibling.lastElementChild;
    console.log(deleteAndEditSection);
    deleteAndEditSection.classList.toggle("invisible");
    const newListItem = checkItem.parentNode.parentNode;
    console.log(newListItem);
    newListItem.classList.toggle("finished");
    const newListItemContent =
      checkItem.parentNode.previousElementSibling.firstElementChild
        .firstElementChild;
    newListItemContent.classList.toggle("list-item-content-finished");
    console.log(newListItemContent);
  });
}

function addEventHandlerToDeleteButton(deleteButton, elementToDelete, item) {
  deleteButton.addEventListener("click", (ev) => {
    console.log(elementToDelete);
    createModal(elementToDelete, "delete", item, list);
  });
}

function addEventHandlerToEditButton(editButton, elementToEdit, item) {
  editButton.addEventListener("click", (ev) => {
    console.log(elementToEdit);
    createModal(elementToEdit, "edit", item, list);
  });
}

// function createModal(elementValue, typeOfAction, item) {
//   const body = document.querySelector("body");
//   const modal = document.createElement("div");
//   modal.classList.add("modal");
//   const overlay = document.createElement("div");
//   overlay.setAttribute("id", "overlay");

//   //   const modal = document.querySelector(".modal");
//   //   const overlay = document.querySelector("#overlay");

//   const modalHeader = document.createElement("DIV");
//   modalHeader.classList.add("modal-header");

//   const modalTitle = document.createElement("DIV");
//   modalTitle.classList.add("modal-title");
//   typeOfAction === "delete"
//     ? modalTitle.appendChild(
//         document.createTextNode("Are you sure you want to delete this item?")
//       )
//     : modalTitle.appendChild(
//         document.createTextNode("Modifying the todo list item!")
//       );

//   const closeButton = document.createElement("BUTTON");
//   closeButton.classList.add("close-button");
//   closeButton.innerHTML = "&times;";
//   closeButton.addEventListener("click", () => {
//     modal.remove();
//     overlay.remove();
//   });

//   modalHeader.appendChild(modalTitle);
//   modalHeader.appendChild(closeButton);

//   const modalBody = document.createElement("DIV");
//   modalBody.classList.add("modal-body");
//   const listItem = document.createElement("input");
//   listItem.type = "text";
//   listItem.value = elementValue;

//   if (typeOfAction === "delete") {
//     listItem.readOnly = true;
//   } else {
//     console.log("edit");
//   }
//   modalBody.appendChild(listItem);

//   const modalFooter = document.createElement("DIV");
//   modalFooter.classList.add("modal-footer");
//   const form = document.createElement("form");
//   // form.setAttribute("action", "/");
//   const modalButton = document.createElement("button");
//   modalButton.classList.add("modal-button");
//   modalButton.setAttribute("type", "submit");
//   form.appendChild(modalButton);

//   if (typeOfAction === "delete") {
//     modalButton.appendChild(document.createTextNode("Yes, delete"));
//     console.log("hellllo");
//     modalButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log("whyyyy");
//       let indexOfDeletedElement;
//       for (const ele of list) {
//         if (ele.text === elementValue) {
//           indexOfDeletedElement = list.indexOf(ele);
//         }
//       }
//       list.splice(indexOfDeletedElement, 1);
//       console.log(list);
//       modal.remove();
//       overlay.remove();
//       item.remove();
//     });
//   } else {
//     modalButton.appendChild(document.createTextNode("EDIT"));
//     modalButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log("whyyyy");
//       let indexOfEditedElement;
//       let newValueOfEditedElement = listItem.value;
//       for (const ele of list) {
//         if (ele.text === elementValue) {
//           indexOfEditedElement = list.indexOf(ele);
//         }
//       }
//       list.splice(indexOfEditedElement, 1, newValueOfEditedElement);
//       console.log(list);
//       let x = item.firstElementChild.firstElementChild.firstElementChild;
//       x.value = newValueOfEditedElement;
//       console.log(x);
//       modal.remove();
//       overlay.remove();
//     });
//   }

//   modalFooter.appendChild(form);

//   modal.appendChild(modalHeader);
//   modal.appendChild(modalBody);
//   modal.appendChild(modalFooter);
//   modal.appendChild(modalFooter);
//   //   modal.classList.toggle("invisible");
//   //   overlay.classList.toggle("invisible");
//   body.appendChild(modal);
//   body.appendChild(overlay);
// }
