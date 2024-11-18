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
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const pages = ['Home', 'About Us', 'Products', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Footer() {

    const MotionBox = motion(Box);
    const MotionTypography = motion(Typography);
    const MotionIcon = motion(Box);
  

  return (
    <Box sx={{width:"100%", height:"50vh",  display:"flex", justifyContent:"center", alignItems:"center",}}>
      <Box sx={{width:"100%", height:{xs:"200%" ,sm:"200%" ,md:"100%"}, marginTop:{xs:"1700px", sm:"1200px", md:"0px", lg:"0px"},  display:"flex", justifyContent:"center", backgroundColor:"Black", alignItems:"center"}}> 
      <Box sx={{width:"80%", height:"100%",  display:"flex", justifyContent:"center", alignItems:"center", flexDirection:{xs:"column", sm:"column", md:"row", lg:"row"}}}>
          <MotionBox initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }} sx={{width:"120%", marginLeft:"100px", display:"flex",  justifyContent:{xs:"center", sm:"center", md:"center", lg:"start"}, alignItems:"center"}}>
            <Avatar src={image1} sx={{width:"280px", height:"250px", borderRadius:"0px"}}></Avatar>
          </MotionBox>
          <MotionBox initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }} sx={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"center",  textAlign:{xs:'center' ,sm:"center" ,md:"start"}, width:"100%"}}>
            <Typography variant="h5" sx={{color:"white", fontWeight:"bold"}}>Navigations</Typography>
            <Typography variant="p" sx={{color:"white", marginTop:"20px", marginLeft:"0px"}}>Home</Typography>
            <Typography variant="p" sx={{color:"white", marginTop:"20px", marginLeft:"0px"}}>About US</Typography>
            <Typography variant="p" sx={{color:"white", marginTop:"20px", marginLeft:"0px"}}>Contact US</Typography>
            <Typography variant="p" sx={{color:"white", marginTop:"20px", marginLeft:"0px"}}>Poduct</Typography>
          </MotionBox>
          <MotionBox  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} sx={{ height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:{xs:'center' ,sm:"center" ,md:"start"},  width:"60%"}}>
            <Typography variant="h5" sx={{color:"white", fontWeight:"bold"}}>Make Inquiries</Typography>
            <Box sx={{display:"flex", alignItems:"center", marginTop:"20px", justifyContent:{xs:"center" ,sm:"center" ,md:"start"}}}>
            <EmailIcon
                sx={{
                  fontSize: { xs: "30px", sm: "30px", md: "30px" },
                  color: "#FF9100",
                }}
              />
              <Typography variant="p" sx={{color:"white",  marginLeft:"20px"}}>globaltropicalspice@gmail.com</Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", marginTop:"20px", justifyContent:{xs:"center" ,sm:"center" ,md:"start"}}}>
            <PhoneIcon
                sx={{
                  fontSize: { xs: "30px", sm: "30px", md: "30px" },
                  color: "#FF9100",
                }}
              />
              <Typography variant="p" sx={{color:"white",  marginLeft:"20px"}}>+1 3479958226</Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", marginTop:"20px", justifyContent:{xs:"center" ,sm:"center" ,md:"start"}}}>
            <LocationOnIcon
                sx={{
                  fontSize: { xs: "30px", sm: "30px", md: "30px" },
                  color: "#FF9100",
                }}
              />
              <Typography variant="p" sx={{color:"white",  marginLeft:"20px"}}>"Sepalika", Idiketiya Kirama, Sri Lanka.</Typography>
            </Box>
            
          </MotionBox>
      </Box>
      </Box>
        
    </Box>
  );
}
export default Footer;