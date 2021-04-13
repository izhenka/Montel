import {useDispatch, useSelector} from "react-redux";
import {ALL_FILTER, COMPLETED_FILTER, getFilter, NOT_COMPLETED_FILTER, setFilter} from "../slices/todoList";
import Button from "../primitives/Button";

const Filters = () => {
    return (
        <div className='filters'>
            <FilterButton filter={ALL_FILTER}>Alle</FilterButton>
            <FilterButton filter={COMPLETED_FILTER}>Fullført</FilterButton>
            <FilterButton filter={NOT_COMPLETED_FILTER}>Ikke fullført</FilterButton>
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