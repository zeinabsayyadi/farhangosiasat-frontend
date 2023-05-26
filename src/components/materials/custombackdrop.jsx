import { useState } from "react";

const { Backdrop, CircularProgress } = require("@mui/material");

const CustomBackdrop = () => {
  const [open, setOpen] = useState(false);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(false)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackdrop;
