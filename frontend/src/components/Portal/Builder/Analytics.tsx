import { Box, Typography, styled } from "@mui/material";

const BoxStyle = styled(Box)({
  padding: "20px",
  boxShadow: "20px 20px 60px #d9d9d9",
  margin: "0 40px",
  width: "60%",
  borderRadius: "20px",
  border: '1px solid #cbd6e2',
  ":hover": {
    background: "#f6f9fc",
  },
});

const analyticsData = [
  { id: "1", title: "Words", text: "Number of words", num: 0 },
  { id: "2", title: "Messages", text: "Number of messages", num: 0 },
  { id: "3", title: "Chats", text: "Number of chats", num: 0 },
];

export default function Analytics() {
  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={4}>
        Analytics
      </Typography>
      <Box className="flex" flexDirection="column" gap="40px">
        {analyticsData.map((data) => (
          <BoxStyle key={data.id}>
            <Typography variant="subtitle1" fontWeight={600}>
              {data.title}
            </Typography>
            <Typography variant="body2">{data.text}</Typography>
            <Typography variant="h3" color="#ff5c35">
              {data.num}
            </Typography>
          </BoxStyle>
        ))}
      </Box>
    </>
  );
}
