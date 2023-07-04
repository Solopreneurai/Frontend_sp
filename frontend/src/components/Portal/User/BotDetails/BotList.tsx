import { Box, Typography, styled, Chip, Divider } from "@mui/material";
import NoChatBot from "../../../../assets/no-chatbot.png";
import BotCard from "./BotCard";
import { FilledButton } from "../../../Home/Hero";
import { AddCircleOutline } from "@mui/icons-material";
import CreateDialog from "../../CreateDialog";
import { useState } from "react";
import Header from "../../Header";
import DeleteDialog from "../../DeleteDialog";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBot, createBot, editBot } from "../../../../store/actions";

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

export default function BotList() {
  const botList: BotCardDetails[] | [] = useSelector(
    (state: State) => state.botList
  );
  const dispatch = useDispatch();
  const [bot, setBot] = useState<BotCardDetails>({
    id: "",
    name: "",
  });
  const [createBotDialog, setCreate] = useState(false);
  const [editBotDialog, setEditBot] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteDialog = (bot: BotCardDetails) => {
    setBot(() => bot);
    setDeleteDialog((open) => !open);
  };
  const handleEditDialog = (bot: BotCardDetails) => {
    setBot(() => bot);
    setEditBot((open) => !open);
  };
  const handleEditName = (bot: BotCardDetails) => {
    setEditBot((open) => !open);
    dispatch(editBot(bot));
  };
  const handleDelete = (bot: BotCardDetails) => {
    dispatch(deleteBot(bot));
    console.log(dispatch(deleteBot(bot)));
    setDeleteDialog((open) => !open);
  };
  const handleNewBot = (bot: BotCardDetails) => {
    dispatch(createBot(bot));
    setCreate((open) => !open);
  };

  const handleBotClose = () => {
    setCreate((open) => !open);
  };
  return(
    <div>
    <Box>
      <Header title="Chatbot Builder" />
      <Wrapper>
        <Box mb={2} className="flex">
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography variant="h4" fontWeight={600}>
              Your Bots
            </Typography>
            <Chip label={botList.length} style={{ fontWeight: 600 }} />
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
                handleName={handleEditDialog}
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

    {createBotDialog && (
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
        type="bot"
        object={bot}
        handleClose={handleDeleteDialog}
        handleDelete={handleDelete}
      />
    )}
    {editBotDialog && (
      <CreateDialog
        edit
        id={bot.id}
        title="Rename Bot"
        text="What would you like to name your bot"
        placeholder="Enter the name of bot"
        handleList={handleEditName}
        handleClose={handleEditDialog}
      />
    )}
  </div>);
}
