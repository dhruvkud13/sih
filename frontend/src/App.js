import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import AdminHome from "./pages/admin/Home";
import UserHome from "./pages/user/Home";
import Filesys from "./pages/FileSystem";
import FileViewer from "./components/FileViewer";
function App() {
  return (
    <div className="App bg-white scrollbar-hide">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/user" element={<UserHome />} />
          <Route path="/files" element={<Filesys />} />
          {/* <Route path="/viewer" element={<FileViewer />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
