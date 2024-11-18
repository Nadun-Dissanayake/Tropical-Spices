import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import image1 from '../Assets/Logo.png'; 
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Products', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page === 'Home') {
      navigate('/');  // Navigate to /home when Home button is clicked
    }  else if (page === 'Products') {
      navigate('/products');
    } else if (page === 'Contact Us') {
      navigate('/contact');
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor:"black", height:"100px", display:"flex", alignItems:'center', justifyContent:'center' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar src={image1} sx={{width:"120px", height:"100px", borderRadius:"0px"}}></Avatar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft:"30px" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft:"20px" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection:"row", gap:"10px", }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#FFA823"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          <Box >
            <Typography sx={{ flexGrow: 0, color:"white", fontSize:"15px" }}>Put Email your requirements</Typography>
            <Typography sx={{ flexGrow: 0, color:"white", fontSize:"15px" }}>globaltropicalspice@gmail.com</Typography>
          </Box>
          </Box>
          <Button href='/Contact' sx={{color:"white", display:{xs:"none" ,sm:"none" ,md:"none", lg:"flex"}, marginLeft:"40px", backgroundColor:"white", color:"black", fontWeight:"bold", padding:"10px 20px", '&:hover':{backgroundColor:"#FFA823", color:"white"}}}>Contact Us</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;