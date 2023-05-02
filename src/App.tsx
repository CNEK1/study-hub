import { Routes, Route, Outlet, Navigate, Router } from "react-router-dom";
import Login from "./pages/LoginRegisterForm/Login/Login";
import MainInfo from "./pages/MainFrame/MainInfo";
import Register from "./pages/LoginRegisterForm/Register/Register";
import UserProfile from "./pages/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import { getProfile } from "./store/auth/authCreators";

function App() {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authDate.accessToken
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<div>Error</div>} />

      <Route
        path="/user"
        element={isLoggedIn ? <UserProfile /> : <Navigate to={"/login"} />}
      />
      <Route path="/" element={<MainInfo />} />
    </Routes>
  );
}

export default App;
