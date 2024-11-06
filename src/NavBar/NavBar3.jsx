import { useState } from 'react';
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
import { Grid2 } from '@mui/material';
import Link from '@mui/material/Link';
import Logo from '../assets/personalLogos/ASLogoCircle.png'

const pages = [
  {name:'About', href: '#about'}, 
  {name:'Skills', href: '#skills'},
  {name:'Projects', href: '#projects'}, 
  // {name:'Contact', href: '#contact'}, 
];

function NavBar() {
  
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" color='text.primary' 
      sx={{
        backgroundColor: "inherit",
        filter: "contrast(105%)",
        boxShadow: 0,
        backdropFilter: "blur(5px)", // Apply blur effect to the background
        WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
        borderRadius: 1,
      }}
    >
      <Container maxWidth="lg">
        {/* Toolbar display for small screens */}
        <Toolbar sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent:"space-between", alignItems:"center", px:0}}>
          <Link href="#" sx={{textDecoration: "none", color: "inherit"}}>
            <Grid2 container sx={{alignItems:"center", size:"auto", overflow:"hidden"}}>
                <Box component={"img"} src={Logo} width={45} height={45}/>
            </Grid2>
          </Link>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{px:1}}
            >
              <MenuIcon/>
            </IconButton>
              <Menu
                id="menu-appbar"
                background-color="#171717"
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
                sx={
                  { display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {  // This targets the Paper component directly
                    backgroundColor: '#1976d2' // Change to your desired background color
                  },
                }}
              >
                {pages.map((page) => (
                  <Link href={page.href} key={page.name} sx={{textDecoration: "none", color: "inherit"}}>
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
        </Toolbar>
      
        {/* Toolbar display for large screens */}
        <Toolbar sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent:"space-between"}}>
          <Link href="#" sx={{textDecoration: "none", color: "inherit"}}>
            <Grid2 border={1} container sx={{alignItems:"center", overflow:"hidden", border:"4px"}}>
              <Box component={"img"} src={Logo} width={45} height={45}/>
            </Grid2>
          </Link>
          <Box sx={{display:"flex"}}>
            {pages.map((page) => (
              <Link href={page.href} key={page.name} sx={{textDecoration: "none", color: "inherit"}}>
                <Button
                  sx={{ mx: 2, color: 'inherit', display: 'block', alignContent:"center" }}
                >
                    {page.name} 
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      
      </Container>
    </AppBar>
  );
}
export default NavBar;
