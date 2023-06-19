import { Typography, Box, styled } from "@mui/material";
import { useState } from "react";

const ViewBox = styled(Box)({
  display: "flex",
  gap: "5px",
  padding: "4px",
  borderRadius: "10px",
  cursor: "pointer",
  border: "1px solid #cbd6e2",
  "& .active": {
    background: "#ff5c35",
    color: "white",
    borderRadius: "8px",
  },
});

export default function UserData() {
  const [showForm, setShowForm] = useState(true);
  const handleShowForm = () => {
    setShowForm((showForm) => !showForm);
  };
  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={2}>
        User Data
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ViewBox>
          <Box
            sx={{ p: "6px" }}
            className={`${showForm ? "active" : ""}`}
            onClick={handleShowForm}
          >
            <Typography variant="body2" fontWeight={600}>
              Show Form
            </Typography>
          </Box>
          <Box
            sx={{ p: "6px" }}
            className={`${!showForm ? "active" : ""}`}
            onClick={handleShowForm}
          >
            <Typography variant="body2" fontWeight={600}>
              Hide Form
            </Typography>
          </Box>
        </ViewBox>
      </Box>

      <Typography variant="body2" color='#6b7280' mt={2}>
        Data Collected from your bot users
      </Typography>
    </>
  );
}
