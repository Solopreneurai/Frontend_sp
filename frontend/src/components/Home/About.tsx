import { Box, styled, Typography } from "@mui/material";

const AboutSection = styled(Box)({
  padding: "100px",
  backgroundColor: "#ffebe6",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  color: "#2b3c4d"
});
export default function About() {
  return (
    <AboutSection>
      <Typography variant="h2" fontWeight={600}>About Section</Typography>
    </AboutSection>
  );
}
