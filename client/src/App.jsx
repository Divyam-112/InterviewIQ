import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import axiosInstance from "./utils/axiosInstance";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import InterviewPage from "./pages/InterviewPage";
import InterviewHistory from "./pages/InterviewHistory";
import Pricing from "./pages/Pricing";
import InterviewReport from "./pages/InterviewReport";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axiosInstance.get("/api/user/current-user");
        dispatch(setUserData(result.data));
      } catch (error) {
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/pricing" element={<Pricing />} />

      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <InterviewPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <InterviewHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/report/:id"
        element={
          <ProtectedRoute>
            <InterviewReport />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
