import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import AdminHome from "./pages/admin/Home";
import UserHome from "./pages/user/Home";
import Filesys from "./pages/FileSystem";
import { Worker } from "@react-pdf-viewer/core";
import Graphs from "./pages/Graphs";
import { useSelector } from 'react-redux';
import ScholarshipForm from "./components/ScholarshipForm";
import Folders from "./components/FolderTable";
function App() {
  const user=useSelector(state=>state.user);
  console.log(user.useremail);
  return (
    <div className="App bg-white scrollbar-hide">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      {/* {user.useremail==null?<Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/user" element={<Login />} />
            <Route path="/files" element={<Login />} />
            <Route path="/graphs" element={<Login />} />

          </Routes>
        </Router>:<Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/user" element={<UserHome />} />
            <Route path="/files" element={<Filesys />} />
            <Route path="/graphs" element={<Graphs />} />
          </Routes>
        </Router>} */}
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
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/scholarship" element={<ScholarshipForm />} />
            <Route path="/folders" element={<Folders />} />
          </Routes>
        </Router>
      </Worker>
      ;
    </div>
  );
}

export default App;
