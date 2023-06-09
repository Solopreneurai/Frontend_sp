import { Box, styled, Typography } from "@mui/material";
import Img from "../../assets/contact-img.png";
import { CustomBox, StartButton, RequestButton } from "./Hero"

const ContactSection = styled(Box)({
  padding: "60px",
  display: "grid",
  gridTemplateColumns: 'repeat(2, 1fr)',
  color: "#2b3c4d",
  gap: '30px'
});

export default function Contact() {
  return (
    <ContactSection>
      <Box maxWidth='500px'>
        <Typography align="left" variant="h2" fontWeight={800} mb={6}>
          Contact us
        </Typography>

        <Typography variant="h4" fontWeight={600} mb={1} color="#ff5c35">
          Our support heroes are here for you 24/7
        </Typography>
        <Typography variant="h6" mb={4}>
          Effortlessly connect your Popupsmart account with your preferred
          service provider to maximize website conversions.
        </Typography>
        <CustomBox style={{justifyContent: 'flex-start'}}>
        <StartButton variant="contained">Book Meeting</StartButton>
        <RequestButton variant="outlined">Chat With Us</RequestButton>
      </CustomBox>
      </Box>
      <Box textAlign="center">
        <img src={Img} alt="alt" width="80%" />
      </Box>
    </ContactSection>
  );
}
