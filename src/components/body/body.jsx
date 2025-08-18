import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./body.css";
import LongMenu from "./longmenu";
import List from "./list";

function Body() {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Active");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleClose = (status) => {
    setSelectedStatus(status);
    setAnchorEl(null);
  };

  return (
    <div>
    <div className="body">
      <div className="search-container">
        <div className="search-header">
          <div className="searchbox">
            <input
              type="text"
              placeholder="Search for the experience..."
              value={searchQuery}
              className="searchip"
              onChange={handleSearchChange}
            />
            <SearchIcon className="searchicon" />
          </div>
          <div className="status-button">
            <Button
              onClick={handleClick}
              sx={{
                backgroundColor: "rgb(4, 79, 79)",
                color: "aliceblue",
                cursor: "pointer",
                paddingLeft: "12px",
                // width: "100px",
                border: 0,
                borderRadius: "18px",
                height: "35px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgb(3, 70, 70)",
                },
              }}
            >
              {selectedStatus}
              <ArrowDropDownIcon className="arrowicon" />
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  backgroundColor: "rgba(252, 255, 255, 1)",
                  width: 150,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  mt: 1,
                },
              }}
            >
              <MenuItem
                onClick={() => handleClose("Active")}
                selected={selectedStatus === "Active"}
                sx={{
                  fontSize: "14px",
                  padding: "10px 16px",
                  color: "#000",
                  borderRadius: "10px",
                  height: "35px",
                  "&:hover": {
                    backgroundColor: "rgba(235, 235, 235, 1)",
                    color: "#030303",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                    color: "#000",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "rgba(238, 239, 239, 1)",
                    color: "#000",
                  },
                }}
              >
                Active
              </MenuItem>

              <MenuItem
                onClick={() => handleClose("Inactive")}
                selected={selectedStatus === "Inactive"}
                sx={{
                  fontSize: "14px",
                  padding: "10px 16px",
                  color: "#000",
                  borderRadius: "10px",
                  height: "35px",
                  "&:hover": {
                    backgroundColor: "rgba(235, 235, 235, 1)",
                    color: "#080707",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                    color: "#000",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "rgba(238, 239, 239, 1)",
                    color: "#000",
                  },
                }}
              >
                Inactive
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="button-group">
          <button className="productbtn">Products</button>
          <button className="boxbtn">Box</button>

          <LongMenu className="longmenu" />
        </div>
      </div>
       <div className="list-container">
        <List />
      </div>
    </div>
    </div>
      
  );
}

export default Body;
