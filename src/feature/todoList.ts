import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../models/ToDo';
import { todos as TODO_LIST } from '../helpers/constants';
import { v4 as uuidv4 } from 'uuid';

export interface TodoState {
  todos: ToDo[];
  inputToDo: string;
}

const initialState: TodoState = {
  todos: TODO_LIST,
  inputToDo: '',
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state) => {
      const newTodo: ToDo = {
        text: state.inputToDo,
        isDone: false,
        id: uuidv4(),
      };

      state.todos = [...state.todos, newTodo];
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }

        return todo;
      });

      state.todos = updatedTodos;
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const updatedTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );

      state.todos = updatedTodos;
    },
    inputChangeAction: (state, action: PayloadAction<string>) => {
      state.inputToDo = action.payload;
    },
  },
});

export const {
  createAction,
  updateAction,
  deleteAction,
  inputChangeAction,
} = todoSlice.actions;

export default todoSlice.reducer;
