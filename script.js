const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = newListInput.value;
  if (item == null || item == "") return;
  const newItem = createItem(item);
  newListInput.value = null;
  lists.push(newItem);
  render();
});


function createItem(name) {
  return {
    "id": Date.now().toString(),
    "name": name
  };
}

function render() {
  clearElement(listContainer);
  lists.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText = item.name;
    listContainer.appendChild(li);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

