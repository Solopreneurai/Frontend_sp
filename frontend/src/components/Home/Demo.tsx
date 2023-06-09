import { Box } from "@mui/material";
import  video from "../../assets/demo.mp4";

export default function Demo() {
  return (
    <Box sx={{p: 2}} textAlign="center">
      <video src={video} width="80%" controls autoPlay></video>
    </Box>
  );
}
