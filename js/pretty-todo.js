let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'Javascript', completed: true }
]  

const $ulList = document.querySelector('.todos');
const $input = document.querySelector('.input');
const $completeAllCK = document.querySelector('#ck-complete-all');
const $activeLength = document.querySelector('.active-todos');
const $completedLength = document.querySelector('.completed-todos');
const $clearCompleted = document.querySelector('.clearCompleted');

render();
generateId();

// 렌더링
function render() {
  $ulList.innerHTML = '';

  todos.forEach ((todo) => { 
   $ulList.innerHTML += `<li id="${todo.id}"><input type="checkbox" class="ex_chk3" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}> 
   <label for="ck-${todo.id}"></label>${todo.content}<button class="remove-todo">X</button></li>`
  })
  $activeLength.innerHTML = todos.filter(todo => !todo.completed).length;
  $completedLength.innerHTML = todos.filter(todo => todo.completed).length;
}

$input.addEventListener('keyup', (e) => {
  if (e.keyCode !== 13) return;
  todos = [{ id: generateId(), content: e.target.value, completed: false }, ...todos];
  e.target.value = '';
  render();
});


function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

$ulList.addEventListener('click', (e) => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  render();
});

$clearCompleted.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  render();
})

$completeAllCK.addEventListener('change', (e) => {
  if (e.target.checked) {
    todos = todos.map(todo => todo.completed === false ? {...todo, completed: !todo.completed} : todo)
  } else {
    todos = todos.map(todo => todo.completed === true ? {...todo, completed: !todo.completed} : todo)
  }
  render();
})