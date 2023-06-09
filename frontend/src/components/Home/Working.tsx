import { Box, styled, Typography } from "@mui/material";

const WorkSection = styled(Box)({
  padding: "60px",
  width: "100%",
  color: "#2b3c4d",
});

export default function Working() {
  return (
    <WorkSection>
      <Typography variant="h4" fontWeight={600} align="center">How we work ?</Typography>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gap: "40px"}}>
        
      </Box>
    </WorkSection>
  )
}
