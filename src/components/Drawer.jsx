import { useState } from "react";
import Drawer from "react-modern-drawer";
import { useSelector } from "react-redux";
//import styles 👇
import "react-modern-drawer/dist/index.css";

function MDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const { items } = useSelector((state) => state.cart);

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
          <h2 className="text-2xl">Total</h2>
          <h2 className="text-2xl">$0.00</h2>
        </div>

        <div className="mt-12">
          {items.length === 0 ? (
            <h4 className="text-1xl">No Items in cart</h4>
          ) : (
            items.map((item) => (
              <div
                className="flex gap-4 bg-white rounded-lg overflow-hidden p-2 my-3"
                key={item.id}
              >
                <img src={item.image} className="w-10" alt={item.title} />
                <div>
                  <h4 className="font-semibold">{item.title.slice(0, 20)}</h4>
                  <p className="font-bold text-primary">{item.price}</p>
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
