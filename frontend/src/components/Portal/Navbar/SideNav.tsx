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
import { tabs } from "../../../utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createFolder, selectFolder } from "../../../store/actions";

const SideWrapper = styled(Box)({
  position: "fixed",
  backgroundColor: "#2b3c4d",
  width: "250px",
  height: "100vh",
  top: 0,
  padding: "20px 25px",
  color: " #cbd6e299",
  zIndex: "900",
  display: 'flex',
  flexDirection: 'column'
});
const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingBottom: "20px",
  cursor: "pointer",
});
const NavBox = styled(Box)({
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
const CustomBox = styled(Link)({
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

export default function SideNav(props: Props) {
  const [open, setOpen] = useState(false);
  const [Tab, setTab] = useState(window.location.hash.slice(9));
  console.log("path", window.location.hash.slice(9))

  const folder: FolderDetails[] = useSelector(
    (state: State) => state.folderList
  );
  const dispatch = useDispatch();
  const handleFolder = (folder: FolderDetails) => {
    dispatch(selectFolder(folder.id));
    dispatch(createFolder(folder));
    setOpen((open) => !open);
  };
  const handleClose = () => {
    setOpen((open) => !open);
  };
  const handleTabs = (id: string) => {
    setTab(() => id);
  };
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
        onClick={handleClose}
      >
        Create New
      </FilledButton>
      <Box mt={3} mb={1}>
        <Folder list={folder} />
      </Box>
      <Box overflow="scroll">
      <NavBox mb={2}>
        <CustomBox
          to="/portal/bot"
          className={`${Tab === "bot" ? "active" : ""}`}
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
          to="/portal/resources"
          className={`${Tab === "resources" ? "active" : ""}`}
          onClick={() => handleTabs("resources")}
        >
          <StickyNote2 />
          <Typography variant="body1" fontWeight={600} pt={0.25}>
            Resources
          </Typography>
        </CustomBox>
        <CustomBox
          to="/portal/earn"
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
          handleList={handleFolder}
          folder
        />
      )}
    </SideWrapper>
  );
}