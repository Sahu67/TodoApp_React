import { createSlice } from "@reduxjs/toolkit";
import { TodoFunctions } from "./TodoFunctions";

const initialState = {
    typed_text: '',
    id: 1,
    alert: {
        visible: false,
        type: '',
        msg: ''
    },
    active_list: ((localStorage.getItem('active_todo')) ? (JSON.parse(localStorage.getItem('active_todo'))) : false),
    completed_list: ((localStorage.getItem('completed_todo')) ? (JSON.parse(localStorage.getItem('completed_todo'))) : false),
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: TodoFunctions
});

export const { handle_typing, add_todo, addAlert, removeAlert, deleteTodo, addCompleted } = todoSlice.actions;
export default todoSlice.reducer;