import { Box, styled, Typography, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material/";

const HeroSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "150px 60px 80px 60px",
  textAlign: "center",
  alignItems: "center",
});
export const CustomBox = styled(Box)({
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
export const FilledButton = styled(Button)({
  backgroundColor: "var(--secondary-light-color)",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: "var(--secondary-light-color)",
  },
  padding: "10px 30px",
});
export const OutlinedButton = styled(Button)({
  borderColor: "var(--secondary-light-color)",
  color: "var(--secondary-color)",
  padding: "10px 30px",
  textTransform: "none",
  fontWeight: 600,
  ":hover": {
    borderColor: "var(--secondary--light-color)",
    backgroundColor: "var(--light-orange)",
  },
});

export default function Hero() {
  return (
    <HeroSection>
      <Box maxWidth="800px">
        <Typography variant="h2" fontWeight={800} mb={3}>
          A <span style={{ color: "var(--secondary-color)" }}>No-Code Custom</span> AI Chatbot
          Support Builder
        </Typography>
        <Typography variant="h6" color="var(--main-blue)">
          Centralizing all of your data on your website without writing any code
          is simple with an AI chatbot builder. By educating AI chatbot on your
          own data, you may prepare your knowledge-base chat.
        </Typography>
      </Box>
      <CustomBox>
        <Text>
          <CheckCircle fontSize="small" style={{ color: "var(--secondary-color)" }} />
          <Typography variant="subtitle2" fontWeight={600}>
            Free and Paid Plans
          </Typography>
        </Text>
        <Text>
          <CheckCircle fontSize="small" style={{ color: "var(--secondary-color)" }} />
          <Typography variant="subtitle2" fontWeight={600}>
            Setup in Minutes
          </Typography>
        </Text>
        <Text>
          <CheckCircle fontSize="small" style={{ color: "var(--secondary-color)" }} />
          <Typography variant="subtitle2" fontWeight={600}>
            No credit card required
          </Typography>
        </Text>
      </CustomBox>
      <CustomBox>
        <FilledButton variant="contained">Get Started</FilledButton>
        <OutlinedButton variant="outlined">Request Demo</OutlinedButton>
      </CustomBox>
    </HeroSection>
  );
}