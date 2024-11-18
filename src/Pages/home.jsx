import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import hero_image from "../Assets/hero1.png";
import cinnemon from "../Assets/Cinemon.png";
import freshCloves from "../Assets/fresh_cloves.png";
import bluebutterfly from "../Assets/bluebutterfly.png";
import { motion } from "framer-motion";
import contact_baner  from "../Assets/baner.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image1 from '../Assets/Logo.png'; 

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionIcon = motion(Box);

export default function Home() {
  return (
    <Box sx={{marginBottom: {xs:"250px", sm:"0px", md:"0px"}}}>
      {/* First Section */}
      <Box sx={{ flexGrow: 1, position: "relative", width: "100%", height: "90vh" }}>
        <Avatar src={hero_image} sx={{ width: "100%", height: "100%", borderRadius: 0 }} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        >
          <Box sx={{ position: "absolute", top: 0, left: 0, backgroundColor: "black", width: "100%", height: "90vh" }}></Box>
        </motion.div>
        <Box sx={{ position: "absolute", top: "50%", left: "10%", transform: "translateY(-50%)" }}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h2" color="white" sx={{ fontFamily: "initial", marginBottom: "30px", fontSize: { xs: "25px", md: "40px", lg: "60px" } }}>
              Original High Quality Ceylon Spices
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography variant="body1" color="white" sx={{ fontSize: { xs: "15px", lg: "20px" }, width: { xs: "300px", md: "500px" } }}>
              In the mystical haven of Sri Lanka, timeless secrets of Ceylon spices lie in wait to reshape lives. Join us in uncovering the enchanting power and rich legacy of these extraordinary flavors.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Button variant="contained" color="success" sx={{ marginTop: "30px", backgroundColor: "#FFA823", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "white", color: "black" } }}>
              Let's See Our Products
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Second Section */}
      <Box sx={{ width: "100%", height: "100vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              backgroundColor: "#F7EFE5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "initial",
                width: "80%",
                color: "black",
                zIndex: 1,
                fontSize: { xs: "45px", lg: "60px" },
                alignItems: "center",
                display: "flex",
              }}
            >
              Our Best Products
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            flexDirection:{
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row"
            }
          }}
        >
          {[
            { img: cinnemon, name: "Cinnamon" },
            { img: bluebutterfly, name: "Blue Butterfly" },
            { img: freshCloves, name: "Fresh Cloves" }
          ].map((product, index) => (
            <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.3 + index * 0.3 }}
                sx={{
                  position: 'relative',
                  width: {xs:"90%" ,sm:"90%" ,md:"90%" ,lg:'24%'},
                  height: '70vh',
                  overflow: 'hidden',
                  borderRadius: '10px',
                }}
              >
              <Avatar src={product.img} sx={{ height: "100%", width: "100%", borderRadius: 0, transition: "transform 0.5s ease" }} />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
                  opacity: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  '&:hover': {
                    opacity: 1,
                    transform: "scale(1.05)",
                  }
                }}
              >
                <Typography variant="h4">{product.name}</Typography>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "50vh" }}>
          <Box sx={{ width: "100%", height: { xs:"160vh",sm:"120vh",md:"50vh"}, backgroundColor: "#F7EFE5", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ marginTop:{ xs:"-900px", sm:"-400px",md:"0px", lg:"0px"} ,width: "80%", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center",  justifyContent:"space-between", flexDirection:{xs:"column", sm:"column" ,md:"row",lg:"row"} }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              sx={{
                height: "50vh",
                width: {xs:"90%" ,sm:"90%" ,md:"22%"},
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom:{xs:"30px", sm:"30px",md:"0px",lg:"0px"},
              }}
            >

                <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFA823"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
                <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>Fast & Safe Shipping</Typography>
                <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>Enjoy fast and secure shipping, ensuring your items arrive quickly and in perfect condition. We prioritize speed without compromising safety, so your order reaches you just as it should.</Typography>

            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              sx={{
                height: "50vh",
                width: {xs:"90%" ,sm:"90%" ,md:"22%"},
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom:{xs:"30px", sm:"30px",md:"0px",lg:"0px"},
              }}
            >                
            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFA823"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg>
                <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>Money Guarantee</Typography>
                <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>100% Money Back Guarantee—shop with confidence knowing your satisfaction is our priority. If you're not completely happy with your purchase, we'll promptly refund your money, no questions asked.</Typography>
              </MotionBox>
              <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              sx={{
                height: "50vh",
                width: {xs:"90%" ,sm:"90%" ,md:"22%"},
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom:{xs:"30px", sm:"30px",md:"0px",lg:"0px"},
              }}
            >                <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFA823"><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/></svg>
                <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>Quality Guarantee</Typography>
                <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>Enjoy fast and secure shipping, ensuring your items arrive quickly and in perfect condition. We prioritize speed without compromising safety, so your order reaches you just as it should.</Typography>
              </MotionBox>
              <MotionBox
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              sx={{
                height: "50vh",
                width: {xs:"90%" ,sm:"90%" ,md:"22%"},
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
              }}
            >                <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFA823"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>Any Time Chat</Typography>
                <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>Our chat is available 24/7. Reach out anytime, and we’ll assist with any questions or support you need. We're here to provide seamless, reliable, and prompt help whenever you need it</Typography>
              </MotionBox>
            </Box>
          </Box>
      </Box>
      <Box>
      <Box
        sx={{
          marginTop: { xs: "900px", sm: "800px", md: "0px", lg: "0px" },
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={contact_baner}
          sx={{
            width: "100%",
            height: {xs:"60vh" ,md:"50vh"},
            borderRadius: "0px",
            position: "relative",
            opacity: "0.2",
            marginTop: {xs:"400px" ,md:"0px"},
          }}
        />
        <Box
          sx={{
            width: "80%",
            height: "50vh",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <MotionTypography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", sm: "40px", md: "60px" },
              fontWeight: "bold",
              width: { xs: "90%", sm: "90%", md: "50%" },
              textAlign: "start",
              marginTop: {xs:"300px" ,md:"50px"},
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            We Are Always <span style={{ color: "#FF9100" }}>Happy To Hear</span>{" "}
            From You
          </MotionTypography>
          <Box
            sx={{
              paddingLeft: { xs: "0px", sm: "0px", md: "200px" },
              width: { xs: "90%", sm: "60%", md: "50%" },
              height: "50vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: { xs: "50px", sm: "0px", md: "0px" },
            }}
          >
            <MotionBox
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: { xs: "start", sm: "center", md:"start"},
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
                  marginLeft: "10px",
                  
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
                  marginLeft: "10px",
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
                  marginLeft: "10px",
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
      </Box>
    </Box>
    <Box sx={{ width: "100%", height:"50vh" }}>
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        sx={{ width:"80%"}}
      >
      <Typography
            variant="h2"
            sx={{
              fontFamily: "initial",
              width: "100%",
              color: "black",
              zIndex: 1,
              fontSize: { xs: "40px", lg: "60px" },
              alignItems: "center",
              display: "flex",
              marginTop:{ xs:"250px" ,sm:"100px" ,md:"50px"},

            }}
          >
            Customer Feedbacks
          </Typography>
      </MotionBox>
      <Box sx={{ width: "100%", marginTop:{xm:"0px" ,sm:"0px" ,md:"-50px"}, height: { xs:"120vh",sm:"100vh",md:"50vh"}, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ marginTop:{ xs:"-500px", sm:"-400px",md:"0px", lg:"0px"} ,width: "70%", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center",  justifyContent:"space-between", flexDirection:{xs:"column", sm:"column" ,md:"row",lg:"row"} }}>
        
          <MotionBox
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the element is in view
            transition={{ duration: 0.8, delay: 0.5 }}
            sx={{
              width: {xs:"90%" ,sm:"90%" ,md:"28%"},
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", 
              border:"1px solid #FF9100",
              padding:"20px",
              borderRadius:"5px",
              backgroundColor:"#FABC3F",
              boxShadow: "10px 4px 8px 0 rgba(20, 20, 0, 0.3)",
              marginBottom:{xs:"30px", sm:"30px", md:"0px", lg:"0px"}
            }}
          >
            <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>Enjoy fast and secure shipping, ensuring your items arrive quickly and in perfect condition. We prioritize speed without compromising safety, so your order reaches you just as it should.Very Good Products</Typography>
            <Typography variant="h6" sx={{textAlign:"end", marginTop:"20px"}}>Ahmed Al-Farsi - UAE</Typography>
          </MotionBox>

          <MotionBox
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1 }}
            sx={{
              width: {xs:"90%" ,sm:"90%" ,md:"28%"},
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              border:"1px solid #FF9100",
              padding:"20px",
              borderRadius:"5px",
              backgroundColor:"#FABC3F",
              boxShadow: "10px 4px 8px 0 rgba(20, 20, 0, 0.3)",
              marginBottom:{xs:"30px", sm:"30px", md:"0px", lg:"0px"}
            }}
          >                
            <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>These spices are fantastic! The flavors are fresh and intense, making a big difference in my meals. The packaging was excellent, and delivery was swift. I’m really pleased with the service and will definitely reorder.</Typography>
            <Typography variant="h6" sx={{textAlign:"end", marginTop:"20px"}}>John Smith - USA</Typography>
          </MotionBox>

          <MotionBox
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            sx={{
              width: {xs:"90%" ,sm:"90%" ,md:"28%"},
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              border:"1px solid #FF9100",
              padding:"20px",
              borderRadius:"5px",
              backgroundColor:"#FABC3F",
              boxShadow: "10px 4px 8px 0 rgba(20, 20, 0, 0.3)",
            }}
          >                
            <Typography variant="p" sx={{ color: "black", marginTop: "10px" }}>The quality of these spices is outstanding! The freshness and rich aromas have elevated my cooking. The packaging was secure, and delivery was prompt. I’m very happy with my order and look forward to buying again.</Typography>
            <Typography variant="h6" sx={{textAlign:"end", marginTop:"20px"}}>Olivia Martins - Brazil</Typography>
          </MotionBox>

        </Box>
      </Box>

      </Box>
    </Box>
    </Box>
  );
}
