import { useSelector, useDispatch } from "react-redux";
import { RootState, returnItem } from "../store";
import Button from "./Buttons";

function VegetableList() {
    const vegetables = useSelector((state: RootState) => state.items.vegetables);
    const dispatch = useDispatch();

    const handleReturn = (item: { type: string; name: string }) => {
        dispatch(returnItem(item));
    };

    return (
        <div className="border border-gray-300 h-full mr-2 mt-2">
            <h2 className="bg-gray-200 text-gray-900 flex justify-center items-center h-10 font-bold">Vegetable</h2>

            <div className="m-2">
                {vegetables.map((item) => (
                    <Button key={item.name} secondary outline className="w-full text-center mt-2" onClick={() => handleReturn(item)}>
                        {item.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default VegetableList;
