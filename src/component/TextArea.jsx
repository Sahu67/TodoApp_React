import { useSelector, useDispatch } from "react-redux";
import { addAlert, add_todo, handle_typing, removeAlert } from "../features/todo/todoSlice";
import Alert from "./Alert";

const TextArea = () => {
    const {typed_text, alert} = useSelector((store) => store.todo);

    const dispatch = useDispatch();

    const handleClick = () => {
        if(typed_text === '') {
            dispatch(addAlert({type: 'danger', msg: 'Please enter something to add in the todo!'}));
        } else {
            dispatch(add_todo());
            dispatch(addAlert({type: 'success', msg: 'Todo is successfully added :)'}));
            dispatch(handle_typing({text: ''}));
        }

        setTimeout(() => dispatch(removeAlert()), 2000);
    };

    return (
        <>
            {alert.visible && <Alert {...alert} />}
            <div className="text-container">
                <textarea
                    name="todo"
                    className="text-area"
                    rows="5"
                    placeholder="Enter your task.."
                    value={typed_text}
                    onChange={(e) => dispatch(handle_typing({text: e.target.value}))}
                ></textarea>
                <button className="btn add" onClick={handleClick}>Add</button>
            </div>
        </>
    );
};

export default TextArea;