export default class Interactive {
  constructor() {
    this.toDoList = JSON.parse(localStorage.getItem('todo')) || [];
  }

  // update status
  static updateStatus(toDoObject) {
    toDoObject.completed = toDoObject.completed === false;
  }

  // remove all completed tasks
  static removeCompleted(list) {
    const newList = list.filter((task) => task.completed !== true);
    return newList;
  }

  // add event listener on reload icon
  static reload(refresh) {
    refresh.addEventListener('click', () => {
      window.location.reload();
    });
  }
}