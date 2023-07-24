import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
    const { active_list, completed_list } = useSelector(store => store.todo);
    const {active, completed} = useSelector(store => store.tabs);

    if(active) {
        if(active_list) {
            return (
                <div className="todo-list">
                    {
                        active_list && 
                        active_list.map(todo => <Todo key={todo.id} {...todo} type='active_todo' />)
                    }
                </div>
            );
        } else {
            return (
                <div className="nothing">There are no active todo's present!!</div>
            );
        }
    }

    if(completed) {
        if(completed_list) {
            return (
                <div className="todo-list">
                    {
                        completed_list && 
                        completed_list.map(todo => <Todo key={todo.id} {...todo} type='completed_todo' state='true' />)
                    }
                </div>
            );
        } else {
            return (
                <div className="nothing">There are no completed todo's present!!</div>
            );
        }
    }
    
}

export default TodoList;