import { Box, Typography, styled, Chip, Divider } from "@mui/material";
import { FilledButton } from "../Home/Hero";
import { AddCircleOutline } from "@mui/icons-material";

const Wrapper = styled(Box)({
  padding: "20px 30px",
});
function Builder() {
  const num = "0";
  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography variant="h4" fontWeight={600}>
            Your Bots
          </Typography>
          <Chip label={num} style={{ fontWeight: 600 }} />
        </Box>
        <FilledButton
          variant="contained"
          startIcon={<AddCircleOutline style={{ fontSize: "14px" }} />}
        >
          Create New
        </FilledButton>
      </Box>

      <Divider />
      <Box></Box>
    </Wrapper>
  );
}

export default Builder;
//should show bots if any