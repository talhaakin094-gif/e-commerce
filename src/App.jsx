import { data } from "./data/data";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <PageContent />
      <Footer footer={data.footer}/>
    </>
  );
}

export default App;