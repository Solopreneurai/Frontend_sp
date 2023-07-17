import { Avatar, Box, Typography, Menu, MenuItem, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";
import { useState } from "react";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  const [openMenu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setMenu((open) => !open);
    setAnchorEl(e.currentTarget);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Box className="portal-header">
      <Typography fontSize={40} fontWeight={600}>
        {title}
      </Typography>
      <div>
        <Avatar onClick={handleClick} sx={{ bgcolor: "#ff5c35" }}>
          N
        </Avatar>
        <Menu
          open={openMenu}
          anchorEl={anchorEl}
          onClose={handleClick}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
