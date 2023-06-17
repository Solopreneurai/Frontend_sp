import { Close} from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

type Props  = {
    title: string;
    text: string;
    placeholder: string;
    open: boolean;
    handleClose: () => void
}

export default function CreateDialog(props: Props) {
  console.log("create dialog box", props)
  return (
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>
            {props.title}
        <IconButton sx={{p: 0}}>
            <Close />
        </IconButton>
        </DialogTitle>
        <DialogContent>
            <Typography>{props.text}</Typography>
          <TextField placeholder={props.placeholder} />
        </DialogContent>
      </Dialog>
  );
}
