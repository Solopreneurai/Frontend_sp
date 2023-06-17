import { Box, styled, Typography } from "@mui/material";
import logo from "../../assets/chatbot-logo.png";
import { LinkedIn, Twitter, Instagram, Facebook, YouTube } from "@mui/icons-material";

const FooterSection = styled(Box)({
  backgroundColor: "#2b3c4d",
  color: "#cbd6e2",
  width: "100%",
  padding: "0 100px",
});
const FooterContent = styled(Box)({
  display: "grid",
  gridTemplateColumns: "40% 60%",
  borderBottom: "1px solid #cbd6e233",
  gap: "30px",
  padding: "100px 0",
});
const FooterInfo = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
});
const Title = styled(Typography)({
  fontWeight: 800,
  paddingBottom: "20px",
  color: "#fff",
});
const ContactDiv = styled(Box)({
  padding: "40px 0",
});

export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <Box>
          <img src={logo} height="60px" />
          <Typography
            variant="h6"
            maxWidth={"360px"}
            fontWeight={600}
            color="#fff"
            mt={2}
          >
            Helping Brands and Businesses to provide outstanding experience
          </Typography>
        </Box>
        <FooterInfo>
          <Box>
            <Title variant="h6">About</Title>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Features
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Pricing
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Testimonials
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Terms of use
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Privacy policy
            </Typography>
          </Box>
          <Box>
            <Title variant="h6">Features</Title>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Feature #1
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Feature #2
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Feature #3
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Feature #4
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Feature #5
            </Typography>
          </Box>
          <Box>
            <Title variant="h6">Resources</Title>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Blog
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Help Center
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ p: "2px 0" }}>
              Contact Us
            </Typography>
          </Box>
        </FooterInfo>
      </FooterContent>
      <ContactDiv className="flex">
        <Box> 2023 Copyrights. All Rights Reserved</Box>
        <Box sx={{display: 'flex', gap: '25px'}}>
          <Facebook fontSize="medium" />
          <LinkedIn fontSize="medium" />
          <Twitter fontSize="medium" />
          <Instagram fontSize="medium" />
          <YouTube fontSize="medium" />
        </Box>
      </ContactDiv>
    </FooterSection>
  );
}
