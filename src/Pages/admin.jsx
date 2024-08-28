import { Avatar, Box, Button, Typography, Fade } from "@mui/material";
import React, {useState, useEffect} from "react";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import product1 from "../Assets/product1.jpg";
import product2 from "../Assets/product2.jpg";
import product3 from "../Assets/product3.jpg";
import product4 from "../Assets/product4.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Admin() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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

      const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            axios.delete(`http://localhost:8000/api/deleteproducts/${id}`)
                .then(response => {
                    setProducts(products.filter(product => product.id !== id));
                    alert('Product deleted successfully!');
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                    alert('Failed to delete the product.');
                });
        }
    };

    const handleUpdate = (id) => {
        navigate(`/updateProduct/${id}`);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:"80%", flexDirection: 'column' }}>
                <Typography variant="h2" sx={{color:"black", fontWeight:"bold", fontSize:"70px"}}>Admin Panel</Typography>
                <Box sx={{marginTop:'2%', display: 'flex', flexDirection: 'column', width:'100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Button href="/addProduct" variant="contained" sx={{width:'40%', marginBottom:'50px'}}>Add Product</Button>
                    <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', flexDirection: 'row', justifyContent: 'space-between', width:'100%', marginBottom:'50px'}}>
            {products.map(Product => (
              <Box key={Product.id} sx={{padding:'10px', border:"1px solid rgba(0, 0, 0, 0.4) ", borderRadius: '10px', display:"flex", width:'47%','&:hover':{boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', cursor: 'pointer'}}}>
                {Product.images.length > 0 && (
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar 
                      src={`http://127.0.0.1:8000/${Product.images[0].path}`} 
                      sx={{borderRadius: '10px', width: "300px", height: "300px", transition: 'transform 1s ease-in-out', '&:hover':{ transform: 'scale(1.05)' }, cursor: 'pointer'}}
                    />
                  </Box>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                  <Typography variant="h6" sx={{ marginBottom:'10px'}}>{Product.product_name}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom:'10px' }}>{Product.product_price}$</Typography>
                  <Typography variant="h6" sx={{ marginBottom:'10px' }}>Min. Order : {Product.minimum_quantity}kg</Typography>
                  <Typography variant="h6" sx={{ marginBottom:'30px' }}>Estimate Delivery : 20 sep 2024 </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Button 
                      onClick={() => handleDelete(Product.id)}
                      size="large" 
                      sx={{marginRight:'10%', backgroundColor:"red", padding:"10px 20px", color:"white", '&:hover': {border:"1px solid #006989", backgroundColor: 'transparent', color: '#006989' }}}
                    >
                      Delete
                    </Button>
                    <Button size="large" onClick={() => handleUpdate(Product.id)} sx={{backgroundColor:"green", padding:"10px 20px", color:"white", '&:hover': { border:"1px solid #006989", backgroundColor: 'transparent', color: '#006989' }}}>Update</Button>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box> 
        
                </Box>
            </Box>
        </Box>
        
    );
}