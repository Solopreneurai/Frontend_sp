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
  console.log(id);

  const headerContent = (id: string) => {
    switch (id) {
      case "1":
        return "Library";
      case "2":
        return "History";
      case "3":
        return "ChatBot Builder";
      case "4":
        return "Resources";
      case "5":
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
