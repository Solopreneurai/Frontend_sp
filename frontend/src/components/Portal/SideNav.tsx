import { Box, Button, Typography, styled } from "@mui/material";
import logo from "../../assets/chatbot-logo.png";
import { FilledButton, OutlinedButton } from "../Home/Hero";
import {
  AddCircleOutline,
  LibraryBooks,
  BookmarkBorder,
  LightbulbCircle,
  Bolt,
  StickyNote2,
  Paid,
} from "@mui/icons-material/";
import ChatLogo from "../../assets/chatbot-logo.png";
import "./Portal.css";
import { Dispatch, SetStateAction } from "react";

const SideWrapper = styled(Box)({
  position: "fixed",
  backgroundColor: "#2b3c4d",
  width: "250px",
  height: "100vh",
  top: 0,
  padding: "20px 25px",
  color: "#cbd6e2",
  overflow: "scroll",
});
const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingBottom: "12px",
});

const SelectButton = styled(Button)({
  color: "inherit",
  justifyContent: "space-between",
  padding: "6px 0",
  width: "100%",
  textTransform: "none",
  "& .arrow": {
    opacity: 0,
  },
  ":hover": {
    color: "#fff",
    "& .text": {
      transform: "scale(1.3)",
    },
    "& .arrow": {
      opacity: 1,
    },
  },
});

const NavBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const CustomBox = styled('a')({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  textDecoration: 'none',
  ":hover": {
    color: "#fff",
    cursor: "pointer",
  },
});

type Props = {
  id: string
  setTab: Dispatch<SetStateAction<string>>
}


export default function SideNav({id, setTab} : Props) {
  const handleTabs = (id: string) => {
    setTab(() => id)
  }
  return (
    <SideWrapper>
      <Logo>
        <img src={logo} width="36px" />
        <Typography variant="body1" fontWeight={600} color="#fff" pt={1}>
          AI Builder
        </Typography>
      </Logo>

      <FilledButton
        variant="contained"
        className="side-nav-btn"
        startIcon={<AddCircleOutline style={{ fontSize: "14px" }} />}
        style={{ gap: 0 }}
        fullWidth
      >
        Create New
      </FilledButton>
      

      <NavBox>
        <SelectButton>
          <Typography variant="body2" fontWeight={600} className="text">
            Select a folder...
          </Typography>

          <span className="arrow">&rarr;</span>
        </SelectButton>
        <NavBox p={1}>
        <CustomBox onClick={() => handleTabs('1')} className={`${id ? 'active':''}`}>
          <LibraryBooks />
          <Typography variant="subtitle1" fontWeight={600} pt={0.25}>
            Library
          </Typography>
        </CustomBox>
        <CustomBox onClick={() => handleTabs('2')}>
          <BookmarkBorder />
          <Typography variant="subtitle1" fontWeight={600} pt={0.25}>
            History
          </Typography>
        </CustomBox>
        <CustomBox sx={{ color: "#ff5c35" }} onClick={() => handleTabs('3')}>
          <img src={ChatLogo} width={24} height={24} />
          <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
            Chatbot builder
          </Typography>
        </CustomBox>
        </NavBox>
      </NavBox>

      <OutlinedButton
        variant="outlined"
        className="side-nav-btn"
        fullWidth
      >
        <LightbulbCircle />
        <Typography variant="subtitle1" fontWeight={600}>
          Learning Center
        </Typography>
      </OutlinedButton>

      <FilledButton
        variant="contained"
        className="side-nav-btn"
        fullWidth
      >
        <Typography variant="subtitle1" fontWeight={600}>
          Upgrade
        </Typography>
        <Bolt />
      </FilledButton>

      <NavBox mt={1} p={1}> 
        <CustomBox onClick={() => handleTabs('4')}>
          <StickyNote2 />
          <Typography variant="body1" fontWeight={600} pt={0.25}>
            Resources
          </Typography>
        </CustomBox>
        <CustomBox onClick={() => handleTabs('5')}>
          <Paid />
          <Typography variant="body1" fontWeight={600} pt={0.25}>
            Earn with ChatBuilder
          </Typography>
        </CustomBox>
      </NavBox>
    </SideWrapper>
  );
}
// add a plan box