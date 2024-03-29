import { Box, styled, Typography } from "@mui/material";
import Img from "../../assets/contact-img.png";
import { CustomBox, OutlinedButton, FilledButton } from "./Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = styled(Box)({
  padding: "100px 60px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "30px",
  overflowX: "hidden",
});

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ContactSection id="contact">
      <Box maxWidth="500px" data-aos="fade-right" data-aos-duration="3000">
        <Typography align="left" variant="h2" fontWeight={800} mb={6}>
          Contact us
        </Typography>

        <Typography
          variant="h4"
          fontWeight={600}
          mb={1}
          color="#ff5c35"
        >
          Our support heroes are here for you 24/7
        </Typography>
        <Typography variant="h6" mb={4}>
          Effortlessly create a custom trained ai chatbot for your site and if
          you need any help feel free to book a call or chat with us.
        </Typography>
        <CustomBox style={{ justifyContent: "flex-start" }}>
          <FilledButton variant="contained">Book Meeting</FilledButton>
          <OutlinedButton variant="outlined">Chat With Us</OutlinedButton>
        </CustomBox>
      </Box>
      <Box textAlign="center" data-aos="fade-left" data-aos-duration="3000">
        <img src={Img} alt="alt" width="80%" />
      </Box>
    </ContactSection>
  );
}