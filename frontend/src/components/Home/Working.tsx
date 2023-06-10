import { Box, styled, Typography } from "@mui/material";
import DemoImg from "../../assets/demo.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WorkSection = styled(Box)({
  padding: "60px",
  width: "100%",
  color: "#2b3c4d",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default function Working() {
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <WorkSection sx={{pb: "0 !important"}}>
      <Box maxWidth="600px">
        <Typography variant="h4" fontWeight={600} align="center" mb={2}>
          How we work ?
        </Typography>
        <Typography variant="body1" align="center" fontWeight={500}>
          We've simplified all the challenging stages for you. In just a few
          easy steps, create and train a chatbot for your website.
        </Typography>
      </Box>
      <img src={DemoImg} alt="demo-img" width="80%" height="600px" data-aos="fade-up" data-aos-duration="3000" />
    </WorkSection>
  );
}
