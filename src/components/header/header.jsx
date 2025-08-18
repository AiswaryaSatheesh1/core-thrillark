import "./header.css";
function Header({ onCreateClick }) {
  return (
    <div className="header">
      <div className="title-breadcrumb">
        <h1 className="header-title">Attraction Lists</h1>

        <nav className="breadcrumb">
          <span>Dashboard</span>
          <span className="separator">›</span>
          <span>Attractions</span>
          <span className="separator">›</span>
          <span className="listview">Attraction Lists</span>
        </nav>
      </div>

      <div className="createbutton">
        <button className="create" onClick={onCreateClick}>
          Create Experience
        </button>
        <button className="import"> Import from file </button>
        <button className="export"> Export</button>
      </div>
    </div>
  );
}
export default Header;
