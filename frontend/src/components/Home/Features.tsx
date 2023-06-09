import { Box, styled, Typography } from "@mui/material";

const FeatureSection = styled(Box)({
  padding: "60px",
  width: "100%",
  color: "#2b3c4d",
})
export default function Features() {
  return (
    <FeatureSection>
      <Typography variant="h4" fontWeight={600} align="center">Features</Typography>
    </FeatureSection>
  )
}