import { Box, styled, Typography } from "@mui/material";
import Icon from "../../assets/chatbot-logo.png";

const NavSection = styled(Box)({
  display: "flex",
  position: "fixed",
  padding: "12px 64px",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "20px 20px 60px #d9d9d9",
  zIndex: "2147483647",
  backgroundColor: "#fff",
  color: "#2b3c4d",
 
});
const Image = styled("img")({
  height: "60px",
  cursor: "pointer",
});
const NavStyle = styled(Box)({
  display: "flex",
});
const NavLink = styled("a")({
  padding: "20px 28px 8px 28px",
});

const NavList = () => {
  return (
    <NavStyle>
      <NavLink>
        <Typography variant="subtitle1" fontWeight={600}>
          Pricing
        </Typography>
      </NavLink>
      <NavLink>
        <Typography variant="subtitle1" fontWeight={600}>
          Features
        </Typography>
      </NavLink>
      <NavLink>
        <Typography variant="subtitle1" fontWeight={600}>
          Resources
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
