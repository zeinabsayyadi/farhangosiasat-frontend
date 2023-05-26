import articleGreen from "../../../public/svgs/articleGreen.svg";

import closeMenu from "../../../public/svgs/closeMenu.svg";
import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";

import { useEffect, useState } from "react";

import CustomMenuItem from "./customMenuItem";
import Image from "next/image";

const style = (theme) => ({
  menu: {
    "& .MuiPaper-root": {
      direction: "rtl",
      borderRadius: "0.5rem",
      paddingX: "1rem",
      paddingY: "0.5rem",
      width: "12.25rem",
      color: theme.palette.text.primary.main,
      backgroundColor: theme.palette.background.green,
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
        direction: "ltr",
      },
      "& .MuiMenuItem-root": {
        direction: "ltr",
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
});

const DropDownMenu = ({ dropdownFlag, setDropdownFlag }) => {
  const [anchorEl, setAnchorEl] = useState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const classes = style(theme);
  const handleClose = () => {
    setOpen(false);
    setDropdownFlag(false);
    console.log("open fasle");
  };
  useEffect(() => {
    if (dropdownFlag) {
      const elem = document.getElementById("menu-open-button");
      setAnchorEl(elem);
      setOpen(Boolean(elem));
      console.log("open true");
    }
  }, [dropdownFlag]);
  return (
    <div>
      <Menu
        sx={classes.menu}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: "12.5rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ButtonBase
            onClick={handleClose}
            sx={{
              marginLeft: "0",
            }}
          >
            <Image
              src={closeMenu}
              alt="closeIcon"
            />
          </ButtonBase>
        </Box>
        <Divider />
        <ButtonBase
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.secondary.main,
            fontWeight: "Bold",
            fontSize: "14px",
            padding: "0.4rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography>برنامه در حال بر گزاری</Typography>
        </ButtonBase>
        <CustomMenuItem
          menuIconurl={articleGreen}
          menuTitle={"مقالات"}
        />
        <CustomMenuItem
          menuIconurl={articleGreen}
          menuTitle={"مقالات"}
        />
        <CustomMenuItem
          menuIconurl={articleGreen}
          menuTitle={"مقالات"}
        />
        <CustomMenuItem
          menuIconurl={articleGreen}
          menuTitle={"مقالات"}
        />
      </Menu>
    </div>
  );
};

export default DropDownMenu;
