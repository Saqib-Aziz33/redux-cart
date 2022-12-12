import { useState } from "react";
import Drawer from "react-modern-drawer";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { toast } from "react-toastify";

function MDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeFromCart(id) {
    dispatch(removeItem(id));
    toast.success("Item Removed");
  }

  return (
    <>
      <button onClick={toggleDrawer} className="btn btn-primary ml-auto">
        Cart
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="cart-drawer p-2"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl text-secondary font-bold">Total:</h2>
          <h2 className="text-2xl text-secondary">${total}</h2>
        </div>

        <div className="mt-12">
          {items.length === 0 ? (
            <h4 className="text-1xl">No Items in cart</h4>
          ) : (
            items.map((item) => (
              <div
                className="flex gap-4 bg-white rounded-lg overflow-hidden p-2 my-3 relative"
                key={item.id}
              >
                <div
                  className="absolute font-bold right-2 top-0 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </div>
                <div className="cart-img-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <h4 className="font-semibold">
                    {item.title.slice(0, 15)}...
                  </h4>
                  <p className="font-bold text-primary">${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </Drawer>
    </>
  );
}
export default MDrawer;
