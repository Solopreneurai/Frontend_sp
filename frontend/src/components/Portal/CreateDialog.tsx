import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FilledButton } from "../Home/Hero";
import { useState } from "react";
import { v4 as uuid } from "uuid";

type Props = {
  id?: string;
  edit: boolean;
  title: string;
  text: string;
  placeholder: string;
  handleList: (obj: any) => void;
  handleClose: (obj: any) => void;
};

export default function CreateDialog(props: Props) {
  const [input, setInput] = useState("");
  return (
    <Dialog
      open={true}
      onClose={props.handleClose}
      PaperProps={{
        style: {
          minWidth: 400,
          borderRadius: 18,
          padding: 6,
          color: "#2b3c4d",
        },
      }}
    >
      <DialogTitle className="flex">
        {props.title}
        <IconButton sx={{ p: 0 }} onClick={props.handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" mb={1} mt={0.5}>
          {props.text}
        </Typography>
        <TextField
          value={input}
          placeholder={props.placeholder}
          sx={{
            border: "1px solid #cbd6e2",
            borderRadius: "10px",
            "& fieldset": { border: "none" },
          }}
          style={{ marginBottom: 20 }}
          onChange={(e) => setInput(() => e.target.value)}
          fullWidth
        />
        <Box textAlign="right">
          <FilledButton
            variant="contained"
            disabled={input.length ? false : true}
            sx={{ width: "50%" }}
            onClick={() =>
              props.handleList({
                id: props.edit ? props.id : uuid(),
                name: input,
              })
            }
          >
            Continue
          </FilledButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
