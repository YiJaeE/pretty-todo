let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'Javascript', completed: false }
]  

const $ulList = document.querySelector('.todos');
const $input = document.querySelector('.input');

render();
generateId();

// 렌더링
function render() {
  $ulList.innerHTML = '';

  todos.forEach ((todo) => { 
   $ulList.innerHTML += `<li><input type="checkbox" id="ex_chk3"> 
   <label for="ex_chk3"></label>${todo.content}</li>`
  })
}

$input.addEventListener('keyup', (e) => {
  if (e.keyCode !== 13) return;
  todos = [...todos, { id: generateId(), content: e.target.value, completed: false }];
  e.target.value = '';
  render();
});


function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}
