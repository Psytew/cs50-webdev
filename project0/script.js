const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var toDoId = 0

function newTodo() {
  //alert('New TODO button clicked!')
  var newOne = document.createElement('div')
  var newOneText = document.createElement('label')
  var newOneButton = document.createElement('input')
  var newOneDeleteButton = document.createElement('button')

  newOne.setAttribute('id', toDoId)

  newOneButton.setAttribute('type', 'checkbox')
  newOneButton.setAttribute('onClick', 'checkTheBox()')

  newOneText.setAttribute('display','inline')

  newOneText.textContent = window.prompt("New Task:","task goes here")

  newOneDeleteButton.textContent = "Delete"
  newOneDeleteButton.setAttribute('onClick', 'deleteToDo(document.getElementById(' + toDoId + '))')
  toDoId++

  newOne.appendChild(newOneButton)
  newOne.appendChild(newOneText)
  newOne.appendChild(newOneDeleteButton)
  list.appendChild(newOne)

  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + 1
  uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]').length - document.querySelectorAll('input[type="checkbox"]:checked').length
}

function checkTheBox(){
	uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]').length - document.querySelectorAll('input[type="checkbox"]:checked').length
}

function deleteToDo(item){
	list.removeChild(item)
	itemCountSpan.textContent = parseInt(itemCountSpan.textContent) - 1
	uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]').length - document.querySelectorAll('input[type="checkbox"]:checked').length
}
