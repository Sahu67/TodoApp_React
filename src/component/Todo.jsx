import { useDispatch } from "react-redux";
import { deleteTodo, addCompleted, addAlert, removeAlert } from "../features/todo/todoSlice";

const Todo = (props) => {
    const { todo, date, id, type } = props;
    const state = props?.state;
    const completed_date = props?.completed_at;

    const dispatch = useDispatch();

    const todo_delete = (id, type) => {
        if(confirm('Are you sure! You want to delete this??')) {
            dispatch(deleteTodo({id, type}));
            dispatch(addAlert({type: 'success', msg: 'Todo is successfully deleted :)'}));

            setTimeout(() => dispatch(removeAlert()), 2000);
        }
    }

    const handleCompleted = (id, todo, date, type) => {
        dispatch(addCompleted({id, todo, date}));
        dispatch(deleteTodo({id, type}));

        dispatch(addAlert({type: 'success', msg: 'Successfully added in the completed list :)'}));

        setTimeout(() => dispatch(removeAlert()), 2000);
    }

    return (
        <div className="todo">
            {state ? <p><del>{todo}</del></p> : <p>{todo}</p>}
            <span className="date">-> {date}</span>
            {
                state && <span className="date">-> Completed at: {completed_date}</span>
            }
            <div className="action-btn">
                {
                    !state && 
                    (<button className="a-btn a-btn1" onClick={() => handleCompleted(id, todo, date, type)}>
                        <i className="fa-solid fa-check-double"></i>
                    </button>)
                }
                <button className="a-btn a-btn2" onClick={() => todo_delete(id, type)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default Todo;
