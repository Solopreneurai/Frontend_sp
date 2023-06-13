import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import { Search } from "@mui/icons-material/";
import { useState } from "react";
import "./Portal.css";

const Wrapper = styled(Box)({
  margin: "10px 30px",
  padding: "20px",
  backgroundColor: "#cbd6e2",
  borderRadius: "16px",
});

const SearchBox = styled(TextField)({
  borderRadius: "20px",
  background: "#fff",
  "& fieldset": { border: "none" },
});

const TabStyle = styled(Tab)({
  color: "#2b3c4d",
  "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
    borderRadius: "24px",
    backgroundColor: "#ff5c35",
    color: "white",
  },
});

function Library() {
  const [value, setValue] = useState(1);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    console.log(e);
    setValue(() => newValue);
  };
  return (
    <Wrapper>
      <SearchBox
        placeholder="Search in Library"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: "#ff5c35" }} />
            </InputAdornment>
          ),
          style: { color: "#2b3c4d" },
        }}
        fullWidth
      />

      <Box mt={4}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
        >
          <TabStyle label="All templates" />
          <TabStyle label="New" />
          <TabStyle label="Ads and Marketing Tools" />
          <TabStyle label="General Writing" />
          <TabStyle label="Social Media" />
          <TabStyle label="Articles and Blogs" />
          <TabStyle label="Website Copy" />
          <TabStyle label="Other" />
        </Tabs>
      </Box>
    </Wrapper>
  );
}

export default Library;
