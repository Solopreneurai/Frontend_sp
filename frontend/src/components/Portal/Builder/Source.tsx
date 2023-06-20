import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Typography, Box, styled, Tab, IconButton } from "@mui/material";
import { useState } from "react";
import UploadBox from "../UploadBox";
import { UploadFile, AddLink, Quiz, Add } from "@mui/icons-material/";
import { FilledButton } from "../../Home/Hero";
import { Input } from "./Customize";

const UploadContainer = styled(Box)({
  padding: 20,
  background: "#f6f9fc",
  borderRadius: "20px",
});
export const List = styled(TabList)({
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
export const TabStyle = styled(Tab)({
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
  { id: "2", text: "Enter a Link", icon: <AddLink /> },
  { id: "3", text: "Add sitemap", icon: <AddLink /> },
  { id: "4", text: "FAQ", icon: <Quiz /> },
];

export default function Source() {
  const [inputType, setInput] = useState("1");
  const handleInputType = (e: React.SyntheticEvent, val: string) => {
    console.log(e);
    setInput(() => val);
  };
  // const urlList = []
  return (
    <>
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
          <TabPanel style={{ width: "100%", padding: "20px" }} value="1">
            <UploadBox
              text="Click to upload a file or drag and drop it here"
              subText="Up to 10MB in size, PDF, DOC, DOCX"
            />
          </TabPanel>
          <TabPanel value="2">
            <Box sx={{ p: 2, background: "white", borderRadius: "12px", 
  boxShadow: "20px 20px 60px #d9d9d9",

           }}>
              <Typography fontSize={12} align="left" ml={0.5} mb={0.5}>
                Enter website url : 
              </Typography>
              <Box className="flex">
                <Input
                  placeholder="Enter a website URL"
                  style={{ padding: "4px 8px" }}
                  fullWidth
                />
                <IconButton>
                  <Add />
                </IconButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Typography variant="h6" fontWeight={600} align="left">
              Upload URLs in bulk
            </Typography>
            <Typography variant="body1" mb={2} color="#6b7280" align="left">
              Download our template, add all URLs in the sheet, and upload
              instantly.
            </Typography>

            <UploadBox
              text="Click to upload a file or drag and drop it here"
              subText="Upto 100MB in size. CSV (See template above)."
            />
          </TabPanel>
          <TabPanel value="4">
            <Typography variant="h6" fontWeight={600} align="left">
              Upload FAQs in bulk
            </Typography>
            <Typography variant="body1" mb={2} color="#6b7280" align="left">
              Download our template, add all QnAs in the sheet, and upload
              instantly.
            </Typography>

            <UploadBox
              text="Add QnA in bulk"
              subText="Upto 10MB in size. CSV (See template above)."
            />
          </TabPanel>
        </TabContext>
        <FilledButton variant="contained" disabled>
          Upload and train
        </FilledButton>
      </UploadContainer>
    </>
  );
}
