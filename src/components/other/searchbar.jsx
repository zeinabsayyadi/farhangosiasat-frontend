import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
const SearchBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    //width: "inherit",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      width: "12.5rem",
      height: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "22rem",
      height: "2rem",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    //padding: theme.spacing(1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      //padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <Search>
      <StyledInputBase
        placeholder="جستجو..."
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchBar;
