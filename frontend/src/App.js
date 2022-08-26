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
import ExistingSch from "./pages/admin/ExistingSch";
import CreateSch from './pages/admin/CreateSch';
import CreateAnnouncement from "././components/createAnnouncement";
import BankForm from "./components/bankForm";
import HiringApply from './components/HiringApply';
import CreateHiring from "./components/HiringCreate";
import ExistingJobs from "./pages/admin/ExistingJobs";
function App() {
  const user = useSelector(state => state.user);
  console.log(user.useremail)
  return (
    <div className="App bg-white scrollbar-hide">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        {/* {user.useremail == null ? <Router>
          <Navbar /> */}
          {/* <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/user" element={<Login />} />
            <Route path="/files" element={<Login />} />
            <Route path="/graphs" element={<Login />} />

          </Routes>
        </Router> : <Router>
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
            <Route path="/existing" element={<ExistingSch />} />
            <Route path="/announcement" element={<CreateAnnouncement />} />
            <Route path="/bankform" element={<BankForm />} />
            


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
            <Route path="/existing" element={<ExistingSch />} />
            <Route path="/create" element={<CreateSch />} />
            <Route path="/announcement" element={<CreateAnnouncement />} />
            <Route path="/hiring" element={<HiringApply />} />
            <Route path="/createhiring" element={<CreateHiring />} />
            <Route path="/exist" element={<ExistingJobs />} />
          </Routes>
        </Router>
      </Worker>
      ;
    </div>
  );
}

export default App;
