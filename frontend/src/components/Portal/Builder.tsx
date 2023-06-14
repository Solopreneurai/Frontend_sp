import { Box, Typography, styled, Chip, Divider } from "@mui/material";
import { FilledButton } from "../Home/Hero";
import { AddCircleOutline } from "@mui/icons-material";
import NoChatBot from  "../../assets/no-chatbot.png"

const Wrapper = styled(Box)({
  padding: "10px 30px",
});
const ImgBox = styled(Box)({
  display: 'flex',
  justifyContent:'center'
})
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
      <ImgBox>
      <img src={NoChatBot} width="40%" alt="no chatbots made" />
      </ImgBox>
    </Wrapper>
  );
}

export default Builder;
//should show bots if any