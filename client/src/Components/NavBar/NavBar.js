import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../JS/actions/userActions";
import { MenuItems } from './MenuItems';
import { useDispatch, useSelector } from "react-redux";
import {RiHotelFill} from 'react-icons/ri';
import "./NavBar.css"
import { IconContext } from "react-icons/lib";
import Profil from "../Profile/Profil";


const settings = ["Profile","Logout"];
const settingsGuest = ["Login"];

const NavBar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(state=>state.userReducer.currentUser)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="absolute"  style={{ background: 'transparent', boxShadow: 'none' }}>
      <Container  className="Container">
        <Toolbar>
         <IconContext.Provider value={{size:40}}>
         <Link to='/' style={{color:"white"}}>
        <RiHotelFill />
        </Link>
        </IconContext.Provider>
     
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {user.fullName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {MenuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >    <Link
             
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              
              >
                {item.title}
              </Link     ></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {user.fullName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {MenuItems.map((item, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                   <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
              </Button>
            ))}
          </Box>
















          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               
                <button className="signbtn" > Logout</button>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {localStorage.getItem("token")
                ? settings.map((setting) =>
                    setting === "Logout" ? (
                      <MenuItem title= {user.fullName}  key={setting} onClick={()=>{dispatch(logout(navigate));handleCloseUserMenu()}}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ) : 
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Link to="/profile">
                        <Typography textAlign="center">{setting}</Typography>
                        </Link>
                      </MenuItem>
                    )
                  
                : settingsGuest.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Link to="/login">
                        <Typography textAlign="center">{setting}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
