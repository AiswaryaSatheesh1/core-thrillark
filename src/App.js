import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BallotIcon from "@mui/icons-material/Ballot";
import CategoryIcon from "@mui/icons-material/Category";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import HomeIcon from "@mui/icons-material/Home";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./App.css";
import logo from "./assets/icons/logo.jpg";
function App() {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img src={logo} alt="Snyk Logo" className="logo" />
        <h2 className="title">Thrillark</h2>
      </div>
      <ul className="nav-links">
        <li className="navbar-item">
          <HomeIcon className="icon" />
          <span className="text">Dashboard</span>
        </li>
        <li className="navbar-item">
          <DoNotDisturbIcon className="icon" />{" "}
          <span className="text">Failed Logs</span>
        </li>
        <li className="navbar-item">
          <CategoryIcon className="icon" />
          <span className="text">Manage Category</span>
        </li>
        <li className="active">
          <ArrowCircleRightIcon className="icon" />
          <span className="text">Manage Product</span>
        </li>
        <li className="navbar-item">
          {" "}
          <LocalActivityIcon className="icon" />
          <span className="text">Availability</span>
        </li>
        <li className="navbar-item">
          <ReorderIcon className="icon" />
          <span className="text">Manage Variants</span>
        </li>
        <li className="navbar-item">
          <BallotIcon className="icon" />
          <span className="text">API Variants</span>
        </li>
        <li className="navbar-item">
          <AddPhotoAlternateIcon className="icon" />
          <span className="text">Manage Media</span>
        </li>
      </ul>
      <div>a</div>
    </nav>
  );
}

export default App;
