function createModal(elementValue, typeOfAction, item, list) {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");

  //   const modal = document.querySelector(".modal");
  //   const overlay = document.querySelector("#overlay");

  const modalHeader = document.createElement("DIV");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("DIV");
  modalTitle.classList.add("modal-title");
  typeOfAction === "delete"
    ? modalTitle.appendChild(
        document.createTextNode("Are you sure you want to delete this item?")
      )
    : modalTitle.appendChild(
        document.createTextNode("Modifying the todo list item!")
      );

  const closeButton = document.createElement("BUTTON");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("DIV");
  modalBody.classList.add("modal-body");
  const listItem = document.createElement("input");
  listItem.type = "text";
  listItem.value = elementValue;

  if (typeOfAction === "delete") {
    listItem.readOnly = true;
  } else {
    console.log("edit");
  }
  modalBody.appendChild(listItem);

  const modalFooter = document.createElement("DIV");
  modalFooter.classList.add("modal-footer");
  const form = document.createElement("form");
  // form.setAttribute("action", "/");
  const modalButton = document.createElement("button");
  modalButton.classList.add("modal-button");
  modalButton.setAttribute("type", "submit");
  form.appendChild(modalButton);

  if (typeOfAction === "delete") {
    modalButton.appendChild(document.createTextNode("Yes, delete"));
    console.log("hellllo");
    modalButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("whyyyy");
      let indexOfDeletedElement;
      for (const ele of list) {
        if (ele.text === elementValue) {
          indexOfDeletedElement = list.indexOf(ele);
        }
      }
      list.splice(indexOfDeletedElement, 1);
      console.log(list);
      modal.remove();
      overlay.remove();
      item.remove();
    });
  } else {
    modalButton.appendChild(document.createTextNode("EDIT"));
    modalButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("whyyyy");
      let indexOfEditedElement;
      let newValueOfEditedElement = listItem.value;
      for (const ele of list) {
        if (ele.text === elementValue) {
          indexOfEditedElement = list.indexOf(ele);
        }
      }
      list.splice(indexOfEditedElement, 1, newValueOfEditedElement);
      console.log(list);
      let x = item.firstElementChild.firstElementChild.firstElementChild;
      x.value = newValueOfEditedElement;
      console.log(x);
      modal.remove();
      overlay.remove();
    });
  }

  modalFooter.appendChild(form);

  modal.appendChild(modalHeader);
  modal.appendChild(modalBody);
  modal.appendChild(modalFooter);
  modal.appendChild(modalFooter);
  //   modal.classList.toggle("invisible");
  //   overlay.classList.toggle("invisible");
  body.appendChild(modal);
  body.appendChild(overlay);
}

export default createModal;
