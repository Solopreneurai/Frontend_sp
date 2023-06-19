import { Box, Typography } from "@mui/material";
import { ErrorTwoTone } from "@mui/icons-material/";

function Conversation() {
  const conversations = [];
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        Conversations
      </Typography>
      <Typography variant="body1" mt={1} mb={2} color="#6b7280">
        View data and conversations collected from users
      </Typography>
      <Box textAlign="center">
        {conversations.length ? (
          <></>
        ) : (
          <Box mt={16}>
            <ErrorTwoTone sx={{ color: "#ff7f53", fontSize: 80 }} />
            <Typography variant="h6" fontWeight={700} mt={1}>
              No conversations recorded yet
            </Typography>
            <Typography variant="body2">
              All conversations with your users will be visible here
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Conversation;
