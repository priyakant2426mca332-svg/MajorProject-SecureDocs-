// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from ".//components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Supupload from "./components/SupUpload/SupUpload";
import MyDocuments from "./components/MyDocuments/MyDocs"
import { useAuth } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import RenameModal from "./components/RenameModal/RenameModal";
import ShareModal from "./components/ShareModal/ShareModal";

const App = () => {
  const { session, loading } = useAuth();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!session ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/supupload" element={<Supupload />} />
            <Route path="/mydocuments" element={<MyDocuments />} />
            <Route path="/sharemodal" element={<ShareModal />} />
            <Route path="/renamemodal" element={<RenameModal />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
