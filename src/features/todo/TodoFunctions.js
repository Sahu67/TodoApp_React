export const TodoFunctions = {
    handle_typing: (state, {payload: {text}}) => {
        state.typed_text = text;
    },
    add_todo: (state) => {
        let active_arr = [];
        if(state.active_list) {
            active_arr = state.active_list;
        }

        let date = new Date();
        const date_str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        const todo_obj = {
            id: Math.round(date.getTime() / 1000),
            todo: state.typed_text.trim(),
            date: date_str
        };

        active_arr.push(todo_obj);

        localStorage.setItem('active_todo', JSON.stringify(active_arr));
        state.active_list = JSON.parse(localStorage.getItem('active_todo'));
    },
    addAlert: (state, {payload: {type, msg}}) => {
        state.alert = {
            visible: true,
            type: type,
            msg: msg
        }
    },
    removeAlert: (state) => {
        state.alert = {
            visible: false,
            type: '',
            msg: ''
        }
    },
    deleteTodo: (state, {payload: {id, type}}) => {
        if(type==='active_todo') {
            const active_todo = state.active_list.filter(todo => todo.id !== id);
            localStorage.setItem('active_todo', JSON.stringify(active_todo));

            if(localStorage.getItem('active_todo') === '[]') {
                localStorage.removeItem('active_todo');
                state.active_list = false;
                return;
            }
            state.active_list = JSON.parse(localStorage.getItem('active_todo'));
        }

        if(type==='completed_todo') {
            const completed_todo = state.completed_list.filter(todo => todo.id !== id);
            localStorage.setItem('completed_todo', JSON.stringify(completed_todo));

            if(localStorage.getItem('completed_todo') === '[]') {
                localStorage.removeItem('completed_todo');
                state.completed_list = false;
                return;
            }
            state.completed_list = JSON.parse(localStorage.getItem('completed_todo'));
        }
    },
    addCompleted: (state, {payload: {id, todo, date}}) => {
        let comp_arr = [];

        if(state.completed_list) {
            comp_arr = state.completed_list;
        }

        let comp_date = new Date();
        const comp_date_str = `${comp_date.getFullYear()}-${comp_date.getMonth() + 1}-${comp_date.getDate()} ${comp_date.getHours()}:${comp_date.getMinutes()}:${comp_date.getSeconds()}`;

        const comp_obj = {
            id,
            todo,
            date,
            completed_at: comp_date_str
        };

        comp_arr.push(comp_obj);

        localStorage.setItem('completed_todo', JSON.stringify(comp_arr));
        state.completed_list = JSON.parse(localStorage.getItem('completed_todo'));
    }
}