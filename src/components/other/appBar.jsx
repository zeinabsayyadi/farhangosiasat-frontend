import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import SearchBar from "./searchbar";
import NavBarTabs from "./navbartabs";
import { useEffect, useState } from "react";
import DropDownMenu from "./dropDownMenu";

const Appbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [dropdownFlag, setDropdownFlag] = useState(false);

  const openDropDown = (event) => {
    console.log(event.currentTarget);
    setDropdownFlag(true);
  };

  useEffect(() => {
    setWindowWidth(document?.body?.scrollWidth);
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: " row",
            justifyContent: "space-between",
          }}
        >
          <img
            src="/svgs/logo.svg"
            alt="Logo"
          />
          <Box sx={{}}>
            <SearchBar />
          </Box>

          {windowWidth < 750 ? (
            <IconButton
              id="menu-open-button"
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              //onTouchStart={(e) => openDropDown(e)}
              // onTouchMove={(e) => console.log("onTouchMove")}
              onTouchEnd={(e) => openDropDown(e)}
              // onTouchCancel={(e) => console.log("onTouchCancel")}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <NavBarTabs />
          )}
        </Toolbar>
      </AppBar>
      {windowWidth > 750 ? null : (
        <DropDownMenu
          dropdownFlag={dropdownFlag}
          setDropdownFlag={setDropdownFlag}
        />
      )}
    </Box>
  );
};

export default Appbar;
