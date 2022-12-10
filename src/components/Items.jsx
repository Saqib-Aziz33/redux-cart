import { useSelector } from "react-redux";
import Item from "./Item";

function Items() {
  const { items, loading } = useSelector((state) => state.data);

  if (loading) {
    return (
      <div className="container mx-auto my-16">
        <h3 className="text-center text-3xl">Loading...</h3>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-16 p-2">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Items;
