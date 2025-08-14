import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./body.css";
function Body() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for the experience..."
          value={searchQuery}
          className="searchip"
          onChange={handleSearchChange}
        />
        <SearchIcon className="searchicon" />
        <button />
        <button />
      </div>
    </div>
  );
}
export default Body;
