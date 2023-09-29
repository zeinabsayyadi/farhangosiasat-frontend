import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import SearchBar from "./searchbar";
import NavBarTabs from "./navbartabs";
import { useEffect, useState } from "react";
import DropDownMenu from "./dropDownMenu";
import { Grid, Typography } from "@mui/material";

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
          {windowWidth > 600 ? (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                gap={1}
                sm={6}
                md={3}
              >
                <img
                  src="/svgs/logo.svg"
                  alt="Logo"
                />
                <Typography variant="h6">
                  انجمن فرهنگ و سیاست دانشگاه شیراز
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                md={3}
              >
                <SearchBar />
              </Grid>
              <Grid
                item
                container
                justifyContent="end"
                sm={12}
                md={6}
              >
                <NavBarTabs />
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                gap={1}
                xs={6}
              >
                <img
                  src="/svgs/logo.svg"
                  alt="Logo"
                />
              </Grid>
              <Grid>
                <IconButton
                  id="menu-open-button"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onTouchEnd={(e) => openDropDown(e)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <SearchBar />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      {windowWidth > 600 ? null : (
        <DropDownMenu
          dropdownFlag={dropdownFlag}
          setDropdownFlag={setDropdownFlag}
        />
      )}
    </Box>
  );
};

export default Appbar;

{
  /* <IconButton
  id="menu-open-button"
  size="large"
  edge="start"
  color="inherit"
  aria-label="open drawer"
  sx={{ mr: 2 }}
  onTouchEnd={(e) => openDropDown(e)}
>
  <MenuIcon />
</IconButton>; */
}
