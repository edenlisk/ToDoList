/**
 * @jest-environment jsdom
 */
import { ToDoListClass } from './script.js';

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