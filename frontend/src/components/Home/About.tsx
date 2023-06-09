import { Box, styled, Typography } from "@mui/material";
import img from "../../assets/chatbot-bg.png"

const AboutSection = styled(Box)({
  padding: "100px 200px 20px 200px",
  backgroundColor: "#ffebe6",
  width: "100%",
  color: "#2b3c4d",
  textAlign: 'center'
});
export default function About() {
  return (
    <AboutSection>
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
