import { VegeFruitList } from "../const/VegeFruitList";
import Button from "./Buttons";

function List() {

    const renderButtonList = VegeFruitList.map((item, index) => {
        return <Button className="m-2 w-full text-center" secondary outline key={index}>{item.name}</Button>
    })

    return (
        <>
           {renderButtonList}
        </>
        

    )
}

export default List;