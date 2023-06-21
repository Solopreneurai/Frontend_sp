import { Box, Typography, styled, Chip, Divider } from "@mui/material";
import NoChatBot from "../../../assets/no-chatbot.png";
import BotCard, { BotCardDetails } from "./BotCard";
import { FilledButton } from "../../Home/Hero";
import { AddCircleOutline } from "@mui/icons-material";
import CreateDialog from "../CreateDialog";
import { useState } from "react";
import Header from "../Header";
import DeleteDialog from "../DeleteDialog";

const Wrapper = styled(Box)({
  padding: "10px 30px",
});
const ImgBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
const BotGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px",
  margin: "30px 0",
});

const bots = [
  { id: "1", name: "temp" },
  { id: "2", name: "Solopreneur" },
  { id: "3", name: "AI bot 1" },
];

export default function BotList() {
  const [botList, setBotList] = useState<BotCardDetails[]>(bots);
  const [botId, setBotId] = useState("");
  const [createBot, setCreate] = useState(false);
  const [editBot, setEditBot] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteDialog = (name: string) => {
    setBotId(() => name);
    setDeleteDialog((open) => !open);
  };
  const handleEditClose = () => {
    setEditBot((open) => !open)
  }
  const handleEditName = (bot: BotCardDetails) => {
    setBotId(() => bot.id)
    setEditBot((open) => !open)
    console.log("Renaming the bot", bot);
    setBotList(() => botList.map((item) => item.id === bot.id ? bot : item))
  };
  const handleDelete = (id: string) => {
    setBotList(() => botList.filter((item) => item.id !== id));
    setDeleteDialog((open) => !open);
  };
  const handleNewBot = (bot: BotCardDetails) => {
    setBotList((prev) => [...prev, bot])
    setCreate((open) => !open)
  };

  const handleBotClose = () => {
    setCreate((open) => !open);
  };
  return (
    <div>
      <Box>
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
            </div>
          </Box>

          <Divider />
          {botList.length ? (
            <BotGrid>
              {botList.map((bot) => (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  handleDeleteDialog={handleDeleteDialog}
                  handleName={handleEditName}
                />
              ))}
            </BotGrid>
          ) : (
            <ImgBox>
              <img src={NoChatBot} width="40%" alt="no chatbots made" />
            </ImgBox>
          )}
        </Wrapper>
      </Box>

      {createBot && (
        <CreateDialog
        edit={false}
          title="New Bot"
          text="What would you like to name your bot"
          placeholder="Enter the name of bot"
          handleClose={handleBotClose}
          handleList={handleNewBot}
        />
      )}

      {deleteDialog && (
        <DeleteDialog
          id={botId}
          handleClose={handleDeleteDialog}
          handleDelete={handleDelete}
        />
      )}
      {editBot && (
        <CreateDialog
          edit={true}
          id={botId}
          title="Rename Bot"
          text="What would you like to name your bot"
          placeholder="Enter the name of bot"
          handleList={handleEditName}
          handleClose={handleEditClose}
        />
      )}
    </div>
  );
}