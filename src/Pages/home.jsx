import { Avatar, Box, Button, Typography, Fade } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";

export default function Home() {
  const navigate = useNavigate();
  const items = [
    { image: image1, text: "Chilly" },
    { image: image2, text: "Cloves" },
    { image: image3, text: "Blue Butterfly Pea" },
    { image: image4, text: "Garcinia Cambogia" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        setTypingIndex(0); // Reset typing index for new text
        setDisplayedText(""); // Clear text for new typing animation
        setFade(true); // Start fade-in
      }, 1000); // Duration of fade-out effect
    }, 5000); // Time before switching images

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const exploreHandle = (productId) => {
    navigate("/oneProduct", {state: { productId: productId }});
  };

  useEffect(() => {
    if (fade && typingIndex < items[currentIndex].text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + items[currentIndex].text.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [fade, typingIndex, currentIndex, items]);

  return (
    <Box sx={{backgroundImage:"linear-gradient(to bottom, #D1E9F6, #F5EDED)", display: 'flex', justifyContent: 'center', height: "100%", flexDirection: 'column', alignItems: 'center' }}>
    <Box sx={{ background: 'linear-gradient(to left, #88D66C, #B4E380, #80AF81)', height: {xs:"500px" ,md:"400px"}, width: {xs:"95%" ,md:'80%'}, marginTop: '2%', display: 'flex', flexDirection:{xs:"column", md:"row"}, marginBottom:{xs:"5%", md:"0%"}}}>
        <Box sx={{ marginLeft: '5%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize:{xs:"25px", md:"60px"} }}>
                High Quality  
            </Typography>
            <Fade in={fade} timeout={1000}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', marginLeft:"20px", color: "#006989", fontSize:{xs:"25px", md:"60px"} }}>
                {displayedText}
                </Typography>
            </Fade>
          </Box>
          <Typography variant="h6" sx={{ marginTop: {xs:"5%",md:'2%'}, width: '90%', fontSize:{xs:"18px", md:"25px"} }}>
            Welcome to Our Spice Emporium! Dive into a world of rich, vibrant flavors and discover the perfect spices to elevate your cooking and bring your culinary creations to life.
          </Typography>
          <Button variant="contained" size="large" sx={{ marginTop: {xs:"5%",md:'2%'}, backgroundColor: "#006989", width: {xs:"40%" ,md:'20%'}, fontSize:{xs:"12px", md:"20px"} }}>Get Started</Button>
        </Box>
        <Box sx={{ width: {xs:"90%" ,md:'50%'}, height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Fade in={fade} timeout={1000}>
            <Avatar src={items[currentIndex].image} sx={{ width: {xs:"200px" ,md:"300px"}, height: {xs:"200px" ,md:"300px"} }} />
          </Fade>
        </Box>
      </Box>
      <Typography variant="h4" sx={{ marginTop: '2%',  width:{xs:"95%" ,md:"70%"} }}>
        Our Products
      </Typography>
      <Box sx={{marginTop:'2%', display: 'flex', flexDirection: 'column', width:{xs:"95%" ,md:'70%'}, justifyContent: 'space-between'}}>
        <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', flexDirection: 'row', justifyContent: 'space-between', width:'100%', marginBottom:'50px'}}>
            {products.map(Product => (
              <Box key={Product.id} sx={{padding:'10px', border:"1px solid rgba(0, 0, 0, 0.4) ", borderRadius: '10px', display:"flex", width:{xs:"90%",md:'47%'},'&:hover':{boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', cursor: 'pointer'}}}>
                {Product.images.length > 0 && (
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar 
                      src={`http://127.0.0.1:8000/${Product.images[0].path}`} 
                      sx={{borderRadius: '10px', width: {xs:"140px" ,md:"300px"}, height: {xs:"140px" ,md:"300px"}, transition: 'transform 1s ease-in-out', '&:hover':{ transform: 'scale(1.05)' }, cursor: 'pointer'}}
                    />
                  </Box>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                  <Typography variant="h6" sx={{ marginBottom:{xs:"2px",md:'10px'}, fontSize:{xs:"14px" ,md:'20px'}}}>{Product.product_name}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom:{xs:"2px",md:'10px'},fontSize:{xs:"16px" ,md:'35px'} }}>{Product.product_price}$</Typography>
                  <Typography variant="h6" sx={{ marginBottom:{xs:"2px",md:'10px'},fontSize:{xs:"14px" ,md:'20px'} }}>Min. Order : {Product.minimum_quantity}kg</Typography>
                  <Typography variant="h6" sx={{ marginBottom:{xs:"5px",md:'30px'}, fontSize:{xs:"14px" ,md:'20px'} }}>Estimate Delivery : 20 sep 2024 </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Button 
                      onClick={() => exploreHandle(Product.id)} 
                      size="small"
                      sx={{marginRight:'10%',fontSize:{xs:"14px" ,md:'15px'},  border:"1px solid #006989", padding:{xs:"5px 10px",md:"10px 20px"}, color:"#006989", '&:hover': { backgroundColor: '#006989', color: 'white' }}}
                    >
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box> 
      </Box>
    </Box>
  );
}
