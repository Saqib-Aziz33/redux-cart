import { useEffect } from "react";
// import { fetchData } from "./lib/utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Item from "./pages/Item";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, loadData, fetchData } from "./features/dataSlice";
// others
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

function App() {
  const { status } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData("https://fakestoreapi.com/products/"));
    }
  }, [status, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
