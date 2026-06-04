import { data } from "./data/data";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "./api/api";
import { setUser } from "./store/clientSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
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
            });
  }}, []);
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