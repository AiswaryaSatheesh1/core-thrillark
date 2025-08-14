import "./body.css";
import { useState } from "react";
function Body() {
     const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
    return (
        <div className="body">
           <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      </div>
           
        </div>
    );
}
export default Body;