import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {Task} from "../entity/Task";

interface IArgs {
  id: number,
  title: string,
}
//
const LibTask = {
  getItems :async function(){
    try {
      const connection =  await createConnection();
      const tasks = await connection.manager.find(Task);
      await connection.close();
//console.log(tasks);      
      return tasks;
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems');
    }          
  },    
  getTask :async function(id: number){
    try {
      const connection =  await createConnection();
      const task = new Task();
      const taskRepository = getRepository(Task);
      const taskOne: any = await taskRepository.findOne(Number(id));
//console.log( taskOne) ;
      await connection.close();  
      return taskOne;
    } catch (err) {
      console.error(err);
      throw new Error('Error , getTask');
    }          
  },
  addTask :async function(args: IArgs){
    try {
//console.log(args);
      const connection =  await createConnection();
      const task = new Task();
      task.title = args.title;
      task.content = "";
      await connection.manager.save(task);
      await connection.close();      
      return task
    } catch (err) {
      console.error(err);
      throw new Error('Error , addTask');
    }          
  },
  updateTask :async function(args: IArgs){
    try {
//console.log( args)    
      const connection =  await createConnection();
      const task = new Task();
      const taskRepository = getRepository(Task);
      const taskOne: any = await taskRepository.findOne(Number(args.id));
//console.log( taskOne) ;
      taskOne.title = args.title;
      await taskRepository.save(taskOne);
      await connection.close();  
      return args
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateTask');
    }          
  },
  deleteTask :async function(args: IArgs){
    try {
//console.log( args) ;
      const connection =  await createConnection();
      const task = new Task();
      const taskRepository = getRepository(Task);
      const taskOne: any = await taskRepository.findOne(Number(args.id));
//console.log( taskOne.id) ;
      await taskRepository.remove(taskOne); 
      await connection.close();     
      return args
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteTask');
    }          
  },  
}
export default LibTask;
