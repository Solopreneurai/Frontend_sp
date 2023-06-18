import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Typography, Box, styled, Tab } from "@mui/material";
import { useState } from "react";
import UploadBox from "../UploadBox";
import { UploadFile, AddLink, Quiz } from "@mui/icons-material/";
import { FilledButton } from "../../Home/Hero";

const UploadContainer = styled(Box)({
  padding: 20,
  background: "#f6f9fc",
  flexDirection: "column",
  borderRadius: "20px",
});
const List = styled(TabList)({
  background: "#cbd6e2",
  borderRadius: "12px",
  padding: "3px 4px",
  alignItems: "center",
  ".MuiTabs-flexContainer": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  },
  ".MuiButtonBase-root.MuiTab-root.Mui-selected": {
    borderRadius: "12px",
    background: "#fff",
    color: "#ff7f53",
  },
});
const TabStyle = styled(Tab)({
  textTransform: "none",
  minHeight: 0,
  padding: "12px",
  color: "inherit",
});
const IconBox = styled(Box)({
  display: "flex",
  gap: "2px",
  alignItems: "center",
});

const tabs = [
  { id: "1", text: "Upload File", icon: <UploadFile /> },
  { id: "2", text: "Add a Link", icon: <AddLink /> },
  { id: "3", text: "Add sitemap", icon: <AddLink /> },
  { id: "4", text: "FAQ", icon: <Quiz /> },
];

export default function Source() {
  const [inputType, setInput] = useState("1");
  const handleInputType = (e: React.SyntheticEvent, val: string) => {
    console.log(e);
    setInput(() => val);
  };
  return (
    <Box>
      <Typography variant="h5" fontWeight={600}>
        Source
      </Typography>
      <Typography variant="body2" mt={1} mb={3}>
        Upload documents or add links to your knowledge base or website to train
        Chatbot on your own data.
      </Typography>
      <UploadContainer textAlign="center">
        <TabContext value={inputType}>
          <List
            centered
            onChange={handleInputType}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            {tabs.map((tab) => (
              <TabStyle
                key={tab.id}
                label={
                  <IconBox>
                    {tab.icon}
                    <Typography variant="body2">{tab.text}</Typography>
                  </IconBox>
                }
                value={tab.id}
              />
            ))}
          </List>
          <Box></Box>
          <TabPanel style={{ width: "100%", padding: "20px" }} value="1">
            <UploadBox
              text="Click to upload a file or drag and drop it here"
              subText="Up to 10MB in size, PDF, DOC, DOCX"
            />
          </TabPanel>
          <TabPanel value="2">add a link</TabPanel>
          <TabPanel value="3">add a sitemap</TabPanel>
          <TabPanel value="4">add frequently asked question</TabPanel>
        </TabContext>
        <FilledButton variant="contained" disabled>
          Upload and train
        </FilledButton>
      </UploadContainer>
    </Box>
  );
}
