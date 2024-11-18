import { Avatar, Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for routing
import hero_image from "../Assets/ContactUS.png";
import Garcinia from "../Assets/Garcinia_Cambogia.jpg";
import Cinnomen from "../Assets/product2.jpg";
import Fresh_cloves from "../Assets/Fresh_Cloves.jpg";
import Bluebutterfly from "../Assets/Blue_Butterfly_Pea_Flower_Powder.jpg";
import bloackPaperPowder from "../Assets/Black_Paper_Powder.jpg";
import blackPaper from "../Assets/Black_Paper.jpg";
import cinnamonSticksC5 from "../Assets/Cinnamon_Sticks_C5.jpg";
import cinnamonSticksC5Special from "../Assets/Cinnamon_Sticks_C5_Special.jpg";
import cinnamonSticksFlat from "../Assets/Cinnamon_Sticks_Flat.jpg";
import albaCinnamonPowder from "../Assets/Alba_Cinnomen_Powder.jpg";
import freshClovesPowder from "../Assets/Fresh_cloves_Powder.jpg";
import MoringaLeavesPowder from "../Assets/MoringLeavesPowder.jpg";


const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function Products() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Box sx={{ flexGrow: 1, position: "relative", width: "100%", height: "50vh" }}>
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
                            Products
                        </Typography>
                    </motion.div>
                    <MotionBox
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                    >
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "15px", lg: "20px" }, width: { xs: "300px", md: "60%" }, textAlign: "center" }}>
                            Discover our premium quality spices, meticulously sourced and crafted to enhance every dish with rich, authentic flavors. Perfect for culinary enthusiasts seeking the finest ingredients.
                        </Typography>
                    </MotionBox>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <Button variant="contained" color="success" sx={{ marginTop: "30px", backgroundColor: "#FFA823", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "white", color: "black" } }}>
                            Contact Us
                        </Button>
                    </motion.div>
                </Box>
            </Box>

            <Box sx={{ width: "80%", margin: "50px auto" }}>
                <Grid container spacing={3}>
                    {[
                        { img: Garcinia, title: "Garcinia Cambogia", link: "/garcinia" },
                        { img: albaCinnamonPowder, title: "Alba Cinnamon Powder", link: "/albaCinnemonPowder" },
                        { img: cinnamonSticksC5, title: "Cinnamon Sticks C5", link: "/cinnamonSticksC5" },
                        { img: cinnamonSticksC5Special, title: "Cinnamon Sticks C5 Special", link: "/cinnamonSticksC5Special"},
                        { img: cinnamonSticksFlat, title: "Cinnamon Sticks Flat", link: "/cinnamonSticksFlat" },
                        { img: Fresh_cloves, title: "Fresh Cloves", link: "/cloves" },
                        { img: freshClovesPowder, title: "Fresh Cloves Powder", link: "/freshClovesPowder" },
                        { img: Bluebutterfly, title: "Blue Butterfly Pea Flower Powder", link: "/bluebutterfly" },
                        { img: bloackPaperPowder, title: "Black Pepper Powder", link: "/blackPepperPowder" },
                        { img: blackPaper, title: "Black Pepper ", link: "/blackPapper" },
                        { img: MoringaLeavesPowder, title: "Moringa Leaves Powder ", link: "/moringaLeavesPowder" },
                    ].map((product, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                            <Link to={product.link} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                >
                                    <Box sx={{ border: "1px solid rgba(0,0,0,0.3)", padding: "20px", display: "flex", flexDirection: "column", height: "500px", justifyContent: "space-between" }}>
                                        <Avatar src={product.img} sx={{ width: "100%", height: "80%", borderRadius: 0, objectFit: "cover" }} alt={product.title} />
                                        <Typography variant="h6" sx={{ textAlign: "center", marginTop: "10px", color:"black" }}>{product.title}</Typography>
                                        <Button variant="contained" color="success" sx={{ marginTop: "10px", backgroundColor: "#FFA823", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "white", color: "black" } }}>
                                            View More
                                        </Button>
                                    </Box>
                                </motion.div>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
