import { Avatar, Box, Button, Typography, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddOrUpdateProduct() {
    const [productName, setProductName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [minimumQuantity, setMinimumQuantity] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            // Fetch the existing product details for update
            axios.get(`http://localhost:8000/api/products/${id}`)
                .then(response => {
                    const product = response.data;
                    setProductName(product.product_name);
                    setShortDescription(product.short_description);
                    setProductPrice(product.product_price);
                    setMinimumQuantity(product.minimum_quantity);
                    setProductDescription(product.product_description);
                    // If you want to handle existing images differently, manage them here
                })
                .catch(error => {
                    console.error('Error fetching product details:', error);
                });
        }
    }, [id]);

    const handleImageChange = (e) => {
        setSelectedImages([...selectedImages, ...e.target.files]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('short_description', shortDescription);
        formData.append('product_price', productPrice);
        formData.append('minimum_quantity', minimumQuantity);
        formData.append('product_description', productDescription);

        selectedImages.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        try {
            let response;
            if (id) {
                // Update existing product
                response = await axios.post(`http://localhost:8000/api/products/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert("Product Updated Successfully");
            } else {
                // Add new product
                response = await axios.post("http://localhost:8000/api/products", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert("Product Added Successfully");
            }
            console.log(response.data);
            navigate('/admin'); // Navigate back to admin or any other appropriate page
        } catch (error) {
            console.error(error);
            alert(id ? "Failed to update product" : "Failed to add product");
        }
    };

    return (
        <Box sx={{backgroundImage:"linear-gradient(to bottom, #D1E9F6, #F5EDED)", display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width:"70%", flexDirection: 'column' }}>
                <Typography variant="h2" sx={{color:"black", fontWeight:"bold", fontSize:"70px", textAlign:"center"}}>
                    {id ? "Update Product" : "Add Product"}
                </Typography>
                <Box>
                    <Typography variant="h6" sx={{color:"black", fontWeight:"bold", fontSize:"30px", textAlign:"left"}}>Images</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%'}}>
                        <input type="file" multiple onChange={handleImageChange} />
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{color:"black", fontWeight:"bold", fontSize:"30px", textAlign:"left", marginTop:"50px"}}>Product Details</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width:'100%', marginTop:"50px"}}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width:'100%', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px'}}>
                            <Typography variant="h6" sx={{color:"black", fontSize:"20px", textAlign:"left",  width:"15%"}}>Product Name</Typography>
                            <TextField value={productName} onChange={(e) => setProductName(e.target.value)} sx={{width:"85%"}}></TextField>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width:'100%', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px'}}>
                            <Typography variant="h6" sx={{color:"black", fontSize:"20px", textAlign:"left",  width:"15%"}}>Short Description</Typography>
                            <TextField value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} sx={{width:"85%"}}></TextField>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width:'100%',  alignItems: 'center', marginBottom:'20px'}}>
                            <Typography variant="h6" sx={{color:"black", fontSize:"20px", textAlign:"left",  width:"15%"}}>Product Price ($)</Typography>
                            <TextField value={productPrice} onChange={(e) => setProductPrice(e.target.value)} sx={{width:"20%"}}></TextField>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width:'100%',  alignItems: 'center', marginBottom:'20px'}}>
                            <Typography variant="h6" sx={{color:"black", fontSize:"20px", textAlign:"left",  width:"15%"}}>Minimum Quantity</Typography>
                            <TextField value={minimumQuantity} onChange={(e) => setMinimumQuantity(e.target.value)} sx={{width:"20%"}}></TextField>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{color:"black", fontWeight:"bold", fontSize:"30px", textAlign:"left", marginTop:"50px"}}>Product Description</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width:'100%', marginTop:"50px"}}>
                        <ReactQuill value={productDescription} onChange={setProductDescription}  style={{marginBottom:"50px"}}/>
                        <Button onClick={handleSubmit} variant="contained" sx={{width:'40%', marginBottom:'50px'}}>
                            {id ? "Update Product" : "Add Product"}
                        </Button>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    );
}
