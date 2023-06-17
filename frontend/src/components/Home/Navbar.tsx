import { Box, styled, Typography } from "@mui/material";
import Icon from "../../assets/chatbot-logo.png";
import { FilledButton } from "./Hero";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavSection = styled(Box)({
  position: "fixed",
  padding: "8px 64px",
  width: "100%",
  boxShadow: "20px 20px 60px #d9d9d9",
  zIndex: "2147483647",
  backgroundColor: "#fff",
  color: "#2b3c4d",
});
const Image = styled("img")({
  height: "50px",
  cursor: "pointer",
});
const NavLink = styled(HashLink)({
  padding: "12px 28px 8px 28px",
  color: "inherit",
  textDecoration: "none",
});
const LoginButton = styled(FilledButton)({
  padding: "10px 40px",
  marginLeft: "20px",
});

const NavList = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <NavLink to="#pricing">
        <Typography variant="subtitle1" fontWeight={600}>
          Pricing
        </Typography>
      </NavLink>
      <NavLink to="#features">
        <Typography variant="subtitle1" fontWeight={600}>
          Features
        </Typography>
      </NavLink>
      <NavLink to="#">
        <Typography variant="subtitle1" fontWeight={600}>
          Resources
        </Typography>
      </NavLink>
      <NavLink to="#contact">
        <Typography variant="subtitle1" fontWeight={600}>
          Contact
        </Typography>
      </NavLink>
      <Link to="/login">
        <LoginButton variant="contained">Login</LoginButton>
      </Link>
    </Box>
  );
};

export default function Navbar() {
  return (
    <NavSection className="flex">
      <Image src={Icon} />
      <NavList />
    </NavSection>
  );
}