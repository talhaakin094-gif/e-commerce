import { data } from "./data/Data";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "./api/api";
import { setUser, authChecked } from "./store/clientSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCart } from "./store/cartSlice";
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        api.defaults.headers.common["Authorization"] = token;
        api.get("/verify")
            .then((res) => {
                dispatch(setUser({
                    user: res.data,
                    token
                }));
                localStorage.setItem("token", token);
                api.defaults.headers.common["Authorization"] = token;
            })
            .catch(() => {
                localStorage.removeItem("token");
                delete api.defaults.headers.common["Authorization"];
                dispatch(authChecked());
            });
  } else {
    dispatch(authChecked());
  }
}, []);
  useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      dispatch(setCart(savedCart));
  }, [dispatch]);
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Header />
      <PageContent />
      <Footer footer={data.footer}/>
      <ToastContainer />
    </>
  );
}

export default App;