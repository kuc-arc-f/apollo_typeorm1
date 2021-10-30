import "reflect-metadata";
import {createConnection, getRepository } from "typeorm";
import {Task} from "./src/entity/Task";

async function test(){
  const connection =  await createConnection();
  const task = new Task();
  const taskRepository = getRepository(Task);
  const taskOne = await taskRepository.findOne(1);
  await taskRepository.remove(taskOne);
  const tasks = await connection.manager.find(Task);
  await connection.close();
  console.log(tasks);
}
test();
