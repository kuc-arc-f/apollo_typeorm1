import "reflect-metadata";
import {createConnection} from "typeorm";
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
      throw new Error('Error , getItems');
    }          
  },    
  getTask :async function(id: number){
    try {
      return {};
    } catch (err) {
      throw new Error('Error , getTask');
    }          
  },
  addTask :async function(args: IArgs){
    try {
      return {}
    } catch (err) {
      throw new Error('Error , addTask');
    }          
  },
  updateTask :async function(args: IArgs){
    try {
// console.log( item)    
      return args
    } catch (err) {
      throw new Error('Error , updateTask');
    }          
  },
  deleteTask :async function(args: IArgs){
    try {
      return {}
    } catch (err) {
      throw new Error('Error , deleteTask');
    }          
  },  
}
export default LibTask;
