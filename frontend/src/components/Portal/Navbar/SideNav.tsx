import { Box, Typography, styled } from "@mui/material";
import { FilledButton, OutlinedButton } from "../../Home/Hero";
import {
  LightbulbCircle,
  Bolt,
  StickyNote2,
  Paid,
  AddCircleOutline,
} from "@mui/icons-material/";
import logo from "../../../assets/chatbot-logo.png";
import Folder from "./Folder";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateDialog from "../CreateDialog";

const SideWrapper = styled(Box)({
  position: "fixed",
  backgroundColor: 'var(--main-color)',
  width: "250px",
  height: "100vh",
  top: 0,
  padding: "20px 25px",
  color: "var(--main-light-color)",
  overflow: "scroll",
  zIndex: '900'
});
const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingBottom: "12px",
});

const NavBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  "& .active" : {
    color: 'var(--white-color)'
  }
});
const CustomBox = styled(Link)({
  color: 'inherit',
  display: "flex",
  gap: "10px",
  alignItems: "center",
  textDecoration: 'none',
  ":hover": {
    color: "var(--white-color)",
    cursor: "pointer",
  },
});

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen((open) => !open);
  };

  return (
    <SideWrapper>
      <Logo>
        <img src={logo} width="36px" />
        <Typography variant="body1" fontWeight={600} color="#fff" pt={1}>
          AI Builder
        </Typography>
      </Logo>

       <div>
      <FilledButton
        variant="contained"
        className="side-nav-btn"
        startIcon={<AddCircleOutline style={{ fontSize: "14px" }} />}
        style={{ gap: 0 }}
        fullWidth
        onClick={handleClose}
      >
        Create New
      </FilledButton>

      <CreateDialog
        open={open}
        handleClose={handleClose}
        title="New Project"
        text="Project Name"
        placeholder="Enter the name of project"
      />
    </div> 

      <NavBox mb={3} mt={4}>
        <Folder />
        <NavBox p={1}>
       
        <CustomBox to="/portal/bot" >
          <img src={logo} width={24} height={24} />
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

      <NavBox mt={4} p={1}> 
        <CustomBox to="/portal/resources" >
          <StickyNote2 />
          <Typography variant="body1" fontWeight={600} pt={0.25}>
            Resources
          </Typography>
        </CustomBox>
        <CustomBox to="/portal/earn">
          <Paid />
          <Typography variant="body1" fontWeight={600} pt={0.25}>
            Earn with ChatBuilder
          </Typography>
        </CustomBox>
      </NavBox>
    </SideWrapper>
  );
}