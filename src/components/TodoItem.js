import {useDispatch, useSelector} from "react-redux";
import {deleteItem, getIsInEditMode, setIdEdit, toggleItemIsCompleted} from "../slices/todoList";
import IconButton from "../primitives/IconButton";
import {mdiCheck, mdiDeleteOutline, mdiPencilOutline, mdiRadioboxBlank} from "@mdi/js";
import TextEditor from "./TextEditor";


const TodoItem = ({id, text, isCompleted}) => {
    const isInEditMode = useSelector(state => getIsInEditMode(state, id));
    const dispatch = useDispatch();

    if (isInEditMode) {
        return <TextEditor/>
    }
    return (
        <div className='todo-item'>
            <ToggleButton isCompleted={isCompleted} itemId={id}/>
            <span className={isCompleted && 'completed'}>{text}</span>
            <IconButton path={mdiPencilOutline}
                        onClick={() => dispatch(setIdEdit(id))}
                        title='Redigere'
            />
            <IconButton path={mdiDeleteOutline}
                        onClick={() => dispatch(deleteItem(id))}
                        title='Fjerne'
            />
        </div>
    )
};

const ToggleButton = ({isCompleted, itemId}) => {
    const dispatch = useDispatch();
    const iconPath = isCompleted ? mdiCheck : mdiRadioboxBlank;
    const title = isCompleted ? 'Merk som ikke fullført' : 'Merk som fullført';
    return (
        <IconButton path={iconPath}
                    onClick={() => dispatch(toggleItemIsCompleted(itemId))}
                    title={title}
        />
    )
}

export default TodoItem;