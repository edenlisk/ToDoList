/**
 * @jest-environment jsdom
 */
import { ToDoListClass } from './script.js';
import Interactive from './interactive.js';

describe('Testing Add and remove methods', () => {
  const ToDoList = new ToDoListClass();
  test('add first item', () => {
    const description = 'get milk';
    ToDoList.addToDo(description);
    const result = JSON.parse(localStorage.getItem('todo'));
    expect(result.length).toEqual(1);
  });
  test('add second item', () => {
    ToDoList.addToDo('completing assignments');
    const result = JSON.parse(localStorage.getItem('todo'));
    expect(result.length).toEqual(2);
  });
  test('remove item', () => {
    ToDoList.removeItem(0);
    const result = JSON.parse(localStorage.getItem('todo'));
    expect(result.length).toEqual(1);
  });
});

describe('Testing Edit, Update and clear completed', () => {
  test('add first element in document', () => {
    const toDoDescription = 'New Task';
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const listContainer = document.querySelector('.list-container');
    ToDoListClass.createToDo(listContainer, toDoDescription);
    expect(listContainer.childElementCount).toEqual(1);
  });
  test('add second element in document', () => {
    const toDoDescription = 'Second Task';
    // document.body.innerHTML = `<ul class="list-container"></ul>`;
    const listContainer = document.querySelector('.list-container');
    ToDoListClass.createToDo(listContainer, toDoDescription);
    expect(listContainer.childElementCount).toEqual(2);
  });

  // update first task
  test('update todo description', () => {
    const inputValue = document.querySelector('.inputvalue');
    const newDescription = 'updated description';
    ToDoListClass.updateToDo(inputValue, newDescription);
    // initial value of inputValue = 'New Task'
    // new value of inputValue = 'updated description'
    expect(inputValue.value).toEqual(newDescription);
  });

  // update todo description in local storage
  test('update to do in local storage', () => {
    const newDescription = 'new task';
    const list = [
      {
        description: 'old task',
        completed: false,
      },
    ];
    ToDoListClass.updateTodoStorage(list[0], newDescription);
    expect(list[0].description).toBe('new task');
  });

  // update completed status
  test('update status in local storage', () => {
    const list = [
      {
        description: 'First Task',
        completed: false,
      },
    ];
    // function
    Interactive.updateStatus(list[0]);
    expect(list[0]).toBeTruthy();
  });

  // clear all completed
  test('clear all completed', () => {
    let list = [
      {
        description: 'First Task',
        completed: false,
      },
      {
        description: 'Second Task',
        completed: true,
      },
      {
        description: 'Third Task',
        completed: true,
      },
    ];
    list = Interactive.removeCompleted(list);
    expect(list.length).toEqual(1);
    expect(list[0].description).toEqual('First Task');
  });
});