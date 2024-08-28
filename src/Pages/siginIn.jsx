import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import image1 from '../Assets/Logo.png'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function SiginIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    

    const handleSubmit = async (event) => {



        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email,
                password
            });
            
            if (response.data) {
                localStorage.setItem("token", response.data.token);
                alert("Login Successful");
                navigate("/"); // Navigate after successful login
            } else {
                setError("Invalid response from the server.");
            }
        } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : "An unknown error occurred. Please try again.";
            setError(errorMessage);
            alert("Unsuccessful Login");
        }
    };

    

    return (
        <Box sx={{backgroundImage:"linear-gradient(to bottom, #D1E9F6, #F5EDED)", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{width:"60%", height:"70%", backgroundColor:"white", borderRadius:"40px", boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.2)", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
                <Box sx={{backgroundColor:"#201E43", width:"50%", height:"100%", borderRadius:"40px 200px 200px 40px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Typography sx={{color:"white", fontSize:"45px", fontWeight:"bold", textAlign:"center", alignItems:'center', display:"flex", justifyContent:"center", flexDirection:"column"}}>Welcome Back To</Typography>
                    <Avatar src={image1} sx={{ height: "250px", borderRadius: "0px", objectFit: "cover", width: "300px" }}></Avatar>
                    <Typography sx={{color:"white", width:"80%",  fontSize:"22px", textAlign:"center", alignItems:'center', display:"flex", justifyContent:"center", flexDirection:"column"}}>Register with your personal details to access the site features</Typography>
                    <Button onClick={() => navigate('/signOut')}  size="large" sx={{color:"white", backgroundColor:"transparent", border:"1px solid white", marginTop:'40px', width:"40%",  fontSize:"18px", textAlign:"center", alignItems:'center', display:"flex", justifyContent:"center", flexDirection:"column", "&:hover":{backgroundColor:"transparent", color:"white", boxShadow:"none"}}}>Sign Up</Button>
                </Box>
                <Box sx={{width:"50%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Typography sx={{fontSize:"45px", fontWeight:"bold"}}>Login Account</Typography>
                    <Box>
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", justifyContent:"space-between", width:"150px", marginTop:"20px", marginBottom:"20px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{border:"1px solid black", padding:"10px", borderRadius:"10px", cursor:"pointer"}}  viewBox="0 0 30 30" width="40px" height="40px">    <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{border:"1px solid black", padding:"10px", borderRadius:"10px", cursor:"pointer"}} viewBox="0 0 64 64" width="40px" height="40px"><path d="M30.997,28.126l20.738,0.029C53.545,36.731,50.236,54,30.997,54C18.844,54,8.992,44.15,8.992,32s9.852-22,22.005-22	c5.708,0,10.907,2.173,14.817,5.736l-6.192,6.19c-2.321-1.988-5.329-3.196-8.625-3.196c-7.33,0-13.273,5.941-13.273,13.27	s5.942,13.27,13.273,13.27c6.156,0,10.412-3.644,11.978-8.738H30.997V28.126z"/></svg>                        
                        </Box>
                    </Box>
                    <Typography sx={{color:"black", width:"80%",  fontSize:"22px", textAlign:"center", alignItems:'center', display:"flex", justifyContent:"center", flexDirection:"column"}}>Or use your email for registration</Typography>
                    <TextField onChange={e => setEmail(e.target.value)} sx={{width:"70%", marginTop:"20px"}} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField onChange={e => setPassword(e.target.value)} sx={{width:"70%", marginTop:"20px"}} id="outlined-basic" label="Password" type="password" variant="outlined" />
                    <Typography sx={{color:"black", width:"80%",  fontSize:"22px", textAlign:"center", alignItems:'center', display:"flex", justifyContent:"center", flexDirection:"column", marginTop:"20px", cursor:"pointer"}}>Forgot your Password?</Typography>
                    <Button onClick={handleSubmit} size="large" sx={{color:"white", backgroundColor:"#F0A500", marginTop:'40px', width:"40%",  fontSize:"18px", textAlign:"center", alignItems:'center', display:"flex", justifyContent:"center", flexDirection:"column", fontWeight:"bold", "&:hover":{backgroundColor:"#C07F00", color:"white", boxShadow:"none"}}}>Sign In</Button>
                </Box>
            </Box>
        </Box>
    );
}