import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddedServicePage from "./Page/AddedServicePage";
import AllServices from "./Page/AllServices";
import NavMenu from "./Page/NavMenu";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
function App() {
  return (
    <>
      <div>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/addService" element={<AddedServicePage />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
