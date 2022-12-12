import { Link } from "react-router-dom";
import Drawer from "./Drawer";

function Header() {
  return (
    <header className="p-2 bg-neutral text-neutral-content">
      <nav className="container mx-auto flex justify-between items-center p-2">
        <Link to="/" className="text-2xl font-semibold">
          Redux Cart
        </Link>
        {/* <button className="btn btn-primary">Cart</button> */}
        <Drawer />
      </nav>
    </header>
  );
}
export default Header;
