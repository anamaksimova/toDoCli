#!/usr/bin/env node
import { argsParse } from './util/argsParse.js';
import { commands } from './service/commands.js';

const app = () => {
  const args = argsParse(process.argv);
  if (args.help) {
    console.log(  `   
    help                      | помощь
    add '<task>'              | добавить новую задачу.
    list                      | вывести список всех задач.
    get <id>                  | вывести информацию о задаче с указанным идентификатором.
    update <id> '<newTask>'   | обновить задачу с указанным идентификатором.
    status <id> '<newStatus>' | обновить статус задачи с указанным идентификатором.
    delete <id>               | удалить задачу с указанным идентификатором. `);
  }

  if (args.add) {
    commands({ add: args.add });
  }

  if (args.list) {
    commands({ list: true });
  }

  if (args.get) {
    commands({ get: args.get });
  }

  if (args.delete) {
    commands({ delete: args.delete });
  }

  if (args.update) {
    commands({ update: args.update });
  }

  if (args.status) {
    commands({ status: args.status });
  }

  if (args.default) {
    commands({ default: args.default });
  }
};

app();
