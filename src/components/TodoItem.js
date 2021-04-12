import {useDispatch} from "react-redux";
import {toggleItemIsCompleted} from "../slices/todoList";

const TodoItem = ({id, text, isCompleted}) => {
    const dispatch = useDispatch();
    return (
        <div className='todo-item'>
            <input type="checkbox"
                   checked={isCompleted}
                   onChange={() => dispatch(toggleItemIsCompleted(id))}
            />
            <span className={isCompleted && 'completed'}>{text}</span>
        </div>
    )


};

export default TodoItem;