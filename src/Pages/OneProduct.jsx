import { Avatar, Box, Divider, Typography, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Star, StarBorder } from "@mui/icons-material";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import product1 from "../Assets/product1.jpg";
import product2 from "../Assets/product2.jpg";
import product3 from "../Assets/product3.jpg";
import product4 from "../Assets/product4.jpg";
import axios from "axios";
import { useLocation } from 'react-router-dom';


export default function OneProduct() {


    const product = [product1, product2, product3, product4, image1];
    const [currentImage, setCurrentImage] = useState(1);
    const [fade, setFade] = useState(true);
    const rating = 4;
    const [quantity, setQuantity] = useState(100);
    const [products, setProducts] = useState(null);
    const location = useLocation();
    const { productId } = location.state || {};


    const decrementQuantity = () => {
        setQuantity(quantity - 1);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const openWhatsApp = () => {
        const adminNumber = "+94743818209"; // Replace with the admin's WhatsApp number in international format (without +)
        const message = "Hello, I need assistance."; // Optional: Customize the message
        const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };
    const changeImage = (index) => {
        if (products && products.images && products.images[index]) {
            setFade(false);
            setTimeout(() => {
                setCurrentImage(index);
                setFade(true);
            }, 300); // Duration of the fade-out transition
        }
    };

    useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${productId}`)
        .then(response => {
            setProducts(response.data);
            console.log(response.data);

        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}, [productId]); // Add productId here

    if (!products || !products.images || products.images.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    return(
        
        <Box sx={{ display: 'flex', justifyContent: 'center', height: "100%", flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: {mx:"100%",md:'80%'}, marginTop: '2%', display: 'flex', justifyContent: {xs:"center",md:'space-between'}, flexDirection:{ xs: 'column', sm: 'row', alignItems: 'center' } }}>
                <Box sx={{marginBottom:{xs:"25%", md:"2%"}, width: {xs:"95%",md:'50%'}, height: {xs:"300px" ,md:'700px'}, justifyContent:"center", alignItems:"center", display: 'flex', flexDirection: 'column'} }>
                    <Avatar src={`http://127.0.0.1:8000/${products.images[currentImage]?.path}`} sx={{marginTop: '20%', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0px', transition: 'opacity 0.3s ease-in-out', opacity: fade ? 1 : 0.2 }}></Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '150px', justifyContent:"space-between", marginTop: '2%' }}>
                        {products.images && products.images.map((image, index) => (
                            <Avatar
                                key={index}
                                src={`http://127.0.0.1:8000/${image.path}`}
                                onClick={() => changeImage(index)}
                                sx={{
                                    width: '15%',
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
                <Box sx={{ width: {xs:"90%" ,md:'45%'}, height: {xs:"650px" ,md:'700px'} }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '2%', fontSize:{xs:"30px" ,md:"50px"} }}>US ${products.product_price}/kg</Typography>
                    <Divider sx={{ marginBottom: '2%', marginTop: '30px' }} />
                   
                    <Typography variant="h5" sx={{ marginBottom: '2%', opacity:'0.7', fontSize:{xs:"17px" ,md:"20px"} }}>{products.product_name}</Typography>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            index < rating ? (
                                <Star key={index} sx={{ color: 'gold', fontSize: '2rem' }} />
                            ) : (
                                <StarBorder key={index} sx={{ color: 'gold', fontSize: '2rem' }} />
                            )
                        ))} 
                        <Typography sx={{ opacity:'0.7', marginLeft: '10px' }} variant="h6">({rating})</Typography>
                        <Typography sx={{ opacity:'0.7', marginLeft: '10px' }} variant="h6">|</Typography>
                        <Typography sx={{ opacity:'0.7', marginLeft: '10px' }} variant="h6">55 Reviews</Typography>
                    </Box>
                    <Typography sx={{ opacity:'0.7', marginTop: '15px', color:"red" }} variant="h6">1.2 ton Sold</Typography> */}
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '15px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                            <path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/>
                        </svg>
                        <Typography sx={{color:"black", marginLeft: '10px', fontSize:{xs:"15px" ,md:"20px"} }} variant="h6">Shipping Cost : US $0.2/kg</Typography>
                    </Box>
                    <Typography sx={{color:"black", marginLeft: '35px', opacity:'0.5',  marginTop: '10px', fontSize:{xs:"15px" ,md:"20px"}  }} variant="h6">Delivery: Aug 21 - 26 </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '15px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                            <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z"/>
                        </svg>
                        <Typography sx={{color:"black", marginLeft: '10px', fontSize:{xs:"15px" ,md:"20px"} }} variant="h6">Fast delivery</Typography>
                    </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '35px', }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="green">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                            </svg>
                            <Typography sx={{color:"black",  opacity:'0.5', fontSize:"15px", marginTop: '10px', marginLeft:'5px' }} variant="h6">Refund if package lost</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '35px', }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="green">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                            </svg>
                            <Typography sx={{color:"black",  opacity:'0.5', fontSize:"15px", marginTop: '10px', marginLeft:'5px' }} variant="h6">Refund if no delivery in 35 days</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '35px', }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="green">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                            </svg>
                            <Typography sx={{color:"black",  opacity:'0.5', fontSize:"15px", marginTop: '10px', marginLeft:'5px' }} variant="h6">Refund if package lost</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '15px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
                                <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/>
                            </svg>
                            <Typography sx={{color:"red", marginLeft: '10px' }} variant="h6">100% money Gurentee</Typography>
                        </Box>
                        <Divider sx={{ marginBottom: '2%', marginTop: '30px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                            <Typography sx={{color:"black", marginLeft: '10px' }} variant="h6">Quantity (Kg)</Typography>
                            <Box sx={{marginTop: '10px', display: 'flex', flexDirection: 'row'}}>
                                <Box onClick={incrementQuantity} sx={{height:"20px", bgcolor:"lightgray", padding: '5px', marginRight: '10px', borderRadius: '50%', cursor: 'pointer',}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="black">
                                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                    </svg>
                                </Box>
                                
                                <input type="text" value={quantity} style={{border:"none", fontSize:"20px", width:'50px', textAlign: 'center'}}/>

                                <Box onClick={decrementQuantity} sx={{height:"20px",bgcolor:"lightgray", padding: '5px', marginLeft: '10px', borderRadius: '50%', cursor: 'pointer',}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="black">
                                        <path d="M200-440v-80h560v80H200Z"/>
                                    </svg>
                                </Box>
                                <Typography sx={{color:"black", marginLeft: '35px', opacity:'0.5', fontSize:"15px" }} variant="h6">min Order {products.minimum_quantity}Kg </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display:"flex", flexDirection:"row"}}>
                            <Typography sx={{color:"black", marginLeft: '10px', marginTop: '50px', fontSize:{xs:"25px" ,md:"50px"} }} variant="h3">Total Price : </Typography>
                            <Typography sx={{color:"green", marginLeft: '10px', marginTop: '50px', fontWeight:"bold", fontSize:{xs:"25px" ,md:"50px"} }} variant="h3">500$</Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop:"40px", alignItems: 'center', justifyContent: 'center', alignContent: 'center', }}>
                            <Button size="large" sx={{width:'90%', border:"1px solid #006989", padding:"10px 20px", color:"white", '&:hover': { backgroundColor: 'white', color: '#006989'}, backgroundColor: '#006989'}} onClick={openWhatsApp}>Contact Buyer</Button>
                        </Box>
                        
                        
                </Box>
            </Box>
            <Box sx={{width: {mx:"100%",md:'80%'},  color: 'black', opacity: 0.8, marginTop: {xs:"0px" ,md:"200px" }}}>
                <Box
                        sx={{}}
                        dangerouslySetInnerHTML={{ __html: products.product_description }}
                    />
            </Box>
            
        </Box>
    )
}