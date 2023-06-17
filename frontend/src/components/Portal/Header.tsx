import { Avatar, Box, Typography, styled } from "@mui/material";

type Props = {
  id: string;
};

const HeaderBox = styled(Box)({
  padding: "40px 30px 10px 30px",
  display: "flex",
  justifyContent: "space-between",
});

export default function Header({ id }: Props) {

  const headerContent = (id: string) => {
    switch (id) {
      case "bot":
        return "ChatBot Builder";
      case "resources":
        return "Resources";
      case "earn":
        return "Earn";
      default:
        return "";
    }
  };

  return (
    <HeaderBox>
      <Typography fontSize={40} fontWeight={600}>{headerContent(id)}</Typography>
      <Avatar sx={{ bgcolor: "#ff5c35" }}>N</Avatar>
    </HeaderBox>
  );
}
