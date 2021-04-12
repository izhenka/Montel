import {useDispatch, useSelector} from "react-redux";
import {getIsInEditMode, NEW_ITEM, setIdEdit,} from "../slices/todoList";
import TextEditor from "./TextEditor";
import Button from "../primitives/Button";

export const AddTodoButton = () => {
    const dispatch = useDispatch();
    const isInEditMode = useSelector(getIsInEditMode);
    return (isInEditMode ?
            <TextEditor/>
            :
            <Button onClick={() => dispatch(setIdEdit(NEW_ITEM))}>
                + Legg til et gjøremål
            </Button>
    )
};