import {useDispatch, useSelector} from "react-redux";
import {COMPLETED_FILTER, getFilter, NOT_COMPLETED_FILTER, setFilter} from "../slices/todoList";
import Button from "../primitives/Button";

const Filters = () => {
    return (
        <div className='filters'>
            <FilterButton filter={undefined}>All</FilterButton>
            <FilterButton filter={COMPLETED_FILTER}>Completed</FilterButton>
            <FilterButton filter={NOT_COMPLETED_FILTER}>Not completed</FilterButton>
        </div>
    )
};


const FilterButton = ({filter, children}) => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(getFilter);
    const className = activeFilter === filter && 'active';
    return (
        <Button
            onClick={() => dispatch(setFilter(filter))}
            className={className}
        >
            {children}
        </Button>
    )
}

export default Filters;