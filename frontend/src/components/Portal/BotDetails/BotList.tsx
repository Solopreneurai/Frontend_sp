import { Box, Typography, styled, Chip, Divider } from "@mui/material";
import NoChatBot from "../../../assets/no-chatbot.png";
import BotCard from "./BotCard";
import { FilledButton } from "../../Home/Hero";
import { AddCircleOutline } from "@mui/icons-material";
import CreateDialog from "../CreateDialog";
import { useState } from "react";
import Header from "../Header";

const Wrapper = styled(Box)({
  padding: "10px 30px",
});
const ImgBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export default function BotList() {
  const bots = [
    { id: "1", name: "temp" },
    { id: "2", name: "Solopreneur" },
    { id: "3", name: "AI bot 1" },
  ];
  const [createBot, setCreate] = useState(false);
  const handleBotClose = () => {
    setCreate((open) => !open);
  };
  return (
    <div>
      <Header title="Chatbot Builder" />
      <Wrapper>
        <Box mb={2} className="flex">
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography variant="h4" fontWeight={600}>
              Your Bots
            </Typography>
            <Chip label={bots.length} style={{ fontWeight: 600 }} />
          </Box>

          <div>
            <FilledButton
              variant="contained"
              onClick={handleBotClose}
              startIcon={<AddCircleOutline style={{ fontSize: "14px" }} />}
            >
              Create New
            </FilledButton>
            <CreateDialog
              title="New Bot"
              text="What would you like to name your bot"
              placeholder="Enter the name of bot"
              open={createBot}
              handleClose={handleBotClose}
            />
          </div>
        </Box>

        <Divider />
        {bots.length ? (
          <BotCard botList={bots} />
        ) : (
          <ImgBox>
            <img src={NoChatBot} width="40%" alt="no chatbots made" />
          </ImgBox>
        )}
      </Wrapper>
    </div>
  );
}
