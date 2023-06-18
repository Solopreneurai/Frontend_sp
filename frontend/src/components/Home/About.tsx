import { Box, styled, Typography } from "@mui/material";
import img from "../../assets/chatbot-bg.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = styled(Box)({
  padding: "100px 200px 20px 200px",
  backgroundColor: "#ffebe6",
  width: "100%",
  textAlign: 'center'
});
export default function About() {
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <AboutSection data-aos="fade-up" data-aos-duration="3000">
      <Typography variant="h2" fontWeight={800}>
        Make customer engagement easy and fun!
      </Typography>
      <Typography variant="h6" mt={4} color="#304457">
        Integrate human-like conversations without human interaction, no code.
        Turn your knowledge base into a customized chatbot AI chatbot builder is
        not your regular AI bot platform. 
      </Typography>
      <img src={img} width="60%" />
    </AboutSection>
  );
}
