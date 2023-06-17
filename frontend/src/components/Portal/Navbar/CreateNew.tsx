import { AddCircleOutline } from "@mui/icons-material";
import { FilledButton } from "../../Home/Hero";
import { useState } from "react";
import CreateDialog from "../CreateDialog";

function CreateNew() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen((open) => !open);
  };
  return (
    <div>
      <FilledButton
        variant="contained"
        className="side-nav-btn"
        startIcon={<AddCircleOutline style={{ fontSize: "14px" }} />}
        style={{ gap: 0 }}
        fullWidth
        onClick={handleClose}
      >
        Create New
      </FilledButton>

      <CreateDialog
        open={open}
        handleClose={handleClose}
        title="New Project"
        text="santushti sharma"
        placeholder="Enter the name of project"
      />
    </div>
  );
}

export default CreateNew;
