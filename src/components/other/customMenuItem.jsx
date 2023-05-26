import { ButtonBase, MenuItem } from "@mui/material";
import Image from "next/image";

const CustomMenuItem = ({ menuIconurl, menuTitle }) => {
  const handleNavigate = () => {
    console.log("navigate");
  };
  return (
    <MenuItem
      onClick={handleNavigate}
      disableRipple
    >
      <div>
        <Image
          src={menuIconurl}
          alt={menuTitle}
        />
      </div>
      {menuTitle}
    </MenuItem>
  );
};
export default CustomMenuItem;
