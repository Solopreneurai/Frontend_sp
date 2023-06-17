import { Box, Tab, styled, Typography, Divider, Avatar } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Header = styled(Box)({
  padding: "30px 30px 0px 30px",
  display: "flex",
  gap: "16px",
  overflow: "scroll",
});
const TabStyle = styled(Tab)({
  color: "#2b3c4d",
  textTransform: 'none',
  fontWeight: 600,
  "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
    color: "#ff5c35",
  },
});
const ContentWrapper = styled(Box)({
  padding: "20px 10px",
});

function Bot() {
  const [value, setValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, val: string) => {
    console.log(e);
    setValue(() => val);
  };
  const { bot } = useLocation().state;

  return (
    <div>
      <TabContext value={value}>
        <Header>
          <Typography variant="h4" fontWeight={600}>
            {bot?.name}{" "}
          </Typography>
          <TabList
            TabIndicatorProps={{ style: { background: "#ff5c35" } }}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
          >
            <TabStyle label="Source" value="1" />
            <TabStyle label="Customize" value="2" />
            <TabStyle label="Starter Questions" value="3" />
            <TabStyle label="User Data" value="4" />
            <TabStyle label="Conversations" value="5" />
            <TabStyle label="Embeddings" value="6" />
            <TabStyle label="Analytics" value="7" />
            <TabStyle label="Other" value="8" />
          </TabList>

          <Avatar sx={{ bgcolor: "#ff5c35" }}>N</Avatar>
        </Header>
        <Divider />
        <ContentWrapper>
          <TabPanel value="1">Source</TabPanel>
          <TabPanel value="2">Customize</TabPanel>
          <TabPanel value="3">Starter Questions</TabPanel>
          <TabPanel value="4">user data</TabPanel>
          <TabPanel value="5">Converstations</TabPanel>
          <TabPanel value="6">Embeddings</TabPanel>
          <TabPanel value="7">Analytics </TabPanel>
          <TabPanel value="8">others</TabPanel>
        </ContentWrapper>
      </TabContext>
    </div>
  );
}

export default Bot;
