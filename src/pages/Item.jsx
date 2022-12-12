import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../features/cartSlice";

function Item() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { status, items } = useSelector((state) => state.data);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (status === "success") {
      setItem(items.find((itm) => itm.id === Number(id)));
    }
  }, [status, id, items]);

  function addToCart() {
    dispatch(addItem(item));
    toast.success("Item added");
  }

  return (
    <div className="container mx-auto my-16">
      {status !== "success" ? (
        <div className="my-16">
          <h2 className="text-center text-3xl">Loading...</h2>
        </div>
      ) : (
        item && (
          <div className="block sm:grid grid-cols-3 bg-base-100 shadow-xl item py-8 px-4 gap-4">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className=" col-span-2">
              <h2 className="text-3xl mb-4">{item.title}</h2>
              <p>{item.description}</p>
              <h4 className="text-primary font-bold card text-2xl mt-2">
                ${item.price}
              </h4>
              <div className="card-actions mt-8">
                <button onClick={addToCart} className="btn btn-primary">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Item;
