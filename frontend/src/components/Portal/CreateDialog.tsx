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

type Props = {
  title: string;
  text: string;
  placeholder: string;
  open: boolean;
  handleClose: () => void;
};

export default function CreateDialog(props: Props) {
  return (
    <Dialog
      open={props.open}
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
        <Typography variant="h5" fontWeight={600}>
          {props.title}
        </Typography>
        <IconButton sx={{ p: 0 }} onClick={props.handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" mb={1} mt={0.5}>
          {props.text}
        </Typography>
        <TextField
          placeholder={props.placeholder}
          sx={{
            border: "1px solid #cbd6e2",
            borderRadius: "10px",
            "& fieldset": { border: "none" },
          }}
          style={{ marginBottom: 20 }}
          fullWidth
        />
        <Box textAlign="right">
          <FilledButton variant="contained" sx={{ width: "50%" }}>
            Continue
          </FilledButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
