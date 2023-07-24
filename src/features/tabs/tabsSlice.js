import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: true,
    completed: false
}

const tabsSlice = createSlice({
    name: 'activeTab',
    initialState,
    reducers: {
        activate_active: () => ({active: true, completed: false}),
        completed_active: () => ({active: false, completed: true}),
    }
});

export const { activate_active, completed_active, all_active } = tabsSlice.actions;
export default tabsSlice.reducer;