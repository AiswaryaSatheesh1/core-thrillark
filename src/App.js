import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BallotIcon from "@mui/icons-material/Ballot";
import CategoryIcon from "@mui/icons-material/Category";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import HomeIcon from "@mui/icons-material/Home";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
import "./App.css";
import logo from "./assets/icons/logo.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlways, setIsAlways] = useState(false);
  const toggleSidebar = () => {
    setIsAlways(!isAlways);
    console.log("Is Always", isAlways);
  };

  return (
    <nav
      className={`navbar ${isAlways || isOpen ? "open" : "collapsed"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="logo-title">
        <img src={logo} alt="Thrillark Logo" className="logo" />
        {(isAlways || isOpen) && <h2 className="title">Thrillark</h2>}
        {<FormatIndentIncreaseIcon className="tog" onClick={toggleSidebar} />}
      </div>
      <ul className="nav-links">
        <li className="navbar-item">
          <HomeIcon className="icon" />
          {(isAlways || isOpen) && <span className="text">Dashboard</span>}
        </li>
        <li className="navbar-item">
          <DoNotDisturbIcon className="icon" />
          {(isAlways || isOpen) && <span className="text">Failed Logs</span>}
        </li>
        <li className="navbar-item">
          <CategoryIcon className="icon" />
          {isOpen && <span className="text">Manage Category</span>}
        </li>
        <li className="navbar-item active">
          <ArrowCircleRightIcon className="icon" />
          {isOpen && <span className="text">Manage Product</span>}
        </li>
        <li className="navbar-item">
          <LocalActivityIcon className="icon" />
          {isOpen && <span className="text">Availability</span>}
        </li>
        <li className="navbar-item">
          <ReorderIcon className="icon" />
          {isOpen && <span className="text">Manage Variants</span>}
        </li>
        <li className="navbar-item">
          <BallotIcon className="icon" />
          {isOpen && <span className="text">API Variants</span>}
        </li>
        <li className="navbar-item">
          <AddPhotoAlternateIcon className="icon" />
          {isOpen && <span className="text">Manage Media</span>}
        </li>
      </ul>
    </nav>
  );
}

export default App;
