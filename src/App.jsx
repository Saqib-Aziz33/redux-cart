import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import { fetchData } from "./lib/utils";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, loadData } from "./features/dataSlice";
// others
import "./app.css";
import { useEffect } from "react";

function App() {
  const { status } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRequest());
      fetchData()
        .then((data) => dispatch(loadData(data)))
        .catch();
    }
  }, [status, dispatch]);

  return (
    <>
      <Header />
      <Items />
      <Footer />
    </>
  );
}
export default App;
