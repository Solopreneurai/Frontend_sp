import { Box, IconButton, Typography, styled } from "@mui/material";
import Logo from "../../../assets/chatbot-logo.png";
import { MoreVert } from "@mui/icons-material/";
import { FilledButton } from "../../Home/Hero";
import { Link } from "react-router-dom";

const BotGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px",
  margin: "30px 0",
  color: "#2b3c4d",
});
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

interface BotCardDetails {
  id: string;
  name: string;
}

type Props = {
  botList: BotCardDetails[];
};
function BotCard({ botList }: Props) {
  return (
    <BotGrid>
      {botList.map((bot) => (
        <Card key={bot.id}>
          <Header>
            <img width={36} src={Logo} />
            <IconButton style={{padding: 0}}>
              <MoreVert />
            </IconButton>
          </Header>
          <Typography variant="h6" fontWeight={600} mb={2}>
            {bot.name}
          </Typography>
          <Link to={`/portal/bot/${bot.id}`} >
          <FilledButton variant="contained" onClick={() => {}} fullWidth>View</FilledButton>

          </Link>
        </Card>
      ))}
    </BotGrid>
  );
}

export default BotCard;

//take array of bots in input and display a grid of bots
// on view bot, show the bot in details
