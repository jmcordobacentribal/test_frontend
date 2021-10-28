import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { SearchIconWrapper, StyledInputBase, Search } from "./StyleNav";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ setBuscar, setcategory }) => {
  const handleSearch = (e) => {
    setBuscar(e.target.value);
  };

  const handleCategory = (categoria) => {
    setcategory(categoria);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="background">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              src="https://res.cloudinary.com/yhonamc/image/upload/v1635372921/icons8-iron-man-192_ajdoge.png"
              alt="Logo"
              className="logo"
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            HERO-APP
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => handleCategory("todos")}
            className="cursor"
          >
            Todos
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => handleCategory("voladores")}
            className="cursor"
          >
            Voladores
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => handleCategory("novoladores")}
            className="cursor"
          >
            No voladores
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
