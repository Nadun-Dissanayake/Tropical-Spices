import { Avatar, Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for routing
import hero_image from "../Assets/ContactUS.png";
import Garcinia from "../Assets/product1.jpg";
import Cinnomen from "../Assets/product2.jpg";
import Fresh_cloves from "../Assets/product3.jpg";
import Bluebutterfly from "../Assets/product4.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function Contact() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Box sx={{flexGrow: 1, position: "relative", width: {xs:"100%" ,sm:"100%" ,md:"100%"}, height: "50vh" }}>
                <Avatar src={hero_image} sx={{ width: "100%", height: "100%", borderRadius: 0 }} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1.5 }}
                >
                    <Box sx={{ position: "absolute", top: 0, left: 0, backgroundColor: "black", width: "100%", height: "50vh" }}></Box>
                </motion.div>
                <Box sx={{ position: "absolute", top: "50%", left: "10%", transform: "translateY(-50%)", width: "80%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Typography variant="h2" color="white" sx={{ fontFamily: "initial", textAlign: "center", marginBottom: "30px", fontSize: { xs: "25px", md: "40px", lg: "60px" } }}>
                            Contact Us
                        </Typography>
                    </motion.div>
                    <MotionBox
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                    >
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "15px", lg: "20px" }, width: { xs: "300px", md: "60%" }, textAlign: "center" }}>
                        We’re here to help! Reach out to us with any questions, concerns, or feedback, and our team will get back to you as soon as possible.                        </Typography>
                    </MotionBox>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <Button variant="contained" color="success" sx={{ marginTop: "30px", backgroundColor: "#FFA823", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "white", color: "black" } }}>
                            Products
                        </Button>
                    </motion.div>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1, marginBottom:{xs:"-600px", sm:"-400px", md:"0px"}, position: "relative", width: "80%", display:"flex", flexDirection:{xs:"column", sm:"column", md:"row"}, justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
                <Box sx={{  width:{ xs:"100%",sm :"90%",md:"50%"}}}>
                        <Box
                            sx={{
                            paddingLeft: { xs: "20%", sm: "20%", md: "20%" },
                            width: { xs: "90%", sm: "60%", md: "50%" },
                            height: "50vh",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "center",
                            }}
                        >
                            <MotionBox
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                                marginTop: "50px",
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            >
                            <EmailIcon
                                sx={{
                                fontSize: { xs: "40px", sm: "50px", md: "70px" },
                                color: "#FF9100",
                                }}
                            />
                            <MotionTypography
                                variant="h6"
                                sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                marginLeft: "30px",
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                globaltropicalspice@gmail.com
                            </MotionTypography>
                            </MotionBox>

                            <MotionBox
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                                marginTop: "50px",
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            >
                            <PhoneIcon
                                sx={{
                                fontSize: { xs: "40px", sm: "50px", md: "70px" },
                                color: "#FF9100",
                                }}
                            />
                            <MotionTypography
                                variant="h6"
                                sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                marginLeft: "30px",
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                +1 3479958226
                            </MotionTypography>
                            </MotionBox>

                            <MotionBox
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                                marginTop: "50px",
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.9 }}
                            >
                            <LocationOnIcon
                                sx={{
                                fontSize: { xs: "40px", sm: "50px", md: "70px" },
                                color: "#FF9100",
                                }}
                            />
                            <MotionTypography
                                variant="h6"
                                sx={{
                                fontWeight: "bold",
                                marginLeft: "30px",
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                "Sepalika", Idiketiya Kirama, Sri Lanka.
                            </MotionTypography>
                            </MotionBox>
                        </Box>
                </Box>
                <Box
      sx={{
        
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        width:{xs:"100%", sm:"90%" ,md:"50%"},
        height:"350px", 
        marginTop:"100px", 
        marginBottom:"100px"
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929.617646406214!2d80.6804511742637!3d6.143212602217973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae14159efc4c7b1%3A0xa22a95ac3e022544!2sWalasmulla!5e0!3m2!1sen!2slk!4v1693992497209!5m2!1sen!2slk"
        width="100%"
        height="100%"
        
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </Box>
            </Box>
        </Box>
    );
}
