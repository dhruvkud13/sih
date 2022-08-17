import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import AdminHome from "./pages/admin/Home";
import UserHome from "./pages/user/Home";
import Filesys from "./pages/FileSystem";
import { FileView } from "./components/FileViewer";
import { Worker } from "@react-pdf-viewer/core";
import Form from "./components/Form";
function App() {
  return (
    <div className="App bg-white scrollbar-hide">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
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
            <Route path="/viewer" element={<FileView />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </Worker>
      ;
    </div>
  );
}

export default App;
