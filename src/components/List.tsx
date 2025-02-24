import { useSelector, useDispatch } from "react-redux";
import { RootState, moveItem, returnItem, setItemTimeout } from "../store";
import Button from "./Buttons";

function List() {
    const items = useSelector((state: RootState) => state.items.unassigned);
    const dispatch = useDispatch();

    const handleMove = (item: { type: string; name: string }) => {
        dispatch(moveItem(item));

        // Set timeout for automatic return after 5 seconds
        const timeoutId = setTimeout(() => {
            dispatch(returnItem(item));
        }, 5000);

        // Store timeout in Redux to allow cancellation if needed
        dispatch(setItemTimeout({ item, timeoutId }));
    };

    return (
        <>
            {items.map((item) => (
                <Button key={item.name} className="m-2 w-full text-center" secondary outline onClick={() => handleMove(item)}>
                    {item.name}
                </Button>
            ))}
        </>
    );

}

export default List;
