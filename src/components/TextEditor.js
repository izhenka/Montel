import {useDispatch, useSelector} from "react-redux";
import {getTextEdit, saveEditedItem, setIdEdit, setTextEdit} from "../slices/todoList";
import Button from "../primitives/Button";

const TextEditor = () => {

    const textEdit = useSelector(getTextEdit);
    const dispatch = useDispatch();
    const onCancel = () => dispatch(setIdEdit(undefined));
    const onSave = () => dispatch(saveEditedItem());

    return (
        <div className='text-editor'>
            <div>
                <textarea
                    value={textEdit}
                    onChange={event => dispatch(setTextEdit(event.target.value))}
                    autoFocus={true}
                    placeholder='Angi gjøremål'
                />
            </div>

            <div className='text-editor-buttons'>
                <Button onClick={onSave} primary>Lagre</Button>
                <Button onClick={onCancel}>Avbryt</Button>
            </div>

        </div>
    )
};

export default TextEditor;