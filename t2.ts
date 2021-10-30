import "reflect-metadata";
import {createConnection} from "typeorm";
import {Task} from "./src/entity/Task";

// main
async function test(){
  const connection =  await createConnection();
  const task = new Task();
  task.title = "t2";
  task.content = "2";
  await connection.manager.save(task);
console.log(task);
  console.log("Saved id: " + task.id);
  console.log("Loading users from the database...");
  const tasks = await connection.manager.find(Task);
  await connection.close();
console.log(tasks);
}
//
test();
