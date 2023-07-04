import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import Logo from "../../../../assets/chatbot-logo.png";
import { MoreVert } from "@mui/icons-material/";
import { FilledButton } from "../../../Home/Hero";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = styled(Box)({
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #cbd6e2",
});
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "20px",
});

type Props = {
  bot: BotCardDetails
  handleDeleteDialog: (bot: BotCardDetails) => void;
  handleName: (bot: BotCardDetails) => void
};

export default function BotCard({ bot, handleDeleteDialog, handleName }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const [openMenu, setOpen] = useState(Boolean(anchorEl));
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setOpen((open) => !open);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setOpen((open) => !open);
  };
 
  return (
    <div>
      <Card>
        <Header>
          <img width={36} src={Logo} />
          <div style={{ position: "relative" }}>
            <IconButton style={{ padding: 0 }} onClick={handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              open={openMenu}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => { setOpen(() => false); handleName(bot)}}>Rename</MenuItem>
              <MenuItem onClick={() => { setOpen(() => false); handleDeleteDialog(bot)}}>
                Delete
              </MenuItem>
            </Menu>
          </div>
        </Header>
        <Typography variant="h6" fontWeight={600} mb={2}>
          {bot.name}
        </Typography>
        <Link to={`/portal/bot/${bot.id}`} state={{ bot: bot }}>
          <FilledButton variant="contained" fullWidth>
            View
          </FilledButton>
        </Link>
      </Card>
    </div>
  );
}