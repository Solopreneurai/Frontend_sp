import {
  Box,
  styled,
  Typography,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Fullscreen } from "@mui/icons-material/";
import Source from "../components/Portal/Builder/Source";
import Customize from "../components/Portal/Builder/Customize";
import UserData from "../components/Portal/Builder/UserData";
import Starter from "../components/Portal/Builder/Starter";
import Conversation from "../components/Portal/Builder/Conversation";
import Embeddings from "../components/Portal/Builder/Embeddings";
import Analytics from "../components/Portal/Builder/Analytics";
import SideNav from "../components/Portal/Navbar/SideNav";

const Header = styled(Box)({
  padding: "30px 30px 10px 30px",
});

const ContentWrapper = styled(Box)({
  display: "flex",
  height: "100%",
  overflow: "auto",
  flex: 1,
});
const PreviewBox = styled(Box)({
  background: "#f6f9fc",
  padding: "20px",
  flex: 1,
  maxWidth: 450,
});

export default function Bot() {
  const [value, setValue] = useState("1");

  const { bot } = useLocation().state;
  const renderElement = (value: string) => {
    switch (value) {
      case "1":
        return <Source />;
      case "2":
        return <Customize name={bot?.name} />;
      case "3":
        return <Starter />;
      case "4":
        return <UserData />;
      case "5":
        return <Conversation />;
      case "6":
        return <Embeddings />;
      case "7":
        return <Analytics />;
    }
  };
  return (
    <div>
      <SideNav show setTabId={setValue} name={bot?.name} />
      <Box ml={32} height="100vh">
        <Box height="100%" display="flex" flexDirection="column">
          <Header className="flex">
            <Typography variant="h4" fontWeight={600}>
              {bot?.name}{" "}
            </Typography>
            <Avatar sx={{ bgcolor: "#ff5c35" }}>N</Avatar>
          </Header>
          <Divider />
          <ContentWrapper>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', overflow:'auto', padding: '16px 30px'}}>{renderElement(value)}</Box>
            <PreviewBox style={{ display: value === "5" ? "none" : "block" }}>
              <IconButton sx={{ p: 0 }}>
                <Fullscreen />
              </IconButton>
            </PreviewBox>
          </ContentWrapper>
        </Box>
      </Box>
    </div>
  );
}
