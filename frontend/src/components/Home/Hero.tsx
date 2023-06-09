import { Box, styled, Typography, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material/";

const HeroSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "150px 60px 80px 60px",
  textAlign: "center",
  alignItems: "center",
  color: "#2b3c4d",
});
const CustomBox = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  margin: "24px 0",
});
const Text = styled(Box)({
  display: "flex",
  gap: "2px",
});
const StartButton = styled(Button)({
  backgroundColor: "#ff5c35",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: "#ff5c35",
  },
  padding: "10px 30px",
});
const RequestButton = styled(Button)({
  borderColor: "#ff5c35",
  color: "#ff5c35",
  padding: "10px 30px",
  textTransform: "none",
  fontWeight: 600,
  ":hover": {
    borderColor: "#ff5c35",
    backgroundColor: "#ffebe6",
  },
});

export default function Hero() {
  return (
    <HeroSection>
      <Box maxWidth="800px">
        <Typography variant="h2" fontWeight={800} mb={3}>
          A <span style={{ color: "#ff5c35" }}>No-Code Custom</span> AI Chatbot
          Support Builder
        </Typography>
        <Typography variant="h6" color="#304457">
          Centralizing all of your data on your website without writing any code
          is simple with an AI chatbot builder. By educating AI chatbot on your
          own data, you may prepare your knowledge-base chat.
        </Typography>
      </Box>
      <CustomBox>
        <Text>
          <CheckCircle fontSize="small" style={{ color: "#ff5c35" }} />
          <Typography variant="subtitle2" fontWeight={600}>
            Free and Paid Plans
          </Typography>
        </Text>
        <Text>
          <CheckCircle fontSize="small" style={{ color: "#ff5c35" }} />
          <Typography variant="subtitle2" fontWeight={600}>
            Setup in Minutes
          </Typography>
        </Text>
        <Text>
          <CheckCircle fontSize="small" style={{ color: "#ff5c35" }} />
          <Typography variant="subtitle2" fontWeight={600}>
            No credit card required
          </Typography>
        </Text>
      </CustomBox>
      <CustomBox>
        <StartButton variant="contained">Get Started</StartButton>

        <RequestButton variant="outlined">Request Demo</RequestButton>
      </CustomBox>
    </HeroSection>
  );
}