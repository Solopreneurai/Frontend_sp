import { TabContext, TabPanel } from "@mui/lab";
import { Typography, styled } from "@mui/material";
import { List, TabStyle } from "./Source";
import { useState } from "react";

const CustomList = styled(List)({
  ".MuiTabs-flexContainer": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export default function Embeddings() {
  const [tab, setTab] = useState("1");
  const handleTab = (e: React.SyntheticEvent, val: string) => {
    console.log(e)
    setTab(() => val);
  };
  const tabs = [
    {
      id: "1",
      name: "Embed Script",
    },
    { id: "2", name: "API" },
    { id: "3", name: "Third Party Integrations" },
  ];
  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Embeddings
      </Typography>
      <Typography variant="body1" fontWeight={600} mt={2}>
        Allowed Hosts:
      </Typography>
      <Typography variant="body2" color="#6b7280" mt={1} mb={2}>
        Add the websites you want to allow to embed your bot or call the API
        endpoints. For example, https://www.example.com.
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        You need to have an active subscription to add whitelist hosts.Please
        upgrade your subscription.
      </Typography>
      <TabContext value={tab}>
        <CustomList
          centered
          onChange={handleTab}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          {tabs.map((tab) => (
            <TabStyle
              key={tab.id}
              label={<Typography variant="body2">{tab.name}</Typography>}
              value={tab.id}
            />
          ))}
        </CustomList>
        <TabPanel value="1">Embed script</TabPanel>
        <TabPanel value="2">API</TabPanel>
        <TabPanel value="3">Third Party Integrations</TabPanel>
      </TabContext>
    </>
  );
}