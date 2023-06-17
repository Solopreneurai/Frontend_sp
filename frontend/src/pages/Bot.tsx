import { Box, Tabs, Tab, styled, Typography, Divider, Avatar } from "@mui/material"
import { useState } from "react";

const Header = styled(Box)({
  padding: "20px 30px 10px 30px",
  display: 'flex',
  gap: '10px',
  overflow:'scroll'
})

const TabStyle = styled(Tab)({
  color: "#2b3c4d",
  "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
    borderRadius: "24px",
    backgroundColor: "#ff5c35",
    color: "white",
  },
});

const ContentWrapper = styled(Box)({
  padding: '20px 30px'
})

function Bot() {
  const [value, setValue] = useState(0)
  const handleChange = (e: React.SyntheticEvent, val: number) => {
    console.log(e)
    setValue(() => val)
  }
  const name = "temp";

  return (
    <div>
        <Header>
          <Typography variant="h4" fontWeight={600}>{name} </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
        >
          <TabStyle label="Source" />
          <TabStyle label="Customize" />
          <TabStyle label="Starter Questions" />
          <TabStyle label="User Data" />
          <TabStyle label="Conversations" />
          <TabStyle label="Embeddings" />
          <TabStyle label="Analytics" />
          <TabStyle label="Other" />
        </Tabs>
      <Avatar sx={{ bgcolor: "#ff5c35" }}>N</Avatar>

        </Header>

        <Divider />
        <ContentWrapper>
          <Typography> content comes here</Typography>
        </ContentWrapper>
    </div>
  )
}

export default Bot
