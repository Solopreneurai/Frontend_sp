import { Button, Drawer, Typography, styled } from "@mui/material";
import { useState } from "react";

const SelectButton = styled(Button)({
  color: "inherit",
  justifyContent: "space-between",
  padding: "6px 0",
  width: "100%",
  textTransform: "none",
  "& .arrow": {
    opacity: 0,
  },
  ":hover": {
    color: "#fff",
    "& .text": {
      transform: "scale(1.3)",
    },
    "& .arrow": {
      opacity: 1,
    },
  },
});

const CustomDrawer = styled(Drawer)({
  padding: "25px",
  zIndex: 200,
});

function Folder() {
  const [openFolder, setOpen] = useState(false);
  const handleFolder = () => {
    setOpen((openFolder) => !openFolder);
  };
  return (
    <div>
      <SelectButton onClick={handleFolder}>
        <Typography variant="body2" fontWeight={600} className="text">
          Select a folder...
        </Typography>

        <span className="arrow">&rarr;</span>
      </SelectButton>
      <CustomDrawer
        anchor="left"
        open={openFolder}
        onClose={handleFolder}
        PaperProps={{
          style: {padding: 24, left: 250}
        }}
      >
        <Typography maxWidth={250}>Projects allow you to systematically organize your content</Typography>
        Drwer
      </CustomDrawer>
    </div>
  );
}

export default Folder;
//update the drawer component ui
