import { Box, Tab, styled, Typography, Divider, Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Source from "../components/Portal/Builder/Source";
import Customize from "../components/Portal/Builder/Customize";
import UserData from "../components/Portal/Builder/UserData";
import Starter from "../components/Portal/Builder/Starter";
import Conversation from "../components/Portal/Builder/Conversation";
import Embeddings from "../components/Portal/Builder/Embeddings";
import Analytics from "../components/Portal/Builder/Analytics";
import { Fullscreen } from '@mui/icons-material/';

const Header = styled(Box)({
  padding: "30px 30px 0px 30px",
  display: "flex",
  gap: "16px",
  overflow: "scroll",
});
const TabStyle = styled(Tab)({
  color: "var(--main-color)",
  textTransform: "none",
  "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
    color: "var(--secondary-color)",
  },
});
const ContentWrapper = styled(Box)({
  display: "flex",
  height: '100%',
});
const PreviewBox = styled(Box)({
  background: "var(--light-blue)",
  padding: "20px",
  flex: 1,
  maxWidth: 450
});

export default function Bot() {
  const [value, setValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, val: string) => {
    console.log(e)
    setValue(() => val);
  };
  const { bot } = useLocation().state;
  const data = [
    { id: "1", label: "Source", element: <Source /> },
    { id: "2", label: "Customize", element: <Customize /> },
    { id: "3", label: "Starter Questions", element: <Starter /> },
    { id: "4", label: "User Data", element: <UserData /> },
    { id: "5", label: "Conversations", element: <Conversation /> },
    { id: "6", label: "Embeddings", element: <Embeddings /> },
    { id: "7", label: "Analytics", element: <Analytics /> },
  ];

  return (
    <div style={{height: '100%'}}>
      <TabContext value={value}>
        <Header>
          <Typography variant="h4" fontWeight={600}>
            {bot?.name}{" "}
          </Typography>
          <TabList
            TabIndicatorProps={{
              style: { background: "var(--secondary-light-color)"},
            }}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
          >
            {data.map((item) => (
              <TabStyle key={item.id} label={item.label} value={item.id} />
            ))}
          </TabList>

          <Avatar sx={{ bgcolor: "var(--secondary-color)" }}>N</Avatar>
        </Header>
        <Divider />
        <ContentWrapper>
          {data.map((item) => (
            <TabPanel style={{overflow: 'auto', flex: 1}} key={item.id} value={item.id}>
              {item.element}
            </TabPanel>
          ))}
          <PreviewBox>
            <IconButton sx={{p: 0}}>
              <Fullscreen />
            </IconButton>
          </PreviewBox>
        </ContentWrapper>
      </TabContext>
    </div>
  );
}
