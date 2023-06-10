import { Box, styled, Typography } from "@mui/material";
import DemoImg from "../../assets/demo.png"

const WorkSection = styled(Box)({
  padding: "60px",
  width: "100%",
  color: "#2b3c4d",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default function Working() {
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
      <img src={DemoImg} alt="demo-img" width="80%" height="600px" />
    </WorkSection>
  );
}
