import { Box, styled, Typography } from "@mui/material";

const WorkSection = styled(Box)({
  padding: "100px",
  width: "100%",
  color: "#2b3c4d"
});

export default function Working() {
  return (
    <WorkSection>
      <Typography variant="h2">Working</Typography>
    </WorkSection>
  )
}
