import { useEffect } from "react";
import { fetchData } from "./lib/utils";
import Footer from "./components/Footer";
// components
import Header from "./components/Header";
import Items from "./components/Items";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, loadData } from "./features/dataSlice";
// others
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

function App() {
  const { status } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRequest());
      fetchData().then((data) => dispatch(loadData(data)));
    }
  }, [status, dispatch]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="dark"
      />
      <Header />
      <Items />
      <Footer />
    </>
  );
}
export default App;
