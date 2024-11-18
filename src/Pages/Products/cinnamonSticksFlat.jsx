import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import product1 from "../../Assets/Cinnamon_Sticks_Flat.jpg";
import product2 from "../../Assets/Cinemomen2.jpg";
import product3 from "../../Assets/AlbaCinnamonPowder2.png";
import product4 from "../../Assets/AlbaCinnamonPowder4.png";
import image1 from "../../Assets/Cinemomen4.jpg";

export default function CinnamonSticksFlat() {
    const productImages = [product1, product2, product3, product4, image1];
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);
    const location = useLocation();
    const { productId } = location.state || {};

    const handleImageClick = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage(index);
            setFade(true);
        }, 300); // Duration of the fade-out transition
    };

    const openWhatsApp = () => {
        const adminNumber = "+13477387221"; // Replace with the admin's WhatsApp number in international format (without +)
        const message = "Hello, I need assistance."; // Optional: Customize the message
        const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const openEmail = () => {
        const sellerEmail = "globaltropicalspice@gmail.com"; // Replace with the admin's email address
        const subject = "Product Inquiry"; // Optional: Customize the email subject
        const body = "Hello, I am interested in Moringa Leaves Powder. Please provide more details."; // Optional: Customize the email body
        const mailtoLink = `mailto:${sellerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, "_blank");
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: "90%", flexDirection: 'column', alignItems: 'center', marginBottom:{xs:"-600px", sm:"-500px" ,md:"-100px"} }}>
            <Box sx={{ width: { mx: "100%", md: '80%' }, marginTop: '2%', display: 'flex', justifyContent: { xs: "center", md: 'space-between' }, flexDirection: { xs: 'column', sm: 'column', md: 'row' }, alignItems: 'center' }}>
                <Box sx={{ marginTop:{ xs: "200px", sm:"100px", md: "0px"}, marginBottom: { xs: "250px", md: "20px" }, width: { xs: "95%", md: '50%' }, height: { xs: "300px", sm: "500px", md: '100vh' }, justifyContent: "center", alignItems: "center", display: 'flex', flexDirection: 'column' }}>
                    <Avatar src={productImages[currentImage]} sx={{ marginTop: '10%', width: '100%', height: {xs:"400px", sm : "400px", md:'70%'}, objectFit: 'cover', borderRadius: '0px', transition: 'opacity 0.3s ease-in-out', opacity: fade ? 1 : 0.2 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100px', justifyContent: "space-between", marginTop: '2%', marginBottom: "200px" }}>
                        {productImages.map((image, index) => (
                            <Avatar
                                key={index}
                                src={image}
                                onClick={() => handleImageClick(index)}
                                sx={{
                                    width: {xs:"15%" ,sm:'18%'},
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '0px',
                                    cursor: "pointer",
                                    padding: "5px",
                                    borderRadius: "5px",
                                    border: currentImage === index ? '4px solid black' : 'none'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: { xs: "90%", md: '45%' }, height: { xs: "650px", md: '700px' }, marginTop: "-200px" }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom:"20px"}}>Cinnamon Sticks Flat</Typography>
                    <Typography variant="p" sx={{ fontSize:"20px", display:"block", textAlign:"justify" }}>
                    <strong>Sri Lankan Cinnamon (True Cinnamon):</strong>  
                        Renowned for its exceptional quality, flavor, and aroma, Sri Lankan Cinnamon holds a prominent place in the global spice market and has been a highly traded spice for centuries.  

                        <strong>Health Benefits:</strong>
                        <ul style={{ marginLeft: "20px" }}>
                            <li>
                            <strong>Cancer Prevention:</strong> Rich in anti-tumor, anti-inflammatory, and antioxidant properties, it activates detoxifying enzymes, destroys cancer cells, and prevents their growth.
                            </li>
                            <li>
                            <strong>Heart Health:</strong> Helps reduce LDL cholesterol, stabilize HDL, lower triglycerides, and manage high blood pressure, reducing the risk of heart disease.
                            </li>
                            <li>
                            <strong>Blood Sugar Control:</strong> Enhances insulin sensitivity, slows glucose absorption, and mimics insulin functions, lowering blood sugar levels by up to 24% and cholesterol by 18%, aiding in diabetes prevention.
                            </li>
                        </ul>
                        Regular consumption promotes heart health, manages diabetes, and reduces cancer risks. 
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: "40px", alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                        <Button size="large" sx={{ width: '90%', border: "1px solid #006989", padding: "10px 20px", color: "white", '&:hover': { backgroundColor: 'white', color: '#006989' }, backgroundColor: '#006989' }} onClick={openWhatsApp}>Contact Seller via WhatsApp</Button>
                        <Button size="large" sx={{ width: '90%', marginTop: "20px" , border: "1px solid #006989", padding: "10px 20px", color: "white", '&:hover': { backgroundColor: 'white', color: '#006989' }, backgroundColor: '#006989' }} onClick={openEmail}>
                            Contact Seller via Email
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
