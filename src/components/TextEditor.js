import {useDispatch, useSelector} from "react-redux";
import {getTextEdit, saveEditedItem, setIdEdit, setTextEdit} from "../slices/todoList";
import Button from "../primitives/Button";

const TextEditor = () => {

    const textEdit = useSelector(getTextEdit);
    const dispatch = useDispatch();
    const onCancel = () => dispatch(setIdEdit(undefined));
    const onSave = () => dispatch(saveEditedItem());

    return (
        <div>
            <div>
                <input
                    value={textEdit}
                    onChange={event => dispatch(setTextEdit(event.target.value))}
                />
            </div>

            <Button onClick={onCancel}>Avbryt</Button>
            <Button onClick={onSave}>Lagre</Button>
        </div>


    )


};

export default TextEditor;