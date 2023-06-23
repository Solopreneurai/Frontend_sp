import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FilledButton, OutlinedButton } from "../Home/Hero";

type Props = {
  type: string;
  object: Object;
  handleClose: (obj: any) => void;
  handleDelete: (obj: any) => void;
};

export default function DeleteDialog(props: Props) {
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
        <Typography fontSize={24} fontWeight={600}>
          Delete {props.type}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" mb={2}>
          Are you sure you want to delete?
        </Typography>

        <Box textAlign="right">
          <OutlinedButton
            variant="outlined"
            onClick={() => props.handleClose(props.object)}
            style={{marginRight: 12}}
          >
            Cancel
          </OutlinedButton>
          <FilledButton
            variant="contained"
            onClick={() => props.handleDelete(props.object)}
          >
            Continue
          </FilledButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}