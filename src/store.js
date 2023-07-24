import {configureStore} from '@reduxjs/toolkit';
import tabsReducer from './features/tabs/tabsSlice';
import todoReducer from './features/todo/todoSlice';

const store = configureStore({
    reducer: {
        tabs: tabsReducer,
        todo: todoReducer
    }
});

export default store;