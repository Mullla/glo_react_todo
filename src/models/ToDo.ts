export type ToDoId = number;

export interface ToDo {
  id: ToDoId;
  text: string;
  isDone: boolean;
}
