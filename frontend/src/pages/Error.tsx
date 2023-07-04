import { ErrorOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Error() {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: '100vh', 
          justifyContent: 'center'
        }}
      >
        <ErrorOutline sx={{ fontSize: "144px", color: '#ff5c35' }} />
        <Typography variant="h4" fontWeight={600} mt={3}>This page does not exist</Typography>
      </div>
  );
}
//create a 404 page
