import { Avatar, Box, Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <Box className="portal-header">
      <Typography fontSize={40} fontWeight={600}>{title}</Typography>
      <Avatar sx={{ bgcolor: "#ff5c35" }}>N</Avatar>
    </Box>
  );
}
