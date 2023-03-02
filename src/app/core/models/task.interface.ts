import { AuthorInterface } from "./author.interface";
import { UserInteface } from "./user.interface";

export interface TaskInterface{
  id:string | number; //Todo 'eoeoe'
  title:string;
  tags:string[]; //Importante
  user:UserInteface;
  status: 'in-progress' | 'completed' | 'wait';
 }
