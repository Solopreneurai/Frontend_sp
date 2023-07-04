import { Box, Typography, styled } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js/auto";
import { useEffect } from "react";

const BoxStyle = styled(Box)({
  padding: "20px 12px",
  boxShadow: "20px 20px 60px #d9d9d9",
  cursor: 'pointer',
  borderRadius: "20px",
  border: "1px solid #cbd6e2",
  ":hover": {
    background: "#f6f9fc",
  },
});
const GridBox = styled(Box)({
  margin: '28px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  width: '100%'
})

const analyticsData = [
  { id: "1", title: "Avg Daily Active Users", text: "Number of words", num: 0 },
  { id: "2", title: "Avg Daily New Users", text: "Number of messages", num: 0 },
  { id: "3", title: "New Users", text: "Number of chats", num: 0 },
  { id: "4", title: "Total Messages", text: "Number of conversations", num: 0},
  { id: "5", title: "Total Conversations", text: "Number of conversations", num: 0},
  { id: "6", title: "Bot Deflection Rate", text: "Number of conversations", num: 0},
  { id: "7", title: "Bot Escalation Rate", text: "Number of conversations", num: 0},

];

const data = {
  labels: ["21-06", "22-06", "23-06", "24-06", "25-06", "26-06"],
  datasets: [
    {
      label: "Active Users",
      data: [33, 53, 85, 41, 44, 65],
      fill: "origin",
      backgroundColor: " #2b3c4d88",
      borderColor: "#2b3c4d",
      pointBackgroundColor: '#2b3c4d',
      borderWidth: 5
    },
    {
      label: "Messages",
      data: [33, 25, 35, 51, 54, 76],
      fill: "origin",
      borderColor: " #ff5c35",
      backgroundColor: " #ff5c3588",
      pointBackgroundColor: '#ff5c35',
      borderWidth: 5
    },
  ],
};
export default function Analytics() {
  useEffect(() => {
    ChartJS.register(...registerables);
  }, []);

  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={4}>
        Analytics
      </Typography>

      <Box className="flex" flexDirection="column" gap="40px">
        <Line
          data={data}
          options={{
            scales: { y: { stacked: true} },
            plugins: {
              legend: {
                position: "bottom",
              },
            },
            elements: { point: { radius: 4 } },
          }}
        />       
        <GridBox>
        {analyticsData.map((data) => (
          <BoxStyle key={data.id}>
            <Typography variant="body2" fontWeight={600}>
              {data.title}
            </Typography>
            <Typography variant="h3" color="#ff5c35">
              {data.num}
            </Typography>
          </BoxStyle>
        ))}
        </GridBox>
      </Box>
    </>
  );
}