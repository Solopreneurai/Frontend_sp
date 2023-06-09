import { Box, styled, Typography } from "@mui/material";

const DemoSection = styled(Box)({
  padding: "100px",
  
})

export default function Demo() {
  return (
    <DemoSection>
      <Typography variant="h2">Demo section</Typography>
    </DemoSection>
  )
}
