import { useDispatch } from "react-redux";
import { RES_CARD_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log("items Data : ", items);

  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItem"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                💸 :{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
                ₨
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => addItemHandler(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={RES_CARD_LOGO + item.card.info.imageId}
              alt="item-logo"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
