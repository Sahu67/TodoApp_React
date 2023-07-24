import TextArea from "./TextArea";
import TodoList from "./TodoList";

const MainContainer = () => {    
    return (
        <div className="main-container">
            <TextArea />
            <TodoList />
        </div>
    );
}

export default MainContainer;