import "./header.css";
function Header (){
    return (
        <div className="header">
        <h1 className="header-title">Attraction Lists</h1>
        <div className="mainbd">
          <nav className="breadcrumb">
        <span>Dashboard</span>
        <span className="separator">›</span>
        <span>Attractions</span>
        <span className="separator">›</span>
        <span>Attraction Lists</span>
      </nav>
      </div>
      <div className="box">
        <div className="createbutton">
      <button className="create" > Create Experience</button>
      <button className="import" > Import from file </button>
       <button className="export" > Export</button>
      </div>
      </div>
    
      </div>
      
      

    )
}
export default Header;
