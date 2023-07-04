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
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import CreateDialog from "../CreateDialog";
import { tabs } from "../../../utils/constants";

export const NavBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    "& .active": {
      color: "#fff",
      borderRadius: "8px",
      background: "linear-gradient(145deg, #2b3d4e, #33495d)",
      boxShadow: "14px 14px 28px #19242e",
      border: "1px solid #304457",
    },
  });
export  const CustomBox = styled(Link)({
    color: "inherit",
    display: "flex",
    gap: "10px",
    padding: "8px 12px",
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

export default function UserNav(props: Props) {
    const [open, setOpen] = useState(false);
  const [Tab, setTab] = useState(window.location.hash.slice(9));
  const handleNew = () => {
    console.log("Create new button clicked");
  };
  const handleClose = () => {
    setOpen((open) => !open);
  };
  const handleTabs = (id: string) => {
    setTab(() => id);
  };
  return (
    <>
    
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

      <Box overflow="scroll" mt={5}>
        <NavBox mb={4}>
          <CustomBox
            to="/portal/user/bot"
            className={`${Tab === "bot" || Tab === "" ? "active" : ""}`}
            onClick={() => handleTabs("bot")}
          >
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

          {props?.show && (
            <>
              <Box
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "6px 12px",
                }}
              >
                <Description fontSize="small" />
                <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
                  {props?.name}
                </Typography>
              </Box>
              <NavBox ml={2} gap="8px">
                {tabs.map((tab) => (
                  <Box
                    style={{ cursor: "pointer", padding: "5px 16px" }}
                    onClick={() => {
                      props.setTabId?.(() => tab.id);
                      handleTabs(tab.id);
                    }}
                    className={`${Tab === tab.id ? "active" : ""}`}
                    key={tab.id}
                  >
                    <Typography variant="subtitle1" fontWeight={600} pt={0.5}>
                      {tab.name}
                    </Typography>
                  </Box>
                ))}
              </NavBox>
            </>
          )}
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

        <NavBox mt={4}>
          <CustomBox
            to="/portal/user/resources"
            className={`${Tab === "resources" ? "active" : ""}`}
            onClick={() => handleTabs("resources")}
          >
            <StickyNote2 />
            <Typography variant="body1" fontWeight={600} pt={0.25}>
              Resources
            </Typography>
          </CustomBox>
          <CustomBox
            to="/portal/user/earn"
            className={`${Tab === "earn" ? "active" : ""}`}
            onClick={() => handleTabs("earn")}
          >
            <Paid />
            <Typography variant="body1" fontWeight={600} pt={0.25}>
              Earn with ChatBuilder
            </Typography>
          </CustomBox>
        </NavBox>
      </Box>
      {open && (
        <CreateDialog
          edit={false}
          handleClose={handleClose}
          title="New Project"
          text="Project Name"
          placeholder="Enter the name of project"
          handleList={handleNew}
        />
      )}

    </>
  )
}
