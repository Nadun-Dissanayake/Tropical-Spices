import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import product1 from "../../Assets/MoringLeavesPowder.jpg";
import product2 from "../../Assets/Murunga1.jpg";
import product3 from "../../Assets/Murunga2.jpg";
import product4 from "../../Assets/Murunga1.jpg";
import image1 from "../../Assets/Murunga2.jpg";

export default function MoringaLeavesPowder() {
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
        const adminNumber = "+13479958226"; // Replace with the admin's WhatsApp number in international format (without +)
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
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom:"20px"}}>Moringa Leaves Powder</Typography>
                    <Typography variant="p" sx={{ fontSize:"20px", display:"block", textAlign:"justify" }}>Fresh clove powder is a finely ground spice made from dried clove buds, known for its strong, warm, and slightly sweet flavor. Rich in antioxidants and beneficial compounds like eugenol, clove powder is often used in cooking, baking, and traditional remedies. It adds a distinctive taste to both sweet and savory dishes, and is commonly used in spice blends, teas, and marinades. Clove powder is also valued for its potential health benefits, including supporting digestion and oral health.</Typography>
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
