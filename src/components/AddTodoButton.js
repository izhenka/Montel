import {useDispatch, useSelector} from "react-redux";
import {getIsInEditMode, NEW_ITEM_ID, setIdEdit,} from "../slices/todoList";
import TextEditor from "./TextEditor";
import Button from "../primitives/Button";

export const AddTodoButton = () => {
    const isInEditMode = useSelector(state => getIsInEditMode(state, NEW_ITEM_ID));
    const dispatch = useDispatch();

    if (isInEditMode) {
        return <TextEditor/>;
    }
    return (
        <Button onClick={() => dispatch(setIdEdit(NEW_ITEM_ID))}>
            + Legg til et gjøremål
        </Button>
    )
};