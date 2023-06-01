export type ToDoId = string;

export interface ToDo {
  id: ToDoId;
  text: string;
  isDone: boolean;
}
