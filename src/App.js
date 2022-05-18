import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddedServicePage from "./Page/AddedServicePage";
import AllServices from "./Page/AllServices";
import NavMenu from "./Page/NavMenu";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import LogIn from "./Page/Login";
import SignUp from "./Page/SignUp";
import RequireAuth from "./Page/RequireAuth";
function App() {
  return (
    <>
      <div className="px-12">
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <RequireAuth>
                <AllServices />
              </RequireAuth>
            }
          />
          <Route
            path="/addService"
            element={
              <RequireAuth>
                <AddedServicePage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
