import { Box, styled, Typography } from "@mui/material";
import Icon from "../../assets/chatbot-logo.png";

const NavSection = styled(Box)({
  display: "flex",
  position: "fixed",
  padding: "8px 64px",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "20px 20px 60px #d9d9d9",
  zIndex: "2147483647",
  backgroundColor: "#fff",
  color: "#2b3c4d",
 
});
const Image = styled("img")({
  height: "56px",
  cursor: "pointer",
});
const NavStyle = styled(Box)({
  display: "flex",
});
const NavLink = styled("a")({
  padding: "16px 28px 8px 28px",
  color:'inherit',
  textDecoration:"none"
});

const NavList = () => {
  return (
    <NavStyle>
      <NavLink href="#pricing">
        <Typography variant="subtitle1" fontWeight={600}>
          Pricing
        </Typography>
      </NavLink>
      <NavLink href="#features">
        <Typography variant="subtitle1" fontWeight={600}>
          Features
        </Typography>
      </NavLink>
      <NavLink>
        <Typography variant="subtitle1" fontWeight={600}>
          Resources
        </Typography>
      </NavLink>
      <NavLink href="#contact">
        <Typography variant="subtitle1" fontWeight={600}>
          Contact
        </Typography>
      </NavLink>
    </NavStyle>
  );
};

export default function Navbar() {
  return (
    <NavSection>
      <Image src={Icon} />
      <NavList />
    </NavSection>
  );
}
// mobile view
// sign in or sign up button