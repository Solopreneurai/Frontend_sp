import { Box, styled, Typography } from "@mui/material";

const FeatureSection = styled(Box)({
  padding: "60px"
})
export default function Features() {
  return (
    <FeatureSection>
      <Typography variant="h2" fontWeight={600}>Features</Typography>
    </FeatureSection>
  )
}