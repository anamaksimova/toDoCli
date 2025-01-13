import fs from 'node:fs';
export const commands = option => {
  let tasks = [];

  if (option.add) {
    if (fs.existsSync('./toDoList')) {
      const res = fs.readFileSync('./toDoList', 'utf8');
      tasks = JSON.parse(res);
      const task = {
        id: tasks.length + 1,
        task: option.add,
        status: 'In work',
      };
      tasks.push(task);
      const taskJSON = JSON.stringify(tasks);
      fs.writeFileSync('./toDoList', taskJSON);
      console.log('Задача добавлена с идентификатором ' + task.id);
    } else {
      const task = {
        id: 1,
        task: option.add,
        status: 'In work',
      };
      tasks.push(task);
      const taskJSON = JSON.stringify(tasks);
      fs.writeFileSync('./toDoList', taskJSON);
      console.log('Задача добавлена с идентификатором 1');
    }
  }

  if (option.list) {
    const checkIfExists = fs.existsSync('./toDoList');
    if (checkIfExists) {
      const res = fs.readFileSync('./toDoList', 'utf8');
      const resJSON = JSON.parse(res);
      console.log('Список задач:');
      resJSON.forEach(item => {
        console.log(`${item.id}. [ ${item.status}] ${item.task}`);
      });
    } else {
      console.log('В списке еще нет задач');
    }
  }

  if (option.get) {
    const checkIfExists = fs.existsSync('./toDoList');
    if (checkIfExists) {
      const res = fs.readFileSync('./toDoList', 'utf8');
      const resJSON = JSON.parse(res);
      const taskInfo = resJSON.find(item => item.id == option.get);

      if (taskInfo) {
        console.log(`
        Задача с идентификатором ${taskInfo.id}:
        Название: ${taskInfo.task}
        Статус: ${taskInfo.status} `);
      } else {
        console.log('Задачи с таким идентификатором не существует');
      }
    } else {
      console.log('В списке еще нет задач');
    }
  }

  if (option.delete) {
    const checkIfExists = fs.existsSync('./toDoList');
    if (checkIfExists) {
      const res = fs.readFileSync('./toDoList', 'utf8');
      const resJSON = JSON.parse(res);
      if (!resJSON.some(item => item.id == option.delete)) {
        console.log('Такой задачи не существует');
      } else {
        resJSON.forEach(item => {
          if (item.id == option.delete) {
            const indexDelete = resJSON.findIndex(
              item => item.id == option.delete,
            );

            resJSON.splice(indexDelete, 1);

            const taskJSON = JSON.stringify(resJSON);
            fs.writeFileSync('./toDoList', taskJSON);
            console.log(`Задача с id=${item.id} удалена`);
          }
        });
      }
    } else {
      console.log('В списке еще нет задач');
    }
  }

  if (option.update) {
    const checkIfExists = fs.existsSync('./toDoList');
    if (checkIfExists) {
      const res = fs.readFileSync('./toDoList', 'utf8');
      const resJSON = JSON.parse(res);
      if (!resJSON.some(item => item.id == option.update[0])) {
        console.log('Такой задачи не существует');
      } else {
        resJSON.forEach(item => {
          if (item.id == option.update[0]) {
            item.task = option.update[1];
            console.log(`Задача с id=${item.id} обновлена`);
            return;
          }
        });
        const taskJSON = JSON.stringify(resJSON);
        fs.writeFileSync('./toDoList', taskJSON);
      }
    } else {
      console.log('В списке еще нет задач');
    }
  }

  if (option.status) {
    const checkIfExists = fs.existsSync('./toDoList');
    if (checkIfExists) {
      const res = fs.readFileSync('./toDoList', 'utf8');
      const resJSON = JSON.parse(res);
      if (!resJSON.some(item => item.id == option.status[0])) {
        console.log('Такой задачи не существует');
      } else {
        resJSON.forEach(item => {
          if (item.id == option.status[0]) {
            item.status = option.status[1];
            console.log(`Статус задачи с id=${item.id} обновлен`);
          }
        });
        const taskJSON = JSON.stringify(resJSON);
        fs.writeFileSync('./toDoList', taskJSON);
      }
    } else {
      console.log('В списке еще нет задач');
    }
  }

  if (option.default) {
    console.log('Неверная команда');
  }
};
