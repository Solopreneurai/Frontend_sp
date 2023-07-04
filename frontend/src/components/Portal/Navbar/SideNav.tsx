import { Box, Typography, styled } from "@mui/material";
import logo from "../../../assets/chatbot-logo.png";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction} from "react";
import UserNav from "./UserNav";
import AdminNav from "./AdminNav";

const SideWrapper = styled(Box)({
  position: "fixed",
  backgroundColor: "#2b3c4d",
  width: "250px",
  height: "100vh",
  top: 0,
  padding: "20px 25px",
  color: " #cbd6e299",
  zIndex: "900",
  display: "flex",
  flexDirection: "column",
});
const Logo = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingBottom: "20px",
  cursor: "pointer",
  textDecoration: "none",
});

type Props = {
  show?: boolean;
  name?: string;
  setTabId?: Dispatch<SetStateAction<string>>;
  isAdmin: boolean;
};

export default function SideNav(props: Props) {
  return (
    <SideWrapper>
      <Logo to="/">
        <img src={logo} width="36px" />
        <Typography variant="body1" fontWeight={600} color="#fff" pt={1}>
          AI Builder
        </Typography>
      </Logo>

      {props.isAdmin ?<AdminNav />: <UserNav show={props.show} name={props.name} setTabId={props.setTabId} />}
    </SideWrapper>
  );
}
