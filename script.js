const searchBox = document.getElementById('searchbox');
const listItem = document.getElementById('list-item');
const addNote = document.getElementById('addNote');

let btn = document.getElementById('btnId');
btn.addEventListener('click', () => {
  if (searchBox.value === '') {
    alert('Please Write something');
  } else {
    let li = document.createElement('li');
    li.innerHTML = searchBox.value;
    listItem.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  searchBox.value = '';
  saveData();
});
listItem.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem('data', listItem.innerHTML);
}

function showTasks() {
  listItem.innerHTML = localStorage.getItem("data");
}
showTasks();