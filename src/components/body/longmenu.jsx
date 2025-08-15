import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

const options = ["Delete", "Add product", "TTD product"];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        // className="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
              fontSize: "14px",
              padding: "10px 16px",
              color: "#000",
              borderRadius: "10px",
              boxShadow: "3px 4px 12px  rgba(8, 46, 31, 0.1)",

              "&:hover": {
                backgroundColor: "rgba(235, 235, 235, 1)",
                color: "#030303",
                borderRadius: "10px",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                color: "#000",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgba(238, 239, 239, 1)",
                color: "#000",
              },
            },
          },
          list: {
            "aria-labelledby": "long-button",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            // className="menu"
            className="long-menu"
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
