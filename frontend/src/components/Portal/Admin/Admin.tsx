import { Box, Divider, FormControl, MenuItem, Select, Typography, styled } from "@mui/material";
import {
  PieChart,
  ScatterPlot,
  Savings,
  Group,
  Groups,
} from "@mui/icons-material";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import Header from "../Header";

const CustomBox = styled(Box)({
  background: "white",
  borderRadius: "20px",
  border: "1px solid #cbd6e255",
  boxShadow: "16px 16px 32px #dbdbdb",
  margin: "20px 0",
});
const GridBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  padding: "20px 24px",
  marginBottom: "24px",
});

const BoxWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "35% auto",
  gap: "32px",
});
const gridData = [
  {
    id: "1",
    value: 0,
    text: "Tenants",
    subText: "More Info",
    color: "#cb4e47",
    icon: <Groups sx={{ color: "#cb4e47", fontSize: "64px" }} />,
  },
  {
    id: "2",
    value: 0,
    text: "On Trial Tenants",
    subText: "On Trial Tenants",
    color: "#136bc3",
    icon: <Group sx={{ color: "#136bc3", fontSize: "64px" }} />,
  },
  {
    id: "3",
    value: 0,
    text: "Pending Amount",
    subText: "Pending Amount",
    color: "#033a72",
    icon: <ScatterPlot sx={{ color: "#033a72", fontSize: "64px" }} />,
  },
  {
    id: "4",
    value: 0,
    text: "Available Amount",
    subText: "Available Amount",
    color: "#ff8976",
    icon: <Savings sx={{ color: "#ff8976", fontSize: "64px" }} />,
  },
];

const data = {
  labels: ["Plan1", "Plan2", "Plan3"],
  datasets: [
    {
      label: "Plan users",
      data: [12, 19, 3],
      backgroundColor: ["#2b3c4d66", "#cb4e4766", "#ff5c3566"],
      borderColor: ["#2b3c4d", "#cb4e47", "#ff5c35"],
      borderWidth: 1.5,
    },
  ],
};

const clientData = [
  {id: "1",name: 'AI', company: "Solopreneur", subscriptions: 0},
  {id: "2",name: 'Solo', company: "Solopreneur", subscriptions: 1},

]

export default function Admin() {
  const [value, setVal] = useState('Today')
  return (
    <Box sx={{ p: "0 30px 60px", height: "100%", background: "#f6f9fc99" }}>
      <Header title="" />
      <Typography variant="h5" fontWeight={700} mb={1}>
        {" "}
        Dashboard
      </Typography>
      <CustomBox>
        <Box className="flex" p={1.5}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <PieChart />
            <Typography variant="subtitle1" fontWeight={600}>
              {value} Summary
            </Typography>
          </div>
          <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          value={value}
          onChange={(e) => setVal(e.target.value)}
        >
          <MenuItem value='Today'>Today</MenuItem>
          <MenuItem value='Last 7 Days'>Last 7 Days</MenuItem>
          <MenuItem value='This Month'>This Month</MenuItem>
          <MenuItem value='This Year'>This Year</MenuItem>


        </Select>
      </FormControl>
        </Box>
        <Divider />

        <GridBox>
          {gridData.map((item) => (
            <Box
              key={item.id}
              className="flex"
              sx={{
                background: `${item.color}88`,
                color: "white",
                borderRadius: "8px",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                className="flex"
                style={{ padding: "16px", width: "100%", flex: 1 }}
              >
                <div>
                  <Typography variant="h5" fontWeight={600}>
                    {item.value}
                  </Typography>
                  <Typography variant="subtitle1">{item.text}</Typography>
                </div>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  {item.icon}
                </span>
              </div>
              <Box
                sx={{ background: item.color }}
                p={1}
                borderRadius="0 0 8px 8px"
                width="100%"
              >
                <Typography align="center" variant="body1">
                  {item.subText}
                </Typography>
              </Box>
            </Box>
          ))}
        </GridBox>
      </CustomBox>

      <BoxWrapper>
        <CustomBox>
          <Typography variant="subtitle1" fontWeight={600} p={2}>
            Top Plans
          </Typography>
          <Divider />
          <Box p={3}>
            <Pie data={data} />
          </Box>
        </CustomBox>
        <CustomBox>
          <Typography variant="subtitle1" fontWeight={600} p={2}>
            List of Top Clients
          </Typography>
          <Divider />
          <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
            {clientData.map((client) => 
            <CustomBox key={client.id} borderRadius='8px !important' p={3} mb='0!important' className="flex">
              <div>
                <Typography variant="h6" fontWeight={600}>{client.name}</Typography>
                <Typography variant="subtitle1">{client.company}</Typography>

              </div>
              <Typography variant="subtitle1" >
                Subscriptions: <span style={{fontWeight: 600}}>
                {client.subscriptions}
                  </span>
              </Typography>
            </CustomBox>

            )}
          </Box>
        </CustomBox>
      </BoxWrapper>
    </Box>
  );
}
