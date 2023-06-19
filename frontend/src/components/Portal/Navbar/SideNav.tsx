import { Box, Typography, styled } from "@mui/material";
import { FilledButton, OutlinedButton } from "../../Home/Hero";
import {
  LightbulbCircle,
  Bolt,
  StickyNote2,
  Paid,
  AddCircleOutline,
  Description,
  ListAlt,
} from "@mui/icons-material/";
import logo from "../../../assets/chatbot-logo.png";
import Folder from "./Folder";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import CreateDialog from "../CreateDialog";

const SideWrapper = styled(Box)({
  position: "fixed",
  backgroundColor: "#2b3c4d",
  width: "250px",
  height: "100vh",
  top: 0,
  padding: "20px 25px",
  color: "#cbd6e2",
  overflow: "scroll",
  zIndex: "900",
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
  gap: "8px",
  "& .active": {
    color: "#fff",
  },
});
const CustomBox = styled(Link)({
  color: "inherit",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  textDecoration: "none",
  ":hover": {
    color: "#fff",
    cursor: "pointer",
  },
});

type Props = {
  show?: boolean;
  name?: string;
  setTabId?: Dispatch<SetStateAction<string>>;
};

export default function SideNav(props: Props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen((open) => !open);
  };
  const tabs = [
    { id: "1", name: "Source" },
    { id: "2", name: "Customize" },
    { id: "3", name: "Starter Questions" },
    { id: "4", name: "User Data" },
    { id: "5", name: "Conversations" },
    { id: "6", name: "Embeddings" },
    { id: "7", name: "Analytics" },
  ];

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
        <NavBox p={1} mt={1}>
          <CustomBox to="/portal/bot">
            {props.show ? (
              <>
                <ListAlt fontSize="small" />
                <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
                  Your Bots
                </Typography>
              </>
            ) : (
              <>
                <img src={logo} width={24} height={24} />
                <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
                  Chatbot builder
                </Typography>
              </>
            )}
          </CustomBox>

          {props?.show ? (
            <>
              <Box style={{ cursor: "pointer", display: 'flex', alignItems:'center', gap: '10px' }}>
                <Description fontSize="small" />
                <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
                  {props?.name}
                </Typography>
              </Box>
              <NavBox ml={3} gap="8px">
                {tabs.map((tab) => (
                  <Box
                    style={{ cursor: "pointer" }}
                    onClick={() => props.setTabId?.(() => tab.id)}
                    key={tab.id}
                  >
                    <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
                      {tab.name}
                    </Typography>
                  </Box>
                ))}
              </NavBox>
            </>
          ) : (
            <></>
          )}
        </NavBox>
      </NavBox>

      <OutlinedButton variant="outlined" className="side-nav-btn" fullWidth>
        <LightbulbCircle />
        <Typography variant="subtitle1" fontWeight={600}>
          Learning Center
        </Typography>
      </OutlinedButton>

      <FilledButton variant="contained" className="side-nav-btn" fullWidth>
        <Typography variant="subtitle1" fontWeight={600}>
          Upgrade
        </Typography>
        <Bolt />
      </FilledButton>

      <NavBox mt={4} p={1}>
        <CustomBox to="/portal/resources">
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
